import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cartItemCount = 0;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.currentMessage.subscribe(msg => this.cartItemCount = msg);
  }

}
