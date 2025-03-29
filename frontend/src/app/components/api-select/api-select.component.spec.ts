import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSelectComponent } from './api-select.component';

describe('ApiSelectComponent', () => {
  let component: ApiSelectComponent;
  let fixture: ComponentFixture<ApiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
