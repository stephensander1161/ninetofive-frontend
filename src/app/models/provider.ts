import { Time } from '@angular/common';

export interface Provider {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: number;
  city: string;
  address: string;
  postalCode: string;
  primarySkill: string;
  secondarySkill: string;
  tertiarySkill: string;
  experience: number;
  biography: string;
  photoPath?: string;
}
