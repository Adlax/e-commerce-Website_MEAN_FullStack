import { Component, OnInit } from '@angular/core';
import { ResearchService } from '../research.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-selection-by-criteria',
  templateUrl: './product-selection-by-criteria.component.html',
  styleUrls: ['./product-selection-by-criteria.component.css']
})
export class ProductSelectionByCriteriaComponent implements OnInit {

  public selectors: any[] = [];
  private params: any = {"type":"*","brand":"*","minprice":"*","maxprice":"*","minpopularity":"*"};

  constructor(private researchService: ResearchService, private router: Router) { }

  ngOnInit(): void {
    this.researchService.getProducts('selectors')
                        .subscribe( res => {
                          this.selectors = res;
                          // console.log(JSON.stringify(res));
                        } );

  }

  selection(event,selector) {
    let selectElt = event.target;
    let optionIndex = selectElt.selectedIndex;
    let optionText = selectElt.options[optionIndex].text;
    if(selector==optionText){
      if(selector=='price'){
        this.params["minprice"] = "*";
        this.params["maxprice"] = "*";
      } else {
        this.params[selector] = "*";
      }
      selectElt.style.backgroundColor = "#F5F3F3";
    } else {
      if(selector=='price'){
        let price = /(.+) - (.+)/.exec(optionText);
        this.params["minprice"] = price[1];
        this.params["maxprice"] = price[2];
      } else {
        this.params[selector] = optionText;
      }
      selectElt.style.backgroundColor = "yellow";
    }
  }

  productSelection(){
    this.router.navigate([ '/research' , {outlets: {'display':['display',this.params.type,this.params.brand,this.params.minprice,this.params.maxprice,this.params.minpopularity]} } ])
  }

}
