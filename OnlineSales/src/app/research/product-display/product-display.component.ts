import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ResearchService } from '../research.service';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  public products: Object[] = [];
  private subscribe: any

  constructor(private activatedRoute: ActivatedRoute, private researchService: ResearchService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (params: Params) => {
      let subroute = '';
      if(params['type']!==undefined){
        // cas d une recherche sur criteres
        subroute = 'criteria' + '/' + params['type'] + '/' + params['brand'] + '/' + params['minprice'] + '/' + params['maxprice'] + '/' + params['minpopularity'];
      } else {
        // cas d unerecherche sur mot clef
        subroute = 'keywords'+ '?' + params['terms'].split(' ').join('&');
      }
      this.researchService.getProducts(subroute).subscribe( res => this.products=res );
    } );
  }

}
