import { printAnimation } from "./animation";
export function printSnacks(): void {
    printAnimation("Snacks");
    const snacks: string[] = [
        "Chips", 
        "Cookies", 
        "Popcorn", 
        "Chocolate", 
        "Pretzels",
        "Cheese",
        "Nuts"];
    snacks.forEach((snack) => {
        console.log(snack);
    });
}

printSnacks();