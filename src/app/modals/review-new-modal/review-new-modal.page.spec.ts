import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReviewNewModalPage } from './review-new-modal.page';

describe('ReviewNewModalPage', () => {
  let component: ReviewNewModalPage;
  let fixture: ComponentFixture<ReviewNewModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewNewModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewNewModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
