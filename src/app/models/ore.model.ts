export class Ore {
    name: string;
    unit: string;
    marketPrice: number;
    specificGravityOre: number;
    swellFactor: number;
    typeOreGrade: number;
    factor: 'gr/ton' | '%';

    constructor(
        name: string,
        unit: string,
        marketPrice: number,
        specificGravityOre: number,
        swellFactor: number,
        typeOreGrade: number,
        factor: 'gr/ton' | '%'
    ){
        this.name = name;
        this.unit = unit;
        this.marketPrice = marketPrice;
        this.specificGravityOre = specificGravityOre;
        this.swellFactor = swellFactor;
        this.typeOreGrade = typeOreGrade;
        this.factor = factor;
    }
}