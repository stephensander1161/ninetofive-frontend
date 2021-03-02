import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminProfileModalPage } from './admin-profile-modal.page';

describe('AdminProfileModalPage', () => {
  let component: AdminProfileModalPage;
  let fixture: ComponentFixture<AdminProfileModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProfileModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminProfileModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
