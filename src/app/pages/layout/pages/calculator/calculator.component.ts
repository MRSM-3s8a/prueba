import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  openMap: { [name: string]: boolean } = {
    sub1: false,
    sub2: false,
    sub3: false,
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }

  navigateTo(route:string, option: string){
    // this.router.navigate([route,option]);
    this.router.navigate([route,option]);
  }

}
