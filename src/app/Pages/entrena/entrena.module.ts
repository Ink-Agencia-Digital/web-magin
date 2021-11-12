import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrenaPageRoutingModule } from './entrena-routing.module';

import { EntrenaPage } from './entrena.page';
import { PipesModule } from 'src/app/Pipe/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntrenaPageRoutingModule,
    PipesModule
  ],
  declarations: [EntrenaPage]
})
export class EntrenaPageModule {}
