import { AutoPart } from './auto-part.model';

export class Truck {
    type: string;
    quantity: number;
    purchasePrice: number;
    salvageValue: number;
    usefulLife: number;
    dieselComsumption: number;
    dieselPrice: number;
    autoparts: AutoPartTruck[];

    constructor(
        type: string,
        quantity: number,
        purchasePrice: number,
        salvageValue: number,
        usefulLife: number,
        dieselComsumption: number,
        dieselPrice: number,
        autoparts: AutoPartTruck[],
    ){
        this.type = type; 
        this.quantity = quantity; 
        this.purchasePrice = purchasePrice; 
        this.salvageValue = salvageValue; 
        this.usefulLife = usefulLife; 
        this.dieselComsumption = dieselComsumption; 
        this.dieselPrice = dieselPrice; 
        this.autoparts = autoparts; 
    }

    getMaintanceAmount(){

    }

    getDepreciationAmount(){

    }

    getDieselComsuptionAmountPer(time: "min" | "hour" | "day" = "hour"){

    }

    getAutoPartsCost(){

    }


}

export interface AutoPartTruck {
    quantity: number;
    autopart: AutoPart;
}