import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';


@NgModule({
  declarations: [],
  imports: [
    NzLayoutModule,
    NzMenuModule
  ],
  exports: [
    NzLayoutModule,
    NzMenuModule
  ]
})
export class NgZorroModule { }
