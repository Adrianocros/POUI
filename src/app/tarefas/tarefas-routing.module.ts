import { Routes } from "@angular/router";
import { ListarComponent } from "./listar";
import { CadastrarTarefaComponent } from "./cadastrar";
import { EditarTarefaComponent } from "./editar";

export const TarefaRoutes :  Routes = [
  {
    path: 'tarefas',
    redirectTo:'tarefas/listar'
  },
  {
    path:'tarefas/listar',
    component:ListarComponent
  },
  {
    path:'tarefas/cadastar',
    component:CadastrarTarefaComponent
  },
    {
    path:'tarefas/editar/:id',
    component:EditarTarefaComponent
  }


];


