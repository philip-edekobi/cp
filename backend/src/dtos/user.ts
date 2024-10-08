export interface MemberDto {
  id?: number;
  parishAdminID: number;
  surname?: string;
  othernames?: string;
  title?: string;
  designation?: string;
  homeAddress?: string;
  gender?: string;
  ageCategory?: string;
  phone?: string;
  email: string;
  password?: string;
  passwordHash?: string;
  userValid?: boolean;
  dateJoined?: Date;
  dob?: Date;
  weddingAnniversary?: Date;
  department?: string;
  fellowship?: string;
  occupation?: string;
  employer?: string;
  officeAddress?: string;
  isBornAgain?: boolean;
  yearBornAgain?: number;
  hasCompletedBelieversClass?: boolean;
  yearCompletedBelieversClass?: number;
  isWaterBaptised?: boolean;
  yearWaterBaptised?: number;
  hasCompletedSchoolOfDiscipleship?: boolean;
  yearCompletedSchoolOfDiscipleship?: number;
  profileImageUrl?: string;
  userType?: string;
}

export interface AdminDto {
  id?: number;
  email: string;
  surname: string;
  othernames: string;
  phone?: string;
  dob: Date;
  password?: string;
  passwordHash?: string;
  userValid?: boolean;
  userType?: string;
}

export interface ParishAdminDto {
  id?: number;
  password?: string;
  passwordHash?: string;
  userValid?: boolean;
  churchName: string;
  churchNameAbbr?: string;
  authorizedName: string;
  email: string;
  phone?: string;
  address?: string;
  fax?: string;
  website?: string;
  remittancePercentage: number;
  logo?: string;
  signature?: string;
  financialStatement?: string;
  profileImageUrl?: string;
  subscriptionValid?: boolean;
  subscriptionExpiresAt?: Date;
  availableSmsUnits: number;
  userType?: string;
}
