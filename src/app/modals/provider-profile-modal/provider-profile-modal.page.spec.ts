import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProviderProfileModalPage } from './provider-profile-modal.page';

describe('ProviderProfileModalPage', () => {
  let component: ProviderProfileModalPage;
  let fixture: ComponentFixture<ProviderProfileModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderProfileModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProviderProfileModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
