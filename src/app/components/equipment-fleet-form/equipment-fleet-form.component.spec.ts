import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentFleetFormComponent } from './equipment-fleet-form.component';

describe('EquipmentFleetFormComponent', () => {
  let component: EquipmentFleetFormComponent;
  let fixture: ComponentFixture<EquipmentFleetFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentFleetFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentFleetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
