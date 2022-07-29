import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }
  //food details

  foodDetails = [
    {
      id:1,
      foodName:"Pamonha",
      foodDetails:"A pamonha é preparada com milho verde ralado.",
      foodPrice: 200,
      foodimg:"https://images.tcdn.com.br/img/img_prod/835902/pamonha_mista_linguica_e_queijo_31_1_20200810111202.jpg"
    },
    {
      id:2,
      foodName:"Pizza",
      foodDetails:"Pizza com calabresa, queijo, musarela e muito mais.",
      foodPrice: 200,
      foodimg:"https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      id:3,
      foodName:"Hamburguer",
      foodDetails:"Hamburguer com queijo, presunto, alface e muito mais",
      foodPrice: 200,
      foodimg:"https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      id:4,
      foodName:"Macarrão",
      foodDetails:"O melhor macarrão de toda cidade",
      foodPrice: 200,
      foodimg:"https://images.unsplash.com/photo-1622973536968-3ead9e780960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BhZ2hldHRpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:5,
      foodName:"Frango Frito",
      foodDetails:"Frango frito bastante saboroso com molho especial",
      foodPrice: 200,
      foodimg:"https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      id:6,
      foodName:"Espetinho",
      foodDetails:"Comida no espeto",
      foodPrice: 200,
      foodimg:"https://images.unsplash.com/photo-1644204010804-827f6e0e2da6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }
  ]

}
