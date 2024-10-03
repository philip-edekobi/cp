import {
  Model,
  CreationOptional,
  Sequelize,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

export interface IChurchMemberModel
  extends Model<
    InferAttributes<IChurchMemberModel>,
    InferCreationAttributes<IChurchMemberModel>
  > {
  id: CreationOptional<number>;
  parishAdminID: number;
  surname: string | null;
  othernames: string | null;
  title: string | null;
  designation: string | null;
  homeAddress: string | null;
  gender: string | null;
  ageCategory: string | null;
  phone: string | null;
  email: string;
  passwordHash: string;
  dateJoined: Date | null;
  dob: Date | null;
  weddingAnniversary: Date | null;
  department: string | null;
  fellowship: string | null;
  occupation: string | null;
  employer: string | null;
  officeAddress: string | null;
  isBornAgain: boolean | null;
  yearBornAgain: number | null;
  hasCompletedBelieversClass: boolean | null;
  yearCompletedBelieversClass: number | null;
  isWaterBaptised: boolean | null;
  yearWaterBaptised: number | null;
  hasCompletedSchoolOfDiscipleship: boolean | null;
  yearCompletedSchoolOfDiscipleship: number | null;
  profileImageUrl: string | null;
}

export default function (sequelize: Sequelize, dt: typeof DataTypes) {
  const CM = sequelize.define<IChurchMemberModel>(
    "ParishChurchMember",
    {
      id: {
        type: dt.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      parishAdminID: {
        type: dt.INTEGER,
        allowNull: false,
        field: "parish_admin_id",
        references: {
          model: sequelize.models.ParishAdmin,
          key: "id",
        },
      },
      surname: {
        type: dt.STRING,
        // allowNull: false,
      },
      othernames: {
        type: dt.STRING,
        // allowNull: false,
      },
      title: dt.STRING,
      designation: {
        type: dt.STRING,
        // allowNull: false,
      },
      homeAddress: {
        type: dt.TEXT,
        field: "home_address",
      },
      gender: {
        type: dt.STRING,
        // allowNull: false,
      },
      ageCategory: {
        type: dt.STRING,
        // allowNull: false,
        field: "age_category",
      },
      phone: {
        type: dt.STRING,
        unique: true,
      },
      email: {
        type: dt.STRING,
        unique: true,
        allowNull: false,
      },
      passwordHash: {
        type: dt.STRING,
        allowNull: false,
        field: "password_hash",
      },
      dateJoined: {
        type: dt.DATE,
        field: "date_joined",
      },
      dob: dt.DATE,
      weddingAnniversary: {
        type: dt.DATE,
        field: "wedding_anniversary",
      },
      department: dt.STRING,
      fellowship: dt.STRING,
      occupation: dt.STRING,
      employer: dt.STRING,
      officeAddress: {
        type: dt.TEXT,
        field: "office_address",
      },
      isBornAgain: {
        type: dt.BOOLEAN,
        // allowNull: false,
        defaultValue: false,
        field: "is_born_again",
      },
      yearBornAgain: {
        type: dt.INTEGER,
        field: "year_born_again",
      },
      hasCompletedBelieversClass: {
        type: dt.BOOLEAN,
        // allowNull: false,
        defaultValue: false,
        field: "has_completed_believers_class",
      },
      yearCompletedBelieversClass: {
        type: dt.INTEGER,
        field: "year_completed_believers_class",
      },
      isWaterBaptised: {
        type: dt.BOOLEAN,
        // allowNull: false,
        defaultValue: false,
        field: "is_water_baptised",
      },
      yearWaterBaptised: {
        type: dt.INTEGER,
        field: "year_water_baptised",
      },
      hasCompletedSchoolOfDiscipleship: {
        type: dt.BOOLEAN,
        // allowNull: false,
        defaultValue: false,
        field: "has_completed_school_of_discipleship",
      },
      yearCompletedSchoolOfDiscipleship: {
        type: dt.INTEGER,
        field: "year_completed_school_of_discipleship",
      },
      profileImageUrl: {
        type: dt.STRING,
        field: "profile_image_url",
      },
    },
    { tableName: "parish_church_members", paranoid: true },
  );

  return CM;
}
