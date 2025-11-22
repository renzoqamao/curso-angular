import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@products/services/products.service';

@Component({
  selector: 'app-product-page',
  imports: [],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {
  activateRoute = inject(ActivatedRoute);
  productService = inject(ProductsService);

  productIdSlug = this.activateRoute.snapshot.params['idSlug'];

  productResource = rxResource({
    params : ()=>({idSlug: this.productIdSlug}),
    stream:({params})=> {
      return this.productService.getProductByIdSlug(params.idSlug);
    }
  })


}
