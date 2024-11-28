import { Address } from './address';

export class User {
  public userID?: number;
  public firstName: string = '';
  public middleName?: string;
  public lastName: string = '';
  public birthDate: Date = new Date();
  public mobileNumber: string = '';
  public email: string = '';
  public addresses: Address[] = [];
}
