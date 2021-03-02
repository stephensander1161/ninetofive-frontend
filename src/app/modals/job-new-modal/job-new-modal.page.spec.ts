import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobNewModalPage } from './job-new-modal.page';

describe('JobNewModalPage', () => {
  let component: JobNewModalPage;
  let fixture: ComponentFixture<JobNewModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobNewModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobNewModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
