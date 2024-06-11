import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyLineComponentComponent } from './body-line-component.component';

describe('BodyLineComponentComponent', () => {
  let component: BodyLineComponentComponent;
  let fixture: ComponentFixture<BodyLineComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyLineComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyLineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
