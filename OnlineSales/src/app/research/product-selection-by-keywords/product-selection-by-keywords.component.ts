import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-selection-by-keywords',
  templateUrl: './product-selection-by-keywords.component.html',
  styleUrls: ['./product-selection-by-keywords.component.css']
})
export class ProductSelectionByKeywordsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  productSelection(terms: string): void {
    this.router.navigate([ "/research" , {outlets: {'display':['display',terms]}} ])
  }

}
