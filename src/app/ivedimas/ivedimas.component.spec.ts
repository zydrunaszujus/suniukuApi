import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvedimasComponent } from './ivedimas.component';

describe('IvedimasComponent', () => {
  let component: IvedimasComponent;
  let fixture: ComponentFixture<IvedimasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvedimasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IvedimasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
