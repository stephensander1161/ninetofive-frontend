import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SkillReportModalPage } from './skill-report-modal.page';

describe('SkillReportModalPage', () => {
  let component: SkillReportModalPage;
  let fixture: ComponentFixture<SkillReportModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillReportModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SkillReportModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
