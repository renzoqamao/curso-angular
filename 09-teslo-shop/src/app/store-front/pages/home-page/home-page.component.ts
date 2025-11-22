import { rxResource } from '@angular/core/rxjs-interop';
//import { ProductCardComponent } from '@/products/components/product-card/product-card.component';
import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '@products/components/product-card/product-card.component';
import { ProductsService } from '@products/services/products.service';
//import { ProductCardComponent } from '../../../products/components/product-card/product-card.component';

@Component({
  selector: 'app-home-page',
  imports: [ProductCardComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  productService = inject(ProductsService);

  productsResource = rxResource({
    params : ()=>({}),
    stream:({params})=> {
      return this.productService.getProducts({
        limit:10,
        gender : 'women',
      });
    }
  })

 }
