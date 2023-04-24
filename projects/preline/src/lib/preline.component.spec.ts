import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrelineComponent } from './preline.component';

describe('PrelineComponent', () => {
  let component: PrelineComponent;
  let fixture: ComponentFixture<PrelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrelineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
