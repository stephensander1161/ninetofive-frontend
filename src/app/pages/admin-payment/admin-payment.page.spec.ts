import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminPaymentPage } from './admin-payment.page';

describe('AdminPaymentPage', () => {
  let component: AdminPaymentPage;
  let fixture: ComponentFixture<AdminPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
