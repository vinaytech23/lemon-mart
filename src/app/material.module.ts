import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, FlexLayoutModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, FlexLayoutModule],
})
export class MaterialModule {}
