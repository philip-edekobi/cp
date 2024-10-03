export interface AttendanceDto {
  id?: number;
  parishAdminID: number;
  date: Date;
  total: number;
  male?: number;
  female?: number;
  adults: number;
  men?: number;
  women?: number;
  teenagers: number;
  maleTeenagers?: number;
  femaleTeenagers?: number;
  children: number;
  maleChildren?: number;
  femaleChildren?: number;
  workers: number;
}
