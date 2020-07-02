import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentFleetComponent } from './equipment-fleet.component';

describe('EquipmentFleetComponent', () => {
  let component: EquipmentFleetComponent;
  let fixture: ComponentFixture<EquipmentFleetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentFleetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
