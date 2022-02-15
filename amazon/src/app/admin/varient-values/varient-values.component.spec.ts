import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarientValuesComponent } from './varient-values.component';

describe('VarientValuesComponent', () => {
  let component: VarientValuesComponent;
  let fixture: ComponentFixture<VarientValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarientValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarientValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
