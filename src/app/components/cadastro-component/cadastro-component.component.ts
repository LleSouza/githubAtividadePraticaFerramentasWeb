import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-component',
  templateUrl: './cadastro-component.component.html',
  styleUrls: ['./cadastro-component.component.css']
})
export class CadastroComponentComponent implements OnInit {
//criando as propriedades do cadastro1
   name1: string = 'Leandro';
   NRU1: number = 3462061;
   Curso1: string = 'Analise e desenvolvimento de sistema';
   DtNascimento1: string = '16/04/1997';  

   //criando as propriedades do cadastro2
   name2: string = 'Jose';
   NRU2: number = 3062062;
   Curso2: string = 'Geografia ';
   DtNascimento2: string = '25/05/1996'; 

   //criando as propriedades do cadastro3
   name3: string = 'Eduardo';
   NRU3: number = 3065064;
   Curso3: string = 'Ciências da computação  ';
   DtNascimento3: string = '30/12/1996'; 

   //criando as propriedades do cadastro4
   name4: string = 'Maria';
   NRU4: number = 2862065;
   Curso4: string = 'Psicologia ';
   DtNascimento4: string = '05/06/1998'; 

   //criando as propriedades do cadastro5
   name5: string = 'Gilmara';
   NRU5: number = 2762062;
   Curso5: string = 'Nutrição ';
   DtNascimento5: string = '10/07/1999'; 

  constructor() { }

  ngOnInit(): void {
  }

}
