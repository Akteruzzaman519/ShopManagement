import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[] = [
    { id: 'p1', name: 'Laptop', price: 50000 },
    { id: 'p2', name: 'Desktop', price: 80000 }
  ]
  constructor(private dt: DataService) { }


  ngOnInit(): void {
  }
  AddProduct(id: any, name: any, price: any):void {
    this.products.push({
      id: id.value,
      name: name.value,
      price: price.value
    })
  }
  SaveProduct():void {
    this.dt.SaveProduct(this.products).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    )
  }
  FetchProduct():void {

  }

  UpdateProduct(id: any):void {

  }
  DeleteProduct(id: any):void {
    if (confirm("Are you delete this product?")) {
      this.products.splice(id, 1);
    }
  }
}
