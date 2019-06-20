import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router} from '@angular/router'
import { ProductService} from './product.service'

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "Product Detail";
  products: IProduct[] = [];
  myProduct: object;
  errorMessage: string; 
  constructor(private route: ActivatedRoute, private router: Router,private productService: ProductService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProducts().subscribe(
      products => {
        this.products = products
        for(let i = 0; i < this.products.length; i++) {
          if(this.products[i].productId === id) {
            return this.myProduct = this.products[i];
          }
        }
      },
      error => this.errorMessage = <any>error
    )
    
    
  }

  onBack():void {
    this.router.navigate(['/products'])
  }

  

}
