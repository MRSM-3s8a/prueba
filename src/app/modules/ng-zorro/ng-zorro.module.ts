import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSliderModule } from 'ng-zorro-antd/slider';


@NgModule({
  declarations: [],
  imports: [
    NzLayoutModule,
    NzMenuModule,
    NzCardModule,
    NzSliderModule
  ],
  exports: [
    NzLayoutModule,
    NzMenuModule,
    NzCardModule,
    NzSliderModule
  ]
})
export class NgZorroModule { }
