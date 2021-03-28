import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import * as SocialShare from 'nativescript-social-share';

@Component({
  selector: 'ns-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  productId: any;

  public shareText(productName){
    SocialShare.shareText(productName);
  }
}
