import {Component, OnInit} from '@angular/core';
import {Product} from "../../products";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public description: string = "";
  public products!: Product[];

  constructor(private api: ApiService) {
  }

  async ngOnInit(): Promise<void> {
    this.products = await this.api.getProducts();
  }

  async addProduct(description: string) {
    this.products = await this.api.addProduct({
      id: 5,
      name: "lol",
      price: 1337,
      description
    });
  }

  removeProduct($event: number) {
   this.products.splice($event,1);
  }
}
