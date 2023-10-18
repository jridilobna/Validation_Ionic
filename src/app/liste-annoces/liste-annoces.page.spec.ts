import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeAnnocesPage } from './liste-annoces.page';

describe('ListeAnnocesPage', () => {
  let component: ListeAnnocesPage;
  let fixture: ComponentFixture<ListeAnnocesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListeAnnocesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
