import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchProvidersPage } from './search-providers.page';

describe('SearchProvidersPage', () => {
  let component: SearchProvidersPage;
  let fixture: ComponentFixture<SearchProvidersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProvidersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchProvidersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
