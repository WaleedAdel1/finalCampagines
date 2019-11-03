import { ProductService } from './../../../../Services/product.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/Shared/product';
import { ToastrService } from 'ngx-toastr';
import { CurrencyService } from 'src/app/Services/currency.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService,
              private toastr: ToastrService,
              private currencyService: CurrencyService) { }
  @Input() product: Product;
  products: Product[];
  productAddedToCart: Product[];
  cartItemCount = 0;
  IsHidden = true;
  favourite = false;
  currencyId: number;



  ngOnInit() {
   this.currencyService.currentCurrencyValue.subscribe(currency => this.currencyId = currency);
  }



  addToCart(prod: Product) {
    this.productAddedToCart = this.productService.getProductFromCart();
    if (this.productAddedToCart == null) {
      this.productAddedToCart = [];
      this.productAddedToCart.push(prod);
      this.productService.addProductToCart(this.productAddedToCart);
      this.toastr.success('Product added to cart');
    } else {
      const tempProduct = this.productAddedToCart.find(p => p.id === prod.id);
      if (tempProduct == null) {
        this.productAddedToCart.push(prod);
        this.productService.addProductToCart(this.productAddedToCart);
        this.toastr.success('Product added to cart');
      } else {
        this.toastr.warning('Product already exists in cart');
      }
    }
    this.cartItemCount = this.productAddedToCart.length;
    this.productService.updateCartCount(this.cartItemCount);
  }

}

