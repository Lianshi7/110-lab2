import { printAnimation } from "./animation";

export const snacks = [
    "Chips",
    "Cookies"
];

export function printSnacks(): void {
    printAnimation("Snacks");

    snacks.forEach((snack) => {
        console.log(snack);
    });
}