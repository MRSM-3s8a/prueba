import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductivityFormComponent } from './productivity-form.component';

describe('ProductivityFormComponent', () => {
  let component: ProductivityFormComponent;
  let fixture: ComponentFixture<ProductivityFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductivityFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductivityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
