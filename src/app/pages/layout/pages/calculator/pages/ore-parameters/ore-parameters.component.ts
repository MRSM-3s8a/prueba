import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ore-parameters',
  templateUrl: './ore-parameters.component.html',
  styleUrls: ['./ore-parameters.component.css']
})
export class OreParametersComponent implements OnInit {

  listOfOre = [
    "Copper",
    "Gold",
    "Silver",
    "Lead",
    "Zinc",
    "Polymetallic"
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
