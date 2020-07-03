import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManpowerFormComponent } from './manpower-form.component';

describe('ManpowerFormComponent', () => {
  let component: ManpowerFormComponent;
  let fixture: ComponentFixture<ManpowerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManpowerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManpowerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
