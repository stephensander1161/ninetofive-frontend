import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeekerStatsModalPage } from './seeker-stats-modal.page';

describe('SeekerStatsModalPage', () => {
  let component: SeekerStatsModalPage;
  let fixture: ComponentFixture<SeekerStatsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerStatsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeekerStatsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
