import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityAndguaranteeComponent } from './quality-andguarantee.component';

describe('QualityAndguaranteeComponent', () => {
  let component: QualityAndguaranteeComponent;
  let fixture: ComponentFixture<QualityAndguaranteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityAndguaranteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityAndguaranteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
