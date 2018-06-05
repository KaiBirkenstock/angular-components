import { EventEmitter } from '@angular/core';
export declare class DatePickerComponent {
    value: 'any';
    formControlName: any;
    private dateInput;
    selectionChanged: EventEmitter<any>;
    private _disabled;
    disabled: boolean;
    initPicker(): void;
}
