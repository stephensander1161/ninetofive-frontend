import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactProviderPage } from './contact-provider.page';

describe('ContactProviderPage', () => {
  let component: ContactProviderPage;
  let fixture: ComponentFixture<ContactProviderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactProviderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactProviderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
