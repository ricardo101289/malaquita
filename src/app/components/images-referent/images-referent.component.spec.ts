import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesReferentComponent } from './images-referent.component';

describe('ImagesReferentComponent', () => {
  let component: ImagesReferentComponent;
  let fixture: ComponentFixture<ImagesReferentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesReferentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesReferentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
