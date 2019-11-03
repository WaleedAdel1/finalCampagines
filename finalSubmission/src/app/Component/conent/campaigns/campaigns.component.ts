import { Product } from 'src/app/Shared/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {
  products: Product[];
  filterProduct: Product[];
  filteredProductLength: number;
  filteredProductType: string;
  Sold = false;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.filterProduct = data;
    });

  }


  FiltereProductFunction(searchStatusNumber: number) {
    return this.products.filter(prod => prod.status === searchStatusNumber
     );
  }

  ClosingSoon() {
    this.filterProduct = this.FiltereProductFunction(1);
    this.filteredProductLength = this.filterProduct.length;
    this.filteredProductType = 'Closing Soon';
    this.Sold = true;
  }

  Explore() {
    this.filterProduct = this.FiltereProductFunction(2);
    this.filteredProductLength = this.filterProduct.length;
    this.filteredProductType = 'Explore';
    this.Sold = true;
  }

  SoldOut() {
    this.filterProduct = this.FiltereProductFunction(4);
    this.filteredProductLength = this.filterProduct.length;
    this.filteredProductType = 'Sold Out';
    this.Sold = true;
  }

}

