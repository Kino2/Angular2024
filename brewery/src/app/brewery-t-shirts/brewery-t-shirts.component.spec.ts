import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryTShirtsComponent } from './brewery-t-shirts.component';

describe('BreweryTShirtsComponent', () => {
  let component: BreweryTShirtsComponent;
  let fixture: ComponentFixture<BreweryTShirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreweryTShirtsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreweryTShirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
