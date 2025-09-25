import { Page } from "playwright";
import { extendDataJson } from "../../helpers/general";
import { setRoulette } from "../../controllers/roulette";

let last_numbers: number[] = [];
let timeout = 0;

export async function scrap(page: Page) {

  const div_roulette = page.locator('div[data-tid="s_1_live_4_bet365"]').first();

  if (div_roulette) {
    console.log('div roulette found');
  } else {
    console.log('div roulette not found');
    return;
  }

  const container_roulette = div_roulette.locator(".live-casino-roulette-rounds__main-container")

  if (container_roulette) {
    console.log('container roulette found');
  } else {
    console.log('container roulette not found');
    return;
  }

  const numbers = await container_roulette.evaluate((node) => {

    const results = node.querySelectorAll(".live-casino-roulette-rounds__round");
    const numbers = Array.from(results).map(result => {
      return Number(result.getAttribute('data-result')) || 0;
    });

    return numbers;
  });

  if (last_numbers.length === 0) {
    
    numbers.forEach(async (number) => {
      last_numbers.push(number);
    });

    timeout = Date.now()

    numbers.forEach(async (number) => {
      await setRoulette(number);
    });

    return
  }
  else {
    let compare = compareTwoArrays(numbers, last_numbers);
    let time = Date.now() - timeout;

    if (compare && time > 35000) {
      last_numbers = [];
    
      //ijsertar todo menos el ultimo

      for (let i = 0; i < numbers.length- 1; i++) {
        last_numbers.push(numbers[i]);
      }

      timeout = Date.now()
    }
    else{
      if (compare && time < 35000) {
        console.log('numbers are the same');
        return
      }
      else{
        if (!compare) {
          console.log('numbers are different');
          last_numbers = [];
          numbers.forEach((number) => {
            last_numbers.push(number);
          });
          timeout = Date.now()
        }
      }
    }
  }

  const data = {
    data: numbers,
  }

  await extendDataJson(data, 'data.json');

  await setRoulette(numbers[numbers.length - 1]);

  console.log('numbers:', numbers);

}

function compareTwoArrays(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) {
    console.log('different length:', arr1.length, arr2.length);
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log('different number:', arr1[i], arr2[i]);
      return false;
    }
  }
  return true;
}