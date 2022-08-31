import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { MainComponent } from './main/main.component';
import { StupidComponent } from './stupid/stupid.component';
import { ComentariesComponent } from './comentaries/comentaries.component';

const addPath: Routes = [
  { path: "", component: MainComponent },
  { path: "product/:id", component: ProductComponent },
  { path: "**", component: StupidComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    StupidComponent,
    MainComponent,
    ComentariesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(addPath)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }