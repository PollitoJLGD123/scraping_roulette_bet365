import { InferAttributes } from "sequelize";
import { Roulette } from "../models/roulette";

export interface RouletteInterface {
  
  number: number;

  color: string;

  typeNumber: string; // par o impar

  positionNumber: string; // "falta" o "pasa"

  numberDocena: number; // docena 1 2 3

  numberFila: number; // fila 1 2 3
  
}

export type RouletteAttributes = InferAttributes<Roulette>;
export type RouletteCreationAttributes = Omit<RouletteInterface, 'idRoulette'>;