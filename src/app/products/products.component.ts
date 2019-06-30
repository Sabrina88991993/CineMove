import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: any = {};
  constructor() { }


  ngOnInit() {
    const products =[
        {sku:12341, product:'After',  price: 50.99 },
        {sku:12342, product:'Burn your Maps' , price: 50.99 },
        {sku:12343, product:'Rota de Fuga 3' , price: 50.99 },
        {sku:12344, product:'A espiã vermelha' , price: 50.99 },
        {sku:12345, product:'Fast Color' , price: 50.99 },
        {sku:12346, product:'Morte instantânea' , price: 50.99 },
        {sku:12347, product:' Bardo Blues' , price: 50.99 },
        {sku:12348, product:'Albatroz' , price: 50.99 },
        {sku:12349, product:'#FallowMe' , price: 50.99 },
        {sku:12350, product:'Zumbilândia 2', price: 50.99 },
      ]

      const productFy = JSON.stringify(products);
      localStorage.setItem('ls-products',productFy);

      const localProducts = localStorage.getItem('ls-products') ;
      this.products = JSON.parse(localProducts);

      //console.log(products);
      //console.log(productFy);
      //CRIAÇÃO
      localStorage.setItem("key", "test");
        //this.products = localStorage.getItem('key');
      //DELETAR
      //localStorage.removeItem('key');
      //CLEAR
      localStorage.clear();
      //this.testLocal = localStorage.getItem('key');
    }
  }
