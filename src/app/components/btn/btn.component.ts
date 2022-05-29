import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
  @Input()
  bgbtn: string;
  @Input()
  textbtn: string;

  constructor() {
    this.bgbtn = 'white';
    this.textbtn = '#72BC95';
  }

  ngOnInit(): void {
  }

}
