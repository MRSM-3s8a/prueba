export class AutoPart {
    name: string;
    price: number;
    usefullLife: number;

    constructor(
        name: string, 
        price: number, 
        usefullLife: number
    ){
        this.name = name;
        this.price = price;
        this.usefullLife = usefullLife;
    }

    getCostAmount(){

    }
}