import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from '../Models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'http://localhost:3000';

  getProduct(): Observable<product[]> {
    return this.http.get<product[]>(`${this.baseUrl}/Product`);
  }

  getProductById(id: number): Observable<product> {
    return this.http.get<product>(`${this.baseUrl}/Product/${id}`);
  }

  deleteProductById(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Product/${id}`);
  }

  insertProduct(product: product): Observable<any> {
    return this.http.post(`${this.baseUrl}/Product`, product);
  }

  updateProduct(product: product): Observable<any> {
    return this.http.put(`${this.baseUrl}/Product/${product.id}`, product);
  }
}
