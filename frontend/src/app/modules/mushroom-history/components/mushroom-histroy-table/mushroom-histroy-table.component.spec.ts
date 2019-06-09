import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MushroomHistroyTableComponent } from './mushroom-histroy-table.component';

describe('MushroomHistroyTableComponent', () => {
  let component: MushroomHistroyTableComponent;
  let fixture: ComponentFixture<MushroomHistroyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MushroomHistroyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MushroomHistroyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
