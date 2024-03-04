import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigathionComponent } from './navigathion.component';

describe('NavigathionComponent', () => {
  let component: NavigathionComponent;
  let fixture: ComponentFixture<NavigathionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigathionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigathionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
