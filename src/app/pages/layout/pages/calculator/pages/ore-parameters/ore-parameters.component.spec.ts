import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OreParametersComponent } from './ore-parameters.component';

describe('OreParametersComponent', () => {
  let component: OreParametersComponent;
  let fixture: ComponentFixture<OreParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OreParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OreParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
