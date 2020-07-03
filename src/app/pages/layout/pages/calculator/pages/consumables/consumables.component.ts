import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumables',
  templateUrl: './consumables.component.html',
  styleUrls: ['./consumables.component.css']
})
export class ConsumablesComponent implements OnInit {

  checked = false;
  indeterminate = false;
  listOfCurrentPageData: ConsumableItemData[] = [];
  listOfData: ConsumableItemData[] = [];
  setOfCheckedId = new Set<number>();
  constructor() { }

  ngOnInit(): void {
    this.listOfData = new Array(30).fill(0).map((_, index) => {
      return {
        id: index,
        name: `Ventilation duct ${index}`,
        description: `${index}m length`,
        unitPrice: index,
        quantity:index

        // age: 32,
        // address: `London, Park Lane no. ${index}`
      };
    });
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }

  onCurrentPageDataChange($event: ConsumableItemData[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }
}

export interface ConsumableItemData {
  id: number;
  name: string;
  description: string;
  unitPrice: number;
  quantity: number;
}