import { ENUM } from "sequelize";
import { RouletteAttributes, RouletteCreationAttributes } from "../types/roulette.type";
import { Table, Model, PrimaryKey, Column, AutoIncrement, IsInt, Max, Min } from "sequelize-typescript";


@Table({
  tableName: 'roulette',
  timestamps: true
})
export class Roulette extends Model<RouletteAttributes, RouletteCreationAttributes> {

  @PrimaryKey
  @AutoIncrement
  @Column({
    type: "int",
    autoIncrement: true,
    field: "idRoulette",
  })
  idRoulette!: number;

  @IsInt
  @Column({
    type: "int",
    allowNull: false,
    field: "number",
  })
  number!: number;

  @Column({
    type: "varchar(100)",
    allowNull: false,
    field: "color",
  })
  color!: string;

  @Column({
    type: ENUM('par', 'impar'),
    allowNull: false,
    field: "typeNumber",
  })
  typeNumber!: string; // par o impar

  @Column({
    type: ENUM('falta', 'pasa'),
    allowNull: false,
    field: "positionNumber",
  })
  positionNumber!: string; // "falta" o "pasa"

  @Min(0)
  @Max(3)
  @Column({
    type: "int",
    allowNull: false,
    field: "numberDocena",
  })
  numberDocena!: number; // docena 1 2 3

  @Min(0)
  @Max(3)
  @IsInt
  @Column({
    type: "int",
    allowNull: false,
    field: "numberFila",
  })
  numberFila!: number; // fila 1 2 3
}