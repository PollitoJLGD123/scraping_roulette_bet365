
import RouletteService from "../services/roulette";

export async function setRoulette(number: number) {
  const roulette = await RouletteService.setRouletteService(number);
  return roulette;
}