import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSubsinkComponent } from './example-subsink.component';

describe('ExampleSubsinkComponent', () => {
  let component: ExampleSubsinkComponent;
  let fixture: ComponentFixture<ExampleSubsinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleSubsinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleSubsinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
