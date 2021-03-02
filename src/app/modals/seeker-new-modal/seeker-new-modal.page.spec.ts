import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeekerNewModalPage } from './seeker-new-modal.page';

describe('SeekerNewModalPage', () => {
  let component: SeekerNewModalPage;
  let fixture: ComponentFixture<SeekerNewModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerNewModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeekerNewModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
