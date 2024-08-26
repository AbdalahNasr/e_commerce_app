import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadigComponent } from './loadig.component';

describe('LoadigComponent', () => {
  let component: LoadigComponent;
  let fixture: ComponentFixture<LoadigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadigComponent]
    });
    fixture = TestBed.createComponent(LoadigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
