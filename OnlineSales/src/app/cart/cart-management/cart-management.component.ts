import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CartService } from '../cart.service';
import { ResearchService } from '../../research/research.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-cart-management',
  templateUrl: './cart-management.component.html',
  styleUrls: ['./cart-management.component.css']
})
export class CartManagementComponent implements OnInit {

  action: string = '';
  // email: string = 'delune@lirmm.fr';
  email: string = '';
  numAction: number = 1;
  product: any = {};
  name: string = 'inconnu';

  constructor(private cartService: CartService, private authService: AuthService, private router: Router, private route: ActivatedRoute, private researchService: ResearchService) {
    this.email = this.authService.email;
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      // console.log("CartManagement Init :: " + params['action'] + '/' + params['id']);
      this.cartProductManagement(params["action"], params["id"]);
    } );
  }

  cartProductManagement(action: string,id: string) {
    this.researchService.getProductById(id).subscribe( res => this.product=res );
    if(action=='add') this.action = "Ajout";
    if(action=='remove') this.action = "Suppression";
    // console.log("Dans managementCartProduct avec action="+action+" et parameters=productId="+id+"/email="+this.email);
    this.cartService.modifyCart(action,id,this.email)
        .subscribe( res => {
          this.router.navigate( [ '/cart', {outlets:{'cartDisplay':['display',this.numAction]}} ] );
          this.numAction++;
        } );
  }

  cartReset(){
    this.cartService.cartReset(this.email).subscribe( res => this.router.navigate( ['/cart' , {outlets:{'cartDisplay':['display']}}] ) );
  }

}
