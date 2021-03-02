import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchJobsPage } from './search-jobs.page';

describe('SearchJobsPage', () => {
  let component: SearchJobsPage;
  let fixture: ComponentFixture<SearchJobsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchJobsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchJobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
