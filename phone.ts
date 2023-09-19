interface City {
    name : string ;
    tel : number;
    
}
const sabad : City[] =[]
function add_to_phone(T: City){ 
        sabad.push(T)

}
    for(let i=0 ; i<4 ; i++){
        const name1  = prompt("please inter name:") || ""
        const  tel1 = parseInt(prompt("please inter tel") || "" )
        if((name1 && tel1)!==null){
            add_to_phone({name:name1 , tel:tel1})
            console.log(sabad)
         }
        else{
            console.log("empty")
        } 

        
    }
 