import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyThreComponentComponent } from './body-thre-component.component';

describe('BodyThreComponentComponent', () => {
  let component: BodyThreComponentComponent;
  let fixture: ComponentFixture<BodyThreComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyThreComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyThreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
