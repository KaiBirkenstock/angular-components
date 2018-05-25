import { ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Input, NgZone, Output, QueryList } from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { TabContentComponent } from './tab-content/tab-content.component';
var TabsComponent = /** @class */ (function () {
    function TabsComponent(element, zone, cdr) {
        this.element = element;
        this.zone = zone;
        this.cdr = cdr;
        this.tabChanged = new EventEmitter();
    }
    Object.defineProperty(TabsComponent.prototype, "selectedTab", {
        get: function () {
            return this._selectedTab;
        },
        set: function (indexName) {
            this._selectedTab = indexName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsComponent.prototype, "tab", {
        get: function () {
            return this._activeTab;
        },
        set: function (activeTab) {
            this._activeTab = activeTab;
            activeTab.setActive(true);
            this.contents.filter(function (content) { return content.content === activeTab.index; })[0].show();
            this.contents.filter(function (content) { return content.content !== activeTab.index; }).forEach(function (content) { return content.hide(); });
            this.tabs.filter(function (tab) { return tab !== activeTab; }).forEach(function (tab) { return tab.setActive(false); });
        },
        enumerable: true,
        configurable: true
    });
    TabsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.tabs.forEach(function (tab) {
            tab.activate.subscribe(function () {
                _this.tab = tab;
            });
        });
        setTimeout(function () {
            _this.zone.run(function () {
                var selectedTabExists = false;
                if (_this.selectedTab) {
                    selectedTabExists = _this.tabs.find(function (tab) { return tab.index === _this.selectedTab; });
                }
                if (selectedTabExists) {
                    _this.tab = selectedTabExists;
                }
                else {
                    _this.tab = _this.tabs.first;
                }
                _this.cdr.markForCheck();
            });
        }, 300);
    };
    TabsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tabset',
                    template: "<ng-content></ng-content>",
                    styles: ["\n    :host{display:block;margin:auto;overflow:hidden}:host:after{clear:both}:host>div.tab-collection{overflow:hidden;border-bottom:1px solid #eaecee;background-color:transparent}\n  "]
                },] },
    ];
    /** @nocollapse */
    TabsComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
        { type: ChangeDetectorRef, },
    ]; };
    TabsComponent.propDecorators = {
        "tabChanged": [{ type: Output },],
        "tabs": [{ type: ContentChildren, args: [TabComponent,] },],
        "contents": [{ type: ContentChildren, args: [TabContentComponent,] },],
        "selectedTab": [{ type: Input },],
    };
    return TabsComponent;
}());
export { TabsComponent };
//# sourceMappingURL=tabs.component.js.map