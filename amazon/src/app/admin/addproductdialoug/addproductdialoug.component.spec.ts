import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductdialougComponent } from './addproductdialoug.component';

describe('AddproductdialougComponent', () => {
  let component: AddproductdialougComponent;
  let fixture: ComponentFixture<AddproductdialougComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproductdialougComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproductdialougComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
