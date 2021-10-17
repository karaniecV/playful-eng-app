import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Unit7Component } from './unit7.component';

describe('Unit7Component', () => {
  let component: Unit7Component;
  let fixture: ComponentFixture<Unit7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Unit7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Unit7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
