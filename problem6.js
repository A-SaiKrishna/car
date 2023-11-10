export function problem6(inventory){
    const BMWAndAudi=[];
    for(let i=0;i<inventory.length;i++){
        if(inventory[i]["car_make"].toUpperCase()=== "AUDI" || inventory[i]["car_make"].toUpperCase()==="BMW")
        BMWAndAudi.push(inventory[i]);
    }
    return BMWAndAudi;
}