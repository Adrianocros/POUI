import { Component, OnInit, ViewChild, viewChildren } from '@angular/core';
import { Tarefa, TarefaService } from '../Shared';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-tarefa',
  standalone: false,
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrl: './cadastrar-tarefa.component.css'
})
export class CadastrarTarefaComponent implements OnInit {
 @ViewChild('formTarefa',{static:true}) formTarefa:NgForm;

  tarefa:Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private router:Router,
  )
  {}
  ngOnInit(){this.tarefa = new Tarefa();
  }
  cadastrar():void{
    if(this.formTarefa.form.valid){
      this.tarefaService.cadastrar(this.tarefa);
      this.router.navigate(["/tarefas"]);
    }
  }
  
}
