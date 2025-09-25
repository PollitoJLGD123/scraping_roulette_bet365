
import { createContext } from "../pages/browser";
import { createPage } from "../pages/page";
import { LINK_BET365 } from "../../config/config";
import { buffer } from "../../lib/buffer";

export async function init() {

    const context = await createContext();

    const page = await createPage(context);

    await page.goto(LINK_BET365);

    await page.waitForLoadState('networkidle');

    buffer.setContext(context);
    buffer.setPage(page);

    await page.waitForTimeout(5000);

    return { context, page };
}