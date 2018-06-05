import {setImmediate} from 'timers';
import {Component, ViewChild, Output, EventEmitter, Input} from '@angular/core';

import * as jQuery from 'jquery';
require('bootstrap-datepicker');

import {moment} from '../utils/momentConfig';

const datePickerConfig: any = {
  format: 'dd.mm.yyyy',
  language: 'de',
  autoclose: true,
  orientation: 'top left'
};

@Component({
  selector: 'date-picker',
  template: `<input type="text" [value]="value" class="form-control date-picker" #dateInput [formControlName]="formControlName" [disabled]="disabled"/>`,
  styleUrls: ['./date-picker.scss']
})
export class DatePickerComponent {
  @Input() public value: 'any';
  @Input() public formControlName: any;

  @ViewChild('dateInput') private dateInput: any;
  @Output('selectionChanged') public selectionChanged: EventEmitter<any> = new EventEmitter();

  private _disabled: boolean = false;

  get disabled() {
    return this._disabled;
  }

  @Input() set disabled(value) {
    this._disabled = value;
    if (!value) {
      this.initPicker();
    } else {
      jQuery(this.dateInput.nativeElement).datepicker('destroy')
    }
  }

  initPicker() {
    setImmediate(() => {
      jQuery(this.dateInput.nativeElement)
        .datepicker(datePickerConfig)
        .on('changeDate', (e) => this.selectionChanged.emit(moment(e.date)));
    });
  }
}
