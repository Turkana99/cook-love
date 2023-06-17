import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptDataComponent } from './accept-data.component';

describe('AcceptDataComponent', () => {
  let component: AcceptDataComponent;
  let fixture: ComponentFixture<AcceptDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
