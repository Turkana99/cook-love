import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  showElement: boolean = false;

  ViewMore() {
    this.showElement = true;
  }
  // items = ['Chicken Burger', 'Fried Rice', 'Meat', '12" Pizza', 'Sezar salad'];

  basket = [
    { name:'Chicken Burger', content:'Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', price:"24$"},
    { name:'Fried Rice', content:'Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', price:"24$"},
    { name:'Meat', content:'Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', price:"24$"},
    { name:'12" Pizza', content:'Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', price:"24$"},

  ];

  items = [
    { name:'Salad', content:'Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', price:"24$"},
    { name:'Double Burger', content:'Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', price:"24$"},
    { name:'Spicy Pizza', content:'Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', price:"24$"},
    { name:'Sushi', content:'Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', price:"24$"},
    { name:'Noodle', content:'Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', price:"24$"}
  ];

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
