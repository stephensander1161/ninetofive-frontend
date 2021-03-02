import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmailSubsModalPage } from './email-subs-modal.page';

describe('EmailSubsModalPage', () => {
  let component: EmailSubsModalPage;
  let fixture: ComponentFixture<EmailSubsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailSubsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmailSubsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
