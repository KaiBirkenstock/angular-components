import { setImmediate } from 'timers';
import { Component, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import * as jQuery from 'jquery';
require('bootstrap-datepicker');
import { moment } from '../utils/momentConfig';
var datePickerConfig = {
    format: 'dd.mm.yyyy',
    language: 'de',
    autoclose: true,
    orientation: 'top left'
};
var DatePickerComponent = /** @class */ (function () {
    function DatePickerComponent() {
        this.selectionChanged = new EventEmitter();
        this._disabled = false;
    }
    Object.defineProperty(DatePickerComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = value;
            if (!value) {
                this.initPicker();
            }
            else {
                jQuery(this.dateInput.nativeElement).datepicker('destroy');
            }
        },
        enumerable: true,
        configurable: true
    });
    DatePickerComponent.prototype.initPicker = function () {
        var _this = this;
        setImmediate(function () {
            jQuery(_this.dateInput.nativeElement)
                .datepicker(datePickerConfig)
                .on('changeDate', function (e) { return _this.selectionChanged.emit(moment(e.date)); });
        });
    };
    DatePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'date-picker',
                    template: "<input type=\"text\" [value]=\"value\" class=\"form-control date-picker\" #dateInput [formControlName]=\"formControlName\" [disabled]=\"disabled\"/>",
                    styles: ["\n    .datepicker.datepicker-dropdown .table-condensed>thead>tr>th,.datepicker.datepicker-dropdown .table-condensed>thead>tr>td,.datepicker.datepicker-dropdown .table-condensed>tbody>tr>th,.datepicker.datepicker-dropdown .table-condensed>tbody>tr>td,.datepicker.datepicker-dropdown .table-condensed>tfoot>tr>th,.datepicker.datepicker-dropdown .table-condensed>tfoot>tr>td{text-align:center}.datepicker.datepicker-dropdown tbody>tr>td{cursor:pointer}.datepicker.datepicker-dropdown>div{display:initial}:host .form-control{padding-left:0;padding-right:0;border-color:transparent;border-radius:0;background-color:transparent;box-shadow:0 1px 0 #dcdfe3;transition:box-shadow .3s ease-out}.datepicker{width:16rem}.datepicker-dropdown:before{border:none}\n  "]
                },] },
    ];
    /** @nocollapse */
    DatePickerComponent.propDecorators = {
        "value": [{ type: Input },],
        "formControlName": [{ type: Input },],
        "dateInput": [{ type: ViewChild, args: ['dateInput',] },],
        "selectionChanged": [{ type: Output, args: ['selectionChanged',] },],
        "disabled": [{ type: Input },],
    };
    return DatePickerComponent;
}());
export { DatePickerComponent };
//# sourceMappingURL=date-picker.component.js.map