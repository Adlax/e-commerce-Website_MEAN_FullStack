import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResearchComponent } from './research.component';
import { EvenOddPipe } from './even-odd.pipe';
import { SortPipe } from './sort.pipe';
import { ResearchService } from './research.service';
import { ResearchRoutingModule } from './research-routing.module';

import { ProductDisplayComponent } from './product-display/product-display.component';
import { ProductSelectionByCriteriaComponent } from './product-selection-by-criteria/product-selection-by-criteria.component';
import { ProductSelectionByKeywordsComponent } from './product-selection-by-keywords/product-selection-by-keywords.component';

@NgModule({
  exports:[ResearchComponent],
  imports: [CommonModule,ResearchRoutingModule],
  declarations:[ProductSelectionByCriteriaComponent,ProductDisplayComponent,EvenOddPipe, ResearchComponent, ProductSelectionByKeywordsComponent, SortPipe],
  providers:[ResearchService],
  bootstrap:[ResearchComponent]
})
export class ResearchModule {}
