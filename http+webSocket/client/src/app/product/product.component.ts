import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Http} from "@angular/http";
import "rxjs/Rx"

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products:Observable<any>;

  constructor(private http:Http) {
    this.products = this.http.get("/api/products")
      .map( (res) => res.json() );
  }

  ngOnInit() {
  }

}
