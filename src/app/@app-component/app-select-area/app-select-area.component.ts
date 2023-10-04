import { ChangeDetectorRef, Component, DoCheck, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Area } from '@model/default/_index';
import { StatusComponent } from '@model/default/status';
import { AreaService } from './../../pages/registration/area/area.service';

@Component({
  selector: 'app-select-area',
  template: `
    <nb-select placeholder="Selecione" *ngIf="loaded" [disabled]="disabled"  [status]="status" [(selected)]="model" [compareWith]="compareById" (selectedChange)="onSelectionChange($event)" fullWidth>
      <nb-option [value]="null">Selecione</nb-option>
      <nb-option *ngFor="let area of areas" [value]="area">{{area.name}}</nb-option>
    </nb-select>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppSelectAreaComponent),
      multi: true
    }
  ]
})
export class AppSelectAreaComponent implements ControlValueAccessor, DoCheck, OnInit {

  @Input() model: Area | null = null;
  @Input() submmited = false;
  @Input() disabled = false;
  @Output() modelChange = new EventEmitter<Area | null>();

  loaded = false;
  status: StatusComponent = 'basic';
  areas: Area[]

  constructor(public service: AreaService, private cdRef: ChangeDetectorRef){

  }

  ngOnInit(): void {
      this.service.list().subscribe(
      (areas: Area[]) => {
        this.areas = areas;
        this.loaded = true
      }
    )

    this.cdRef.detectChanges()
  }

  onSelectionChange(event: any) {
    this.onChange(event);
  }

  ngDoCheck(): void {
    this.updateStatus()
  }

  updateStatus() {
    if(this.submmited){
      this.status = this.model != null ? 'success' : 'danger';
    }
  }

  onChange(model: Area | null){
    this.updateStatus();
    this.modelChange.emit(model);
  };

  onTouched = () => {};

  writeValue(model: Area): void {
    this.model = model;
    this.onChange(model);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  compareById(a1: Area, a2: Area): boolean {
    return a1?.id === a2?.id;
  }
}
