import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyOneComponentComponent } from './body-one-component.component';

describe('BodyOneComponentComponent', () => {
  let component: BodyOneComponentComponent;
  let fixture: ComponentFixture<BodyOneComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyOneComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyOneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
