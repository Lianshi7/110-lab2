import { printAnimation } from "./animation";

export const music = ["Pop", "Rock", "Jazz"];

export function printMusic(): void {
    printAnimation("Music");

    console.log("Party Music:");
    music.forEach((song) => {
        console.log(song);
    });
}