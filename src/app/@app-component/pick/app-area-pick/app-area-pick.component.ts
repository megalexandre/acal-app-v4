import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Area } from '@model/default/area';
import { AreaService } from 'app/pages/registration/area/area.service';
import { AreaPick, Groups } from './area.group';

@Component({
  selector: 'app-area-pick',
  templateUrl: './app-area-pick.component.html',
  styleUrls: ['./app-area-pick.component.scss'],
})
export class AppAreaPickComponent  {

  @Input()
  public ngModel: Area

  @Output()
  public ngModelChange: EventEmitter<Area | null> = new EventEmitter<Area | null>()
  
  public loaded = false;
  public areas: AreaPick[] = [];

  constructor(public service: AreaService){
    this.service.list().subscribe(
      (areas: AreaPick[]) => {
        this.areas = areas
        this.loaded = true;
      }
    )
  }

  selectedChange(area: Area | null){
    this.ngModelChange.emit(area)
  }

  compareWith(a: Area, b: Area ){
    return a?.id === b?.id;
  }
}
