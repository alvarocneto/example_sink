import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSyncComponent } from './example-sync.component';

describe('ExampleSyncComponent', () => {
  let component: ExampleSyncComponent;
  let fixture: ComponentFixture<ExampleSyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleSyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
