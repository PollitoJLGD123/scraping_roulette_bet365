import fs from 'fs/promises';
import path from 'path';

export async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function extendDataJson(data: any, filename: string) {
    const jsonPath = path.resolve(__dirname, '../samples/', filename);
    let dataJson: any[] = [];
    try {
        const content = await fs.readFile(jsonPath, 'utf-8');
        dataJson = JSON.parse(content);
        if (!Array.isArray(dataJson)) dataJson = [];
    } catch (err) {
        dataJson = [];
    }
    dataJson.push(data);
    await fs.writeFile(jsonPath, JSON.stringify(dataJson, null, 2), 'utf-8');
}

export async function getColorNumber(number: number): Promise<string> {
  
  const color_red = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]

  if (number === 0){
    return "green"
  }
  else if (color_red.includes(number)){
    return "red"
  }
  else {
    return "green"
  }

}

export async function getPositionNumber(number: number): Promise<string> {
  
  const falta = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
  // const pasa = [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]

  if (number === 0){
    return "0"
  }

  if (falta.includes(number)){
    return "falta"
  }
  else{
    return "pasa"
  }
  
}

export async function getNumberDocena(number: number): Promise<number> {

  const docenas = [
    [
        1,2,3,4,5,6,7,8,9,10,11,12
    ],
    [
        13,14,15,16,17,18,19,20,21,22,23,24
    ],
    [
        25,26,27,28,29,30,31,32,33,34,35,36
    ]
  ]

  if (number === 0){
    return 0
  }

  if (docenas[0].includes(number)){
    return 1
  }
  else if (docenas[1].includes(number)){
    return 2
  }
  else{
    return 3
  }

}

export async function getNumberFila(number: number): Promise<number> {

  const filas = [
    [
        1,4,7,10,13,16,19,22,25,28,31,34
    ],
    [
        2,5,8,11,14,17,20,23,26,29,32,35
    ],
    [
        3,6,9,12,15,18,21,24,27,30,33,36
    ]
  ]

  if (number === 0){
    return 0
  }

  if (filas[0].includes(number)){
    return 1
  }
  else if (filas[1].includes(number)){
    return 2
  }
  else{
    return 3
  }

}