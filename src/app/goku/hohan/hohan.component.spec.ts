import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HohanComponent } from './hohan.component';

describe('HohanComponent', () => {
  let component: HohanComponent;
  let fixture: ComponentFixture<HohanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HohanComponent]
    });
    fixture = TestBed.createComponent(HohanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
