import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Unit8Component } from './unit8.component';

describe('Unit8Component', () => {
  let component: Unit8Component;
  let fixture: ComponentFixture<Unit8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Unit8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Unit8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
