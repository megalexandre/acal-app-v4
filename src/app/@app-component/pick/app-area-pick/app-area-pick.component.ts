import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Area } from '@model/default/area';
import { AreaService } from 'app/pages/registration/area/area.service';
import { AreaPick } from './area.group';

@Component({
  selector: 'app-area-pick',
  templateUrl: './app-area-pick.component.html',
  styleUrls: ['./app-area-pick.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppAreaPickComponent),
      multi: true,
    },
  ],
})
export class AppAreaPickComponent implements ControlValueAccessor {

  @Input()
  public ngModel: Area;

  @Output()
  public ngModelChange: EventEmitter<Area | null> = new EventEmitter<Area | null>();

  public loaded = false;
  public areas: AreaPick[] = [];

  constructor(public service: AreaService) {
    this.service.list().subscribe((areas: AreaPick[]) => {
      this.areas = areas;
      this.loaded = true;
    });
  }

  selectedChange(area: Area | null) {
    this.ngModel = area;
    this.ngModelChange.emit(area);
    this.onChangeCallback(area);
  }

  compareWith(a: Area, b: Area) {
    return a?.id === b?.id;
  }

  private onChangeCallback: (value: any) => void = () => {};
  private onTouchedCallback: () => void = () => {};

  writeValue(obj: any): void {
    this.ngModel = obj;
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }
}
