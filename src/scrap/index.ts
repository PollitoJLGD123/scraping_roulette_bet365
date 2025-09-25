import { chromium } from "playwright";
import { buffer } from "../lib/buffer";
import { init } from "./tasks/init";
import { scrap } from "./tasks/scrap";
import { sleep } from "../helpers/general";


export async function startScrap(){

  const { page } = await init();

  while (buffer.getIsScrapping()) {
    await scrap(page);
    await sleep(3000);
  }

}