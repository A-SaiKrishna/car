import { problem6 } from "../problem6.js";
import { inventory } from "../inv.js";
const BMWAndAudi=problem6(inventory);
JSON.stringify(BMWAndAudi);
//console.log(BMWAndAudi);
let strBMWAndAudi=[];
for(let i=0;i<BMWAndAudi.length;i++){
    strBMWAndAudi.push(JSON.stringify(BMWAndAudi[i]));
}
console.log(strBMWAndAudi);