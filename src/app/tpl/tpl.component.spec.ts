import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TplComponent } from './tpl.component';

describe('TplComponent', () => {
  let component: TplComponent;
  let fixture: ComponentFixture<TplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
