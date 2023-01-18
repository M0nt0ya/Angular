import { Injectable } from '@angular/core';
import { HttpClient as HttpClient } from '@angular/common/http';
import { CreateProductDto, ProductModel, UpdateProductDto } from '../entities/product.module';




@Injectable({
  providedIn: 'root'
})
export class ProductHttpServiceService {
  readonly API_URL = 'https://api.escuelajs.co/api/v1/products';
  constructor(private httpClient: HttpClient) { }


  getAll(){
    const url = `{API_URL}`;
    return this.httpClient.get(url);
  }


  getOne() {
    const url = `{API_URL}/$(id)`;
    return this.httpClient.get(url)
  }


  store(product: CreateProductDto) {
    const url = `{API_URL}`;
    return this.httpClient.post(url, product)
  }


  update(id: number, product:UpdateProductDto) {
    const url = `{API_URL}/$(id)`;
    return this.httpClient.put(url, product)
  }


  destroy(id: number) {
    const url = `{API_URL}/$(id)`;
    return this.httpClient.delete(url)
  }
}
