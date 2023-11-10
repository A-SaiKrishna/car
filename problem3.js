export function problem3(inve){
    let n=inve.length;
    for(let i=n-1;i>=0;i--){
        for(let j=1;j<=i;j++){
            if(inve[j-1]["car_model"].trim().toLowerCase()>inve[j]["car_model"].trim().toLowerCase()){
                let flag=inve[j-1];
                inve[j-1]=inve[j];
                inve[j]=flag;
            }
        }
    }
    console.log(inve);
}