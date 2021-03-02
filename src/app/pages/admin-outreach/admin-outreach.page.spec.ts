import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminOutreachPage } from './admin-outreach.page';

describe('AdminOutreachPage', () => {
  let component: AdminOutreachPage;
  let fixture: ComponentFixture<AdminOutreachPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOutreachPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminOutreachPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
