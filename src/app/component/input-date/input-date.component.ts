import { Component, EventEmitter, Input, Output } from '@angular/core';
import { isValid } from 'date-fns';

@Component({
  selector: 'ngx-input-date',
  templateUrl: './input-date.component.html',
})
export class InputDateComponent {
  @Input() public status = 'basic';

  @Input()
  public set model(value: string | null) {
    if (value !== null) {
      const [year, month, day] = value.split('-').map(Number);
      this._model = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    } else {
      this._model = null;
    }
  }
  private _model: string | null = null;

  @Output() public modelChange = new EventEmitter<string>();
  @Output() public setDate = new EventEmitter<string>();
  @Output() public setBlur = new EventEmitter<boolean>();


  readonly completedSize = 10;

  constructor() {
    if(this.model !== null){
      const [year, month, day] = this.model.split('-').map(Number);
      this.model = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    }
  }

  emiteDate() {
    if (this.isValidDate()) {
      const [day, month, year] = this.model.split('/').map(Number);
      const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      this.setDate.emit(formattedDate);
      this.modelChange.emit(formattedDate);
    } else {
      this.setDate.emit(null);
      this.modelChange.emit(null);
      this.model = null;
    }
  }

  onBlur() {
    this.emiteDate();
    this.setBlur.emit(true);
  }

  isValidDate(): boolean {
    if (this.model === null) {
      this.status = 'basic';
      return false;
    }

    if (this.model.length !== this.completedSize) {
      this.status = 'danger';
      return false;
    }

    const splited = this.model.split('/');
    const day = Number(splited[0]);
    const month = Number(splited[1]);
    const year = Number(splited[2]);

    const valid = isValid(new Date(year, month, day));

    this.status = valid ? 'basic' : 'danger';

    return valid;
  }

  public get model(): string | null {
    return this._model;
  }

}
