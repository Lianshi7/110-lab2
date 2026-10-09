export const music = ["Pop", "Rock", "Jazz"];

export function printMusic(): void {
    console.log("Party Music:");
    music.forEach((song) => {
        console.log(song);
    });
}