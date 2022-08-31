import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProductPlate, Product } from '../product-plate.service';

@Component({
  selector: 'app-stupid',
  templateUrl: './stupid.component.html',
  styleUrls: ['./stupid.component.css'],
  providers: [ProductPlate],
})
export class StupidComponent implements OnInit {
  // @ts-ignore
  PP: Product[];
  @Input() title: string;
  @Input() img: string;
  @Input() price: string;
  @Input() description: string;
  @Input() btnBuy: string;
  @Input() btnDelete: string;
  @Input() clss: string;
  @Input() clssImg: string;
  @Input() clssTitle: string;
  @Input() id: string;
  @Input() comments: string;


  @Output() buttonAction = new EventEmitter<string>();

  constructor(private ProductPlate: ProductPlate) {
    this.PP = []
    this.title = ""
    this.img = ""
    this.price = ""
    this.description = ""
    this.btnBuy = ""
    this.btnDelete = ""
    this.clss = ""
    this.clssImg = "image"
    this.clssTitle = "title"
    this.id = ""
    this.comments = ""
  }

  ngOnInit(): void {
    this.PP = this.ProductPlate.getProduct()
    // console.log(this.PP);
  }
}