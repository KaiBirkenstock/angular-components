import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone } from '@angular/core';
export declare class TabsComponent implements AfterViewInit {
    private element;
    zone: NgZone;
    cdr: ChangeDetectorRef;
    tabChanged: EventEmitter<any>;
    private tabs;
    private contents;
    private _activeTab;
    private _selectedTab;
    constructor(element: ElementRef, zone: NgZone, cdr: ChangeDetectorRef);
    selectedTab: string;
    tab: any;
    ngAfterViewInit(): void;
}
