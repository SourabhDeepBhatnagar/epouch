import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  imports:[ CommonModule]
  
})
export class CartListComponent implements OnInit {

  count:number = 0;
  isOpen:boolean =false;
  previewFlag:boolean = false;
  inVoiceNo :number;
  constructor(public cartService:CartService) { 

  }

  ngOnInit() {

    this.cartService.cartUpdates$.subscribe(()=>{
      this.count= this.cartService.count;
    });
    console.log("Count :" + this.count)
  }
  openCart(e):void{
    this.isOpen = true;
    console.log("this.isOpen :" + this.isOpen)
     e.preventDefault();
     //return false;
  }
  closeCart():void{
    this.isOpen = false;
    this.previewFlag = false;
  }
  removeProduct(item) :void{
    console.log(this.cartService)
    this.cartService.cartItmes.splice(this.cartService.cartItmes.findIndex(element=>item.id === element.id),1);
    this.count= this.cartService.count;
  }
  chngQuantity():void{
    this.count= this.cartService.count;     
  }
  preview() :void{
    this.previewFlag = true;
    this.inVoiceNo = this.getRandomInt(23443, 23432555);
  } 
  getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}