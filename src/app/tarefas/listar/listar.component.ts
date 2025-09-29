import { Component, OnInit } from '@angular/core';
import { Tarefa, TarefaService } from '../Shared';


@Component({
  selector: 'app-listar',
  standalone: false,
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit {
  tarefas: Tarefa[]  
 
  constructor(private tarefaService: TarefaService){}

  ngOnInit() {this.tarefas = this.listarTodos()
     }

      listarTodos(): Tarefa[] {
        return this.tarefaService.listarTodos()
      }
      
}
