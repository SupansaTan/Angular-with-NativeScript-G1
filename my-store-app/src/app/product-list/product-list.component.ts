import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import * as SocialShare from 'nativescript-social-share';
import { Router } from "@angular/router";

@Component({
  selector: 'ns-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  productId: any;

  constructor(private router:Router) { }

  public shareText(productName){
    SocialShare.shareText(productName);
  }

  public toDetail(id){
    this.router.navigate(['/products', id ]);
  }
}
