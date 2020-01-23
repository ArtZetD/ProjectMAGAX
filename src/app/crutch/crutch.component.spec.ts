import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrutchComponent } from './crutch.component';

describe('CrutchComponent', () => {
  let component: CrutchComponent;
  let fixture: ComponentFixture<CrutchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrutchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrutchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
