import { printAnimation } from "./animation";

export const snacks = [
    "Chips",
    "Cookies",
    "Popcorn",
    "Chocolate",
    "Pretzels",
    "Cheese",
    "Nuts"
];

export function printSnacks(): void {
    printAnimation("Snacks");

    snacks.forEach((snack) => {
        console.log(snack);
    });
}