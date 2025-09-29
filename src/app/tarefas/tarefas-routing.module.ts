import { Routes } from "@angular/router";
import { ListarComponent } from "./listar";
import { CadastrarTarefaComponent } from "./cadastrar";


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
  }

];


