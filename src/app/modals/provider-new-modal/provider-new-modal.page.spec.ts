import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProviderNewModalPage } from './provider-new-modal.page';

describe('ProviderNewModalPage', () => {
  let component: ProviderNewModalPage;
  let fixture: ComponentFixture<ProviderNewModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderNewModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProviderNewModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
