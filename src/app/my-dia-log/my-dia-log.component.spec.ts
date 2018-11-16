import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDiaLogComponent } from './my-dia-log.component';

describe('MyDiaLogComponent', () => {
  let component: MyDiaLogComponent;
  let fixture: ComponentFixture<MyDiaLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDiaLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDiaLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
