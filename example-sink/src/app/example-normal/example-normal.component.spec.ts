import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNormalComponent } from './example-normal.component';

describe('ExampleNormalComponent', () => {
  let component: ExampleNormalComponent;
  let fixture: ComponentFixture<ExampleNormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleNormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
