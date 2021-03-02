import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubSkillAddDeleteModalPage } from './sub-skill-add-delete-modal.page';

describe('SubSkillAddDeleteModalPage', () => {
  let component: SubSkillAddDeleteModalPage;
  let fixture: ComponentFixture<SubSkillAddDeleteModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubSkillAddDeleteModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubSkillAddDeleteModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
