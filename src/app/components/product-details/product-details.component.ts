import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../services/api.service";
import {Product} from "../../products";
import {config} from "rxjs";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product!: Product;
  public loading: boolean = true;
  constructor(private route: ActivatedRoute, private router: Router, private api : ApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
    if(params && params.id) {
      this.product = await this.api.getProductById(params.id);
      this.loading = false;
    } else {
      this.router.navigate(["/"])
    }
    })
  }

}
