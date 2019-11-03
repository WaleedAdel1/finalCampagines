import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Shared/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  dafualtQuantity = 1;
  productAddedTocart: Product[];
  allTotal: number;

  constructor(private productService: ProductService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.productAddedTocart = this.productService.getProductFromCart();
    // tslint:disable-next-line:forin
    for (const i in this.productAddedTocart) {
      this.productAddedTocart[i].quantity = 1;
    }
    this.productService.removeAllProductFromCart();
    this.productService.addProductToCart(this.productAddedTocart);
    this.calculteAllTotal(this.productAddedTocart);

  }
  onAddQuantity(product: Product) {
    this.productAddedTocart = this.productService.getProductFromCart();
    this.productAddedTocart.find(p => p.id === product.id).quantity = product.quantity + 1;
    this.productService.removeAllProductFromCart();
    this.productService.addProductToCart(this.productAddedTocart);
    this.calculteAllTotal(this.productAddedTocart);
  }
  onRemoveQuantity(product: Product) {
    if (product.quantity <= 1) {
      this.productAddedTocart = this.productService.getProductFromCart();
      this.productAddedTocart.find(p => p.id === product.id).quantity = product.quantity - 1;
      const index: number = this.productAddedTocart.indexOf(product);
      this.productAddedTocart.splice(index, 1);
      localStorage.setItem('product', JSON.stringify(this.productAddedTocart));
      this.toastr.error('Product remove from cart');
    } else {
    this.productAddedTocart = this.productService.getProductFromCart();
    this.productAddedTocart.find(p => p.id === product.id).quantity = product.quantity - 1;
    this.productService.removeAllProductFromCart();
    this.productService.addProductToCart(this.productAddedTocart);
    this.calculteAllTotal(this.productAddedTocart);
    }
  }

  calculteAllTotal(allItems: Product[]) {
    let total = 0;
    // tslint:disable-next-line:forin
    for (const i in allItems) {
      total = total + (allItems[i].quantity * allItems[i].price);
    }
    this.allTotal = total;
  }
}

