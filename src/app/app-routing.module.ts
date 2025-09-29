import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TarefaRoutes } from './tarefas';
import { CadastrarTarefaComponent } from './tarefas';
import { EditarTarefaComponent } from './tarefas';

//Todas os gerenciamentos de rotas
export const routes: Routes = [
  {
    path:'',
    redirectTo:'/tarefas/listar',
    pathMatch:'full'
  },
  {
    path:'tarefas/cadastrar',
    component:CadastrarTarefaComponent,
    pathMatch:'full'
    },
      {
    path:'tarefas/editar/:id',
    component:EditarTarefaComponent,
    pathMatch:'full'
    },
  ...TarefaRoutes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
