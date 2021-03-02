import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenericProfileModalPage } from './generic-profile-modal.page';

describe('GenericProfileModalPage', () => {
  let component: GenericProfileModalPage;
  let fixture: ComponentFixture<GenericProfileModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericProfileModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenericProfileModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
