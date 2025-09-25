import { Page, BrowserContext } from "playwright";

export async function createPage(context: BrowserContext): Promise<Page> {
	const page = await context.newPage();
	return page;
}