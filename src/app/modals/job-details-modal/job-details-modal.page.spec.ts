import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobDetailsModalPage } from './job-details-modal.page';

describe('JobDetailsModalPage', () => {
  let component: JobDetailsModalPage;
  let fixture: ComponentFixture<JobDetailsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobDetailsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobDetailsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
