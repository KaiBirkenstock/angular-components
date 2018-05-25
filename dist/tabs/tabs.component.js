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
                    styles: ["\n    tabset{display:block;margin:auto;overflow:hidden}tabset:after{clear:both}tabset>div.tab-collection{overflow:hidden;border-bottom:1px solid #eaecee;background-color:transparent}tab{float:left;position:relative;display:block;padding:.5rem 1rem;cursor:pointer;font-weight:600;padding-top:12px;padding-bottom:12px;border:1px solid transparent;margin-bottom:-1px}tab.active,tab:hover{box-shadow:inset 0 -2px #1E1934;position:relative;background-color:transparent;border-bottom:medium none}tab.active{color:#575757;cursor:default}tab:hover{color:#1E1934;cursor:pointer}tab-content{clear:both;display:block}tab-content>div{background-color:#fff;border-radius:0;padding:10px;display:none}tab-content>div.visible{display:block}tab-content tab{color:#337ab7;background-color:#fff;padding:10px 15px !important;border:none !important;margin-bottom:0 !important}tab-content tab.active{color:#fff;background-color:#337ab7}tab-content tab tab-content>div{border:medium none}\n  "]
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