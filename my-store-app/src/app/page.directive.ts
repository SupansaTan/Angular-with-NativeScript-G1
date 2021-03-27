import {  Directive, ElementRef } from "@angular/core";
import { Page } from "@nativescript/core";

export function customPageFactory(v: PageDirective) {
    return v.page.nativeElement;
}

@Directive({
    selector: 'Page',
    providers: [{
        provide: Page, useFactory: customPageFactory, deps:[PageDirective]
    }]
})
export class PageDirective {
    constructor(public page: ElementRef<Page>) {}
}