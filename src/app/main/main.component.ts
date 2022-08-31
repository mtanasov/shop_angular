import { Component, OnInit } from '@angular/core';
import { ProductPlate, Product } from '../product-plate.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ProductPlate],

})
export class MainComponent implements OnInit {
  // @ts-ignore
  PP: Product[];

  onClick(event: any) {
    console.log(event.target)
  }

  constructor(private ProductPlate: ProductPlate) {
  }
  ngOnInit(): void {
    this.PP = this.ProductPlate.getProduct()
    // console.log(this.PP);
  }
}
