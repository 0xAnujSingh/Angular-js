import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { ProductService } from '../app/Services/product.service';
import { product } from './Models/product';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodosComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cwh-todo-list';

  productList: product[];
  productById: product = new product();
  identity: number;
  insertProduct: product;
  productForm: FormGroup;

  ngOnInit(): void {
    this.service.getProduct().subscribe((data) => {
      this.productList = data;
      console.log(data);
    });
    this.productForm = this.fb.group({
      id: [''],
      pName: [''],
      pPrice: [''],
      pMfgDate: [''],
      pExpiryDate: [''],
      pAvailabiltyCount: [''],
    });
  }

  getById(id: number) {
    this.service.getProductById(id).subscribe((data) => {
      this.productById = data;
      console.log(data);
    });
  }

  deleteById(id: number) {
    this.service.deleteProductById(id).subscribe();
    window.location.reload();
  }

  insert() {
    console.log('ye method chal rahi hai');
    this.service
      .insertProduct(this.productForm.value)
      .subscribe((response) => console.log(response));
    console.log(this.insertProduct);
  }

  update(){
    this.service.updateProduct(this.productById).subscribe()
  }

  constructor(private service: ProductService, private fb: FormBuilder) {}
}
