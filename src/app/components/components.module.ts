import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { StatusCasesOntarioComponent } from './status-cases-ontario/status-cases-ontario.component';

@NgModule({
  declarations: [StatusCasesOntarioComponent],
  imports: [CommonModule,IonicModule,FormsModule],
  exports: [StatusCasesOntarioComponent]
})
export class ComponentsModule{}