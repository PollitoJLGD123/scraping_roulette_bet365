import { Page, BrowserContext } from "playwright";


class Buffer {

    private _context: BrowserContext | null;
    private _page: Page | null;
    private _isScrapping: boolean = true;

    constructor() {
        this._context = null;
        this._page = null;
        this._isScrapping = true;
    }

    async setContext(context: BrowserContext) {
        this._context = context;
    }

    async setPage(page: Page) {
        this._page = page;
    }

    async getContext(): Promise<BrowserContext | null> {
        return this._context;
    }

    async getPage(): Promise<Page | null> {
        return this._page;
    }

    async closePage() {
        await this._page?.close();
    }

    async closeContext() {
        await this._context?.close();
    }

    async scrap() {
        if (this._isScrapping) {
            await this._page?.waitForTimeout(1000);
            this._isScrapping = false;
        }
    }

    getIsScrapping(): boolean {
        return this._isScrapping;
    }

    setIsScrapping(isScrapping: boolean) {
        this._isScrapping = isScrapping;
    }

    async cleanAll() {
        await this.closePage();
        await this.closeContext();
    }
    
}

export const buffer = new Buffer();