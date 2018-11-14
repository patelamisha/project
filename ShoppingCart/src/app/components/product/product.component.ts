import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';
import { CartAction } from '../../store/actions/cart.actions';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {
  


  // Angular will know to supply an instance of the ProductService & Router when it creates a new ProductComponent
  // Because they are injected in the constructor
  constructor (private productService:ProductService, private router:Router, private cartStore: CartAction) {

  }

 

  ngOnInit() {
  }

}
