export interface Job {
  _id: number;
  seekerId: number;
  providerId: number;
  type: string;
  subType: string;
  size: string;
  city: string;
  address: string;
  estimate: number;
  description: string;
  priority: string;
  date: string;
  time: string;
  completed: boolean;
}
