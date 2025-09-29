import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './Shared';
import { ListarComponent } from './listar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarTarefaComponent } from './cadastrar';



@NgModule({
  declarations: [
    ListarComponent,
    CadastrarTarefaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    TarefaService
  ]
})
export class TarefasModule { }
