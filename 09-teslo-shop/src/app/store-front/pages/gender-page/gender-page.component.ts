import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductCardComponent } from '@products/components/product-card/product-card.component';
import { ProductsService } from '@products/services/products.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-gender-page',
  imports: [ProductCardComponent],
  templateUrl: './gender-page.component.html',
})
export class GenderPageComponent {
  productService = inject(ProductsService);
  route = inject(ActivatedRoute);
  gender = toSignal(
    this.route.params.pipe(
      map(({gender})=> gender)
    )
  )
  productsResource = rxResource({
    params : ()=>({gender: this.gender()}),
    stream:({params})=> {
      return this.productService.getProducts({
        limit:10,
        gender : params.gender,
      });
    }
  })



 }
