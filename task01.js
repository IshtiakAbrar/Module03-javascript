function printObjectProperties(obj){
    if (Object.keys(obj).length==0) console.log("Object is empty");
    
    else{
        for (const i in obj){
            console.log(i+": "+obj[i]);
        }
            
    }
    

}

let person={
    name: "Ishtiak",
    age:24,
    gender:"male"
}
let human={
    
};

printObjectProperties(person);
printObjectProperties(human);