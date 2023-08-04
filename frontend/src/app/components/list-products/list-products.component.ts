import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productservice: ProductService, private toastr: ToastrService){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productservice.getProducts().subscribe(data => {
      console.log(data);
      this.products = data;
    }, error => {
      console.log(error);
    });
  }

  deleteProduct(id: any){
    this.productservice.deleteProduct(id).subscribe(product => {
      this.toastr.error('Product Deleted!', 'Product was Deleted');
    });
  }

}
