import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzInputModule } from 'ng-zorro-antd/input';


@NgModule({
  declarations: [],
  imports: [
    NzLayoutModule,
    NzMenuModule,
    NzCardModule,
    NzSliderModule,
    NzInputModule
  ],
  exports: [
    NzLayoutModule,
    NzMenuModule,
    NzCardModule,
    NzSliderModule,
    NzInputModule
  ]
})
export class NgZorroModule { }
