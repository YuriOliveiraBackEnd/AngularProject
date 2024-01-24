import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'Modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }
  criarPensamento(){
    alert("Novo pensamento criado")
  }
  cancelar(){
    alert("tem certeza que deseja cancelar? s ou n")
  }
}
