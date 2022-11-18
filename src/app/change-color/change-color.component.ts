import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-color',
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.css']
})
export class ChangeColorComponent implements OnInit{
  backGround = "#00e067";

  // @ts-ignore
  onChangeColor(color) {
    this.backGround = color;
  }


  ngOnInit(): void {
  }

}
