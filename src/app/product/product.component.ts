import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductPlate, Product } from '../product-plate.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductPlate],
})
export class ProductComponent implements OnInit {
  //@ts-ignore
  PP: Product[];

  @Input() image: string;
  //@ts-ignore
  @Input() arrComment: string[]
  public product: any;
  //@ts-ignore
  public id: string;
  //@ts-ignore
  productDate: object
  constructor(private route: ActivatedRoute, private ProductPlate: ProductPlate) {
    this.image = ""
  }
  ngOnInit(): void {
    this.PP = this.ProductPlate.getProduct();
    this.id = this.route.snapshot.params['id']
    this.product = this.PP.findIndex(el => el.id === this.id)
  }

}
