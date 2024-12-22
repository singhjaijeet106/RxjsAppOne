import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObervableComponent } from './obervable.component';

describe('ObervableComponent', () => {
  let component: ObervableComponent;
  let fixture: ComponentFixture<ObervableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObervableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObervableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
