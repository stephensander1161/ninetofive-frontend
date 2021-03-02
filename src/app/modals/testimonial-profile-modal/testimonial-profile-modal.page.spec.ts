import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestimonialProfileModalPage } from './testimonial-profile-modal.page';

describe('TestimonialProfileModalPage', () => {
  let component: TestimonialProfileModalPage;
  let fixture: ComponentFixture<TestimonialProfileModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialProfileModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestimonialProfileModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
