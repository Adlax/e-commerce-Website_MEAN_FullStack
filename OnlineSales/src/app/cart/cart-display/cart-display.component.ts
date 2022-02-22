import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-cart-display',
  templateUrl: './cart-display.component.html',
  styleUrls: ['./cart-display.component.css']
})
export class CartDisplayComponent implements OnInit {

  public products: any[] = [];
  private email: string = '';
  public total: number = 0;
  private numAction: number = 0;

  constructor(private cartService: CartService, private authService: AuthService, private route: ActivatedRoute, private router: Router) {
    this.email = this.authService.email;
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      // console.log('cart display avec email : ' + this.email);
      this.cartService.getCartProducts('products/email='+this.email)
                      .subscribe( res => {
                        this.products = res;
                        // console.log("Produits de la personne : " + JSON.stringify(res));
                        this.total = 0;
                        for(let prod of res){
                          this.total += prod.nb * prod.price;
                        }
                      } );
    } );
  }

  addCartProduct(id) {
    this.router.navigate(['/cart',{outlets:{'cartManagement':['management','add',id,this.numAction]}}]);
    this.numAction++;
  }

  removeCartProduct(id) {
    this.router.navigate(['/cart',{outlets:{'cartManagement':['management','remove',id,this.numAction]}}]);
    this.numAction++;
  }

  cartReset() {
    this.total = 0;
    this.cartService.cartReset(this.email)
                    .subscribe( res => {
                      this.router.navigate(['/cart',{outlets:{'cartDisplay':['display',-1]}}]);
                    } );
  }

  cartValidation() {
    this.router.navigate(['/cart',{outlets:{'cartValidation':['validation']}}]);
  }

}
