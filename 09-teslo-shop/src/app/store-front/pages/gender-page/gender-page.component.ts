import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductCardComponent } from '@products/components/product-card/product-card.component';
import { ProductsService } from '@products/services/products.service';
import { map } from 'rxjs';
import { PaginationComponent } from "@/sharedcomponent/pagination/pagination.component";
import { PaginationService } from '@/sharedcomponent/pagination/pagination.service';

@Component({
  selector: 'app-gender-page',
  imports: [ProductCardComponent, PaginationComponent],
  templateUrl: './gender-page.component.html',
})
export class GenderPageComponent {
  productService = inject(ProductsService);
  paginationService = inject(PaginationService);
  route = inject(ActivatedRoute);
  gender = toSignal(
    this.route.params.pipe(
      map(({gender})=> gender)
    )
  )
  productsResource = rxResource({
    params : ()=>({gender: this.gender(),page: this.paginationService.currentPage() - 1 }),
    stream:({params})=> {
      return this.productService.getProducts({
        offset: params.page * 9,
        gender : params.gender,
      });
    }
  })



 }
