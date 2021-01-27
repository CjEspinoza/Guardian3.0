import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdagePageComponent } from './updage-page.component';

describe('UpdagePageComponent', () => {
  let component: UpdagePageComponent;
  let fixture: ComponentFixture<UpdagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdagePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
