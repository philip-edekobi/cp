import {
  Model,
  CreationOptional,
  Sequelize,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

export interface IParishMinistrationModel
  extends Model<
    InferAttributes<IParishMinistrationModel>,
    InferCreationAttributes<IParishMinistrationModel>
  > {
  id: CreationOptional<number>;
  parishAdminID: number;
  programID: number;
  preacher: string | null;
  date: Date;
  topic: string | null;
  bibleText: string | null;
  biblePassage: string | null;
  converts: number | null;
  comments: string | null;
}

export default function (sequelize: Sequelize, dt: typeof DataTypes) {
  const PM = sequelize.define<IParishMinistrationModel>(
    "ParishMinistration",
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
      programID: {
        type: dt.INTEGER,
        allowNull: false,
        field: "program_id",
        references: {
          model: sequelize.models.ParishProgram,
          key: "id",
        },
      },
      preacher: dt.STRING,
      date: {
        type: dt.DATE,
        allowNull: false,
      },
      topic: dt.STRING,
      bibleText: {
        type: dt.STRING,
        field: "bible_text",
      },
      biblePassage: {
        type: dt.TEXT,
        field: "bible_passage",
      },
      converts: {
        type: dt.INTEGER,
        field: "no_of_converts",
      },
      comments: dt.TEXT,
    },
    { tableName: "parish_ministrations" },
  );

  return PM;
}
