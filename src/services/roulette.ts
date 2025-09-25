import { Roulette } from "../models/roulette";
import { RouletteInterface } from "../types/roulette.type";
import { getColorNumber, getPositionNumber, getNumberDocena, getNumberFila } from "../helpers/general";

async function setRouletteService(number: number) {

  if (number < 0 || number > 36) {
    throw new Error('El número debe ser entre 1 y 36');
  }

  const typeNumber = number % 2 === 0 ? 'par' : 'impar';

  const color = await getColorNumber(number);

  const positionNumber = await getPositionNumber(number);

  const numberDocena = await getNumberDocena(number);

  const numberFila = await getNumberFila(number);

  const roulette: RouletteInterface = {
    number,
    color,
    typeNumber,
    positionNumber,
    numberDocena,
    numberFila,
  }

  const rouletteModel = await Roulette.create(roulette);

  return rouletteModel;
}

export default {
  setRouletteService,
}