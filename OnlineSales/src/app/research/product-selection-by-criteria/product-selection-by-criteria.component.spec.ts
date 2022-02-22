import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSelectionByCriteriaComponent } from './product-selection-by-criteria.component';

describe('ProductSelectionByCriteriaComponent', () => {
  let component: ProductSelectionByCriteriaComponent;
  let fixture: ComponentFixture<ProductSelectionByCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSelectionByCriteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSelectionByCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
