import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmbeddedViewComponent } from './create-embedded-view.component';

describe('CreateEmbeddedViewComponent', () => {
  let component: CreateEmbeddedViewComponent;
  let fixture: ComponentFixture<CreateEmbeddedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmbeddedViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmbeddedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
