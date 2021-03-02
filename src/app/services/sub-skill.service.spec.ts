import { TestBed } from '@angular/core/testing';

import { SubSkillService } from './sub-skill.service';

describe('SubSkillService', () => {
  let service: SubSkillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubSkillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
