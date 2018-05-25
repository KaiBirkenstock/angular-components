import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  NgZone, Output,
  QueryList
} from '@angular/core';
import {TabComponent} from './tab/tab.component';
import {TabContentComponent} from './tab-content/tab-content.component';

@Component({
  selector: 'tabset',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterViewInit {
  @Output() public tabChanged: EventEmitter<any> = new EventEmitter();
  @ContentChildren(TabComponent) private tabs: QueryList<TabComponent>;
  @ContentChildren(TabContentComponent) private contents: QueryList<TabContentComponent>;
  private _activeTab: any;
  private _selectedTab: any;

  constructor(private element: ElementRef,
              public zone: NgZone,
              public cdr: ChangeDetectorRef) {
  }

  get selectedTab() {
    return this._selectedTab;
  }

  @Input() set selectedTab(indexName: string) {
    this._selectedTab = indexName;
  }

  get tab() {
    return this._activeTab;
  }

  set tab(activeTab) {
    this._activeTab = activeTab;
    activeTab.setActive(true);

    this.contents.filter((content: any) => content.content === activeTab.index)[0].show();
    this.contents.filter((content: any) => content.content !== activeTab.index).forEach((content: any) => content.hide());

    this.tabs.filter((tab: any) => tab !== activeTab).forEach((tab: any) => tab.setActive(false));
  }

  public ngAfterViewInit() {
    this.tabs.forEach((tab: any) => {
      tab.activate.subscribe(() => {
        this.tab = tab;
      });
    });

    setTimeout(() => {
      this.zone.run(() => {
        let selectedTabExists: any = false;

        if (this.selectedTab) {
          selectedTabExists = this.tabs.find((tab: any) => tab.index === this.selectedTab);
        }

        if (selectedTabExists) {
          this.tab = selectedTabExists;
        } else {
          this.tab = this.tabs.first;
        }

        this.cdr.markForCheck();
      })
    }, 300);
  }
}
