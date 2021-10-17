import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Unit9Component } from './unit9.component';

describe('Unit9Component', () => {
  let component: Unit9Component;
  let fixture: ComponentFixture<Unit9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Unit9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Unit9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
