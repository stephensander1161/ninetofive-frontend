export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: number;
  city: string;
  address: string;
  postalCode: string;
  primarySkill: string;
  secondarySkill: string;
  tertiarySkill: string;
  experience: number;
  earliestCanStart: number;
  daysAvailable: string[];
  biography: string;
  profilePicture: string;
  pastWorkPictures: string[];
}
