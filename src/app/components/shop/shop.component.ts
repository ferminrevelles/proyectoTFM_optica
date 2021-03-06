import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }
  
  typeProduct(typeProduct:String){
    this.productService.typeProduct=typeProduct;
  }
}
