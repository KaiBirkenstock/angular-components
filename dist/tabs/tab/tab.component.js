import uuid from 'uuid/v4';
import { Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
var TabComponent = /** @class */ (function () {
    function TabComponent() {
        this.id = uuid();
        this.activate = new EventEmitter();
        this.active = false;
    }
    TabComponent.prototype.trackHostClickEvent = function () {
        this.activate.emit(this.index);
    };
    TabComponent.prototype.setActive = function (bool) {
        this.active = bool;
    };
    TabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tab',
                    template: "{{ title }}",
                    styles: ["\n    :host{float:left;position:relative;display:block;padding:.5rem 1rem;cursor:pointer;font-weight:600;padding-top:12px;padding-bottom:12px;border:1px solid transparent;margin-bottom:-1px}:host.active,:host:hover{box-shadow:inset 0 -2px #1E1934;position:relative;background-color:transparent;border-bottom:medium none}:host.active{color:#575757;cursor:default}:host:hover{color:#1E1934;cursor:pointer}\n  "]
                },] },
    ];
    /** @nocollapse */
    TabComponent.propDecorators = {
        "title": [{ type: Input },],
        "index": [{ type: Input },],
        "activate": [{ type: Output },],
        "active": [{ type: HostBinding, args: ['class.active',] },],
        "trackHostClickEvent": [{ type: HostListener, args: ['click',] },],
    };
    return TabComponent;
}());
export { TabComponent };
//# sourceMappingURL=tab.component.js.map