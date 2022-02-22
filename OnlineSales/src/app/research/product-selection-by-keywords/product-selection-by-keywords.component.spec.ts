import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSelectionByKeywordsComponent } from './product-selection-by-keywords.component';

describe('ProductSelectionByKeywordsComponent', () => {
  let component: ProductSelectionByKeywordsComponent;
  let fixture: ComponentFixture<ProductSelectionByKeywordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSelectionByKeywordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSelectionByKeywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
