import { Component } from '@angular/core';
import { ProductServicesService } from '../services/product-services.service';

interface product{
  name: String;
  price: String;
  img: String;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  product: product[];
  constructor(private products : ProductServicesService) {
    console.log('Product Component Called');
    // products.getAllProducts().then((data)=> {
    //   this.product = data;
    // })
    this.product = products.products;
  }
}
