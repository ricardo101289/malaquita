import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquitaSubheaderComponent } from './maquita-subheader.component';

describe('MaquitaSubheaderComponent', () => {
  let component: MaquitaSubheaderComponent;
  let fixture: ComponentFixture<MaquitaSubheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaquitaSubheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquitaSubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
