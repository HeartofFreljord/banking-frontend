import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02PageComponent } from './c02-page.component';

describe('C02PageComponent', () => {
  let component: C02PageComponent;
  let fixture: ComponentFixture<C02PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C02PageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C02PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
