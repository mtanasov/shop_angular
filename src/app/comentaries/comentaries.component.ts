import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProductPlate } from '../product-plate.service';

@Component({
  selector: 'app-comentaries',
  templateUrl: './comentaries.component.html',
  styleUrls: ['./comentaries.component.css'],
})
export class ComentariesComponent implements OnInit {
  // @ts-ignore
  arrComment: {}
  // @ts-ignore
  PP: Product[]
  // @ts-ignore
  array: [{}]
  @Input() comment: string[]
  @Input() newComment: string
  // @ts-ignore
  @Input() id: string
  in: any
  // @ts-ignore
  massive: string[]

  constructor(private ProductPlate: ProductPlate) {
    // @ts-ignore
    this.comment = []
    this.newComment = ""
    this.massive = []
  }

  cl = (event: any) => {
    this.PP = this.ProductPlate.getProduct()
    let index = this.PP.findIndex(el => el.id === this.id)
    let addComm = this.PP[index].comments.push(this.newComment)
    console.log(this.PP[index].comments);

    if (!localStorage.getItem(`localComment${this.id}`)) { //если нет локхран
      let obj = { //создаем объект
        id: this.id,  //передаем  айди
        commentss: [this.newComment] //передаем комментарий
      }
      let toJson = JSON.stringify(obj) //заворачиваем в JSON
      let locSt = localStorage.setItem(`localComment${this.id}`, toJson) //кидаем в локХра
      // let arrComm: [] = locSt.comment.push(this.newComment)
      // @ts-ignore
      console.log(JSON.parse(localStorage.getItem(`localComment${this.id}`)));
    } else {
      // let locSt = localStorage.getItem(`localComment${this.id}`)
      // @ts-ignore
      let toObj = JSON.parse(localStorage.getItem(`localComment${this.id}`)) //объект с комментариями
      let arara = toObj.commentss
      // console.log(toObj);
      let com = arara.push(this.newComment) // add to array comments
      localStorage.setItem(`localComment${this.id}`, JSON.stringify(toObj))
      console.log(localStorage.getItem(`localComment${this.id}`));
    }
    this.newComment = ""
  }
  ngOnInit(): void {

  }

}
