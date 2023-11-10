import { problem1 } from "../problem1.js";
import { inventory } from "../inv.js";
const ans1=problem1(inventory);
console.log(`Car 33 is a ${ans1["car_year"]} ${ans1["car_make"]} ${ans1["car_model"]}`);