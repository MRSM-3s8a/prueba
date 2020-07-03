export class Personnel {
    quantity: number;
    type: "supervisor" | "operator" | "offsider";
    salary: number;
    workingHours: number;

    constructor(
        quantity: number,
        type: "supervisor" | "operator" | "offsider",
        salary: number,
        workingHours: number,
    ){
        this.quantity = quantity
        this.type = type
        this.salary = salary
        this.workingHours = workingHours
    }

    getSalaryPerHour(){

    }
}