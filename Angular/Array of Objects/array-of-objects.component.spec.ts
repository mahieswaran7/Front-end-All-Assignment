import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayOfObjectsComponent } from './array-of-objects.component';

describe('ArrayOfObjectsComponent', () => {
  let component: ArrayOfObjectsComponent;
  let fixture: ComponentFixture<ArrayOfObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArrayOfObjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayOfObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
