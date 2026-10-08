const guests: string[] = ["Alice", "Bob", "Charlie", "Diana"];

export function printGuests(): void {
    guests.forEach((guest) => {
        console.log(guest);
    });
}

printGuests();