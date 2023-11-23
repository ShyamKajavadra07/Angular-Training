import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistComponent } from './assist.component';

describe('AssistComponent', () => {
  let component: AssistComponent;
  let fixture: ComponentFixture<AssistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssistComponent]
    });
    fixture = TestBed.createComponent(AssistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
