import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SkillAddDeleteModalPage } from './skill-add-delete-modal.page';

describe('SkillAddDeleteModalPage', () => {
  let component: SkillAddDeleteModalPage;
  let fixture: ComponentFixture<SkillAddDeleteModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillAddDeleteModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SkillAddDeleteModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
