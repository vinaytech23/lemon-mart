import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PosRoutingModule } from './pos-routing.module'
import { PosComponent } from './pos/pos.component'
import { MaterialModule } from '../material.module'

@NgModule({
  declarations: [PosComponent],
  imports: [CommonModule, PosRoutingModule, MaterialModule],
})
export class PosModule {}
