import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostExpensiveComponent } from './most-expensive.component';

describe('MostExpensiveComponent', () => {
  let component: MostExpensiveComponent;
  let fixture: ComponentFixture<MostExpensiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostExpensiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostExpensiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
