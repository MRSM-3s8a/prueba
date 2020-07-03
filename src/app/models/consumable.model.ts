export class Consumable {
    name: string;
    description: string;
    unitPrice: number;
    quantity: number;
    unitOfConsumable: string; //(cm, m, l, km) 

    constructor(
        name: string, 
        description: string, 
        unitPrice: number,
        quantity: number,
        unitOfConsumable: string
    ){
        this.name = name;
        this.description = description;
        this.unitPrice = unitPrice;
        this.quantity = quantity;
        this.unitOfConsumable = unitOfConsumable;
    }

    getCost(){

    }
}