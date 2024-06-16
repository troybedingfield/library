import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTroyUiComponent } from './ngx-troy-ui.component';

describe('NgxTroyUiComponent', () => {
  let component: NgxTroyUiComponent;
  let fixture: ComponentFixture<NgxTroyUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxTroyUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxTroyUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
