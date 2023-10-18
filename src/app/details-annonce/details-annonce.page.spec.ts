import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsAnnoncePage } from './details-annonce.page';

describe('DetailsAnnoncePage', () => {
  let component: DetailsAnnoncePage;
  let fixture: ComponentFixture<DetailsAnnoncePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailsAnnoncePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
