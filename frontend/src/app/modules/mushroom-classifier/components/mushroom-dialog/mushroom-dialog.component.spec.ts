import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MushroomDialogComponent } from './mushroom-dialog.component';

describe('MushroomDialogComponent', () => {
  let component: MushroomDialogComponent;
  let fixture: ComponentFixture<MushroomDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MushroomDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MushroomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
