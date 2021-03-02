import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminTemplatesPage } from './admin-templates.page';

describe('AdminTemplatesPage', () => {
  let component: AdminTemplatesPage;
  let fixture: ComponentFixture<AdminTemplatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTemplatesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminTemplatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
