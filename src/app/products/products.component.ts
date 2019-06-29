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
        {sku:12341, product:'Product 10', price: '50,99'  },
        {sku:12342, product:'Product 20' , price: '52,99' },
        {sku:12343, product:'Product 30' , price: '53,99' },
        {sku:12344, product:'Product 40' , price: '54,99' },
        {sku:12345, product:'Product 50' , price: '55,99' },
        {sku:12346, product:'Product 60' , price: '56,99' },
        {sku:12347, product:'Product 70' , price: '57,99' },
        {sku:12348, product:'Product 80' , price: '58,99' },
        {sku:12349, product:'Product 90' , price: '59,99' },
        {sku:12350, product:'Product 100' , price: '60,99'},
      ]

      const productFy = JSON.stringify(products);
      localStorage.setItem('ls-products',productFy);

      const localProducts = localStorage.getItem('ls-products') ;
      this.products = JSON.parse(localProducts);

      //console.log(products);
      //console.log(productFy);
      //CRIAÇÃO
       // localStorage.setItem("key", "test");
        //this.products = localStorage.getItem('key');
      //DELETAR
      //localStorage.removeItem('key');

      //this.testLocal = localStorage.getItem('key');
    }
  }
