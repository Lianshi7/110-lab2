const snacks: string[] = ["Chips", "Cookies", "Popcorn", "Chocolate"];

export function printSnacks(): void {
    snacks.forEach((snack) => {
        console.log(snack);
    });
}

printSnacks();