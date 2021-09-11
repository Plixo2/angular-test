import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../products";
import {ApiService} from "../../services/api.service";

@Component({
  selector: '[app-product-row]',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  @Input() product!: Product;
  @Input() index!: number;
  @Output() removeEvent: EventEmitter<number> = new EventEmitter();

  public isEditMode: boolean = false;


  constructor(private api: ApiService) {

  }

  ngOnInit(): void {

  }

  async saveProduct() {
    this.isEditMode = false;
    const products = await this.api.saveProduct(this.product,this.index);

  }

  async removeProduct() {
    await this.api.removeProduct(this.index.toString());
    this.removeEvent.emit(this.index);
  }
}
