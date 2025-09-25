import { chromium, BrowserContext } from "playwright";


const directorio = "C:/Users/Frondt 01/AppData/Local/Google/Chrome/User Data/Default"
const chrome_path = "C:/Program Files/Google/Chrome/Application/chrome.exe";

export async function createContext(): Promise<BrowserContext> {
	const browser = await chromium.launchPersistentContext(directorio, {
		executablePath: chrome_path,
		headless: false,
		args: [
			'--start-maximized',
			'--disable-blink-features=AutomationControlled',
		],
	});
	return browser;
}