import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeHousesComponent } from './type-houses.component';

describe('TypeHousesComponent', () => {
  let component: TypeHousesComponent;
  let fixture: ComponentFixture<TypeHousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeHousesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
