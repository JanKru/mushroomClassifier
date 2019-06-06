import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MushroomClassifierComponent } from './mushroom-classifier.component';

describe('MushroomClassifierComponent', () => {
  let component: MushroomClassifierComponent;
  let fixture: ComponentFixture<MushroomClassifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MushroomClassifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MushroomClassifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
