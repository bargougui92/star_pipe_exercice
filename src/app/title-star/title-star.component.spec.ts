import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleStarComponent } from './title-star.component';

describe('TitleStarComponent', () => {
  let component: TitleStarComponent;
  let fixture: ComponentFixture<TitleStarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleStarComponent]
    });
    fixture = TestBed.createComponent(TitleStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
