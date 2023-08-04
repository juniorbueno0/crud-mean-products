import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';
 
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  formInput: FormGroup;

  constructor(
    private formbuilder:FormBuilder,
    private router: Router, 
    private productservice:ProductService,
    private toastr: ToastrService
    ){
    this.formInput = formbuilder.group({
      name: [ '', Validators.required ],
      category: [ '', Validators.required ],
      price: [ '', Validators.required ],
    });
  }

  ngOnInit(): void {

  }

  addProduct(){
    if(this.formInput.value.name !== '' && this.formInput.value.category !== '' &&  this.formInput.value.price!== ''){
      const product: Product = {
        name: this.formInput.value.name,
        category: this.formInput.value.category,
        price: this.formInput.value.price
      }

      this.productservice.createProduct(product).subscribe( data => {
        this.toastr.success('Product succefully Registered!!', 'New Product!!');
        this.formInput.reset();
        this.router.navigate(['/'])
      }, error => { 
        console.log(error);
        this.formInput.reset();
      });


    }
  }
  
}
