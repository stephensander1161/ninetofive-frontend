import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminServicesPage } from './admin-services.page';

describe('AdminServicesPage', () => {
  let component: AdminServicesPage;
  let fixture: ComponentFixture<AdminServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminServicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
