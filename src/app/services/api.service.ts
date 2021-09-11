import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../products";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public async getProducts(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      try {
        this.http.get<Product[]>(environment.apiBase + "/products").subscribe((obj: Product[]) => {
          resolve(obj);
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  public async getProductById(index: string): Promise<Product> {
    return new Promise((resolve, reject) => {
      try {
        this.http.get<Product>(environment.apiBase + `/products/${index}`).subscribe((obj: Product) => {
          resolve(obj);
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  public async addProduct(product: Product): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      try {
        this.http.post<Product[]>(environment.apiBase + "/products",product).subscribe((obj: Product[]) => {
          resolve(obj);
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  public async removeProduct(index: string): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      try {
        this.http.delete<Product[]>(environment.apiBase + `/products/${index}`).subscribe((obj: Product[]) => {
          resolve(obj);
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  public async saveProduct(product: Product, index: number): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      try {
        this.http.put<Product[]>(environment.apiBase + `/products/${index}`,product).subscribe((obj: Product[]) => {
          resolve(obj);
        });
      } catch (e) {
        reject(e);
      }
    });
  }
}
