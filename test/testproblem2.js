import { problem2 } from "../problem2.js";
import { inventory } from "../inv.js";
const ans2=problem2(inventory);
console.log(`Last car is a ${ans2["car_make"]} ${ans2["car_model"]}`);