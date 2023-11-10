
export function problem5(inventory,prob4){
const years=prob4(inventory);
let above2000=0;
for(let i=0;i<years.length;i++){
    if(years[i]>2000)
      above2000+=1;
}
return above2000;
}

