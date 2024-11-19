export interface ValueLabel {
  value: string;
  label: string;
}

export interface UserType {
  id: string | string;
  username?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  city?: string;
  phoneNumber?: string;
  dobYear?: string;
  dobDay?: string;
  dobMonth?: string;
  gender?: string;
}

export interface GenderItem extends ValueLabel {}
