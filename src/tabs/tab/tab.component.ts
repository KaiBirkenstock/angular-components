import uuid from 'uuid/v4';
import {Component, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';

declare let jQuery;

@Component({
  selector: 'tab',
  template: `{{ title }}`
})
export class TabComponent {
  private id: string = uuid();

  @Input() public title: string;
  @Input() public index: string;
  @Output() private activate: EventEmitter<any> = new EventEmitter();

  @HostBinding('class.active') private active: boolean = false;

  @HostListener('click') protected trackHostClickEvent() {
    this.activate.emit(this.index);
  }

  private setActive(bool) {
    this.active = bool;
  }
}
