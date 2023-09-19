interface Contacts {
    name: string;
    tel: number;
}
const sabad1 : Contacts[] = []
function add_to_phone1(G:Contacts){
    const temp2 = {
        name : G.name ,
        tel : G.tel
    }
    sabad1.push(temp2)
}

for (let i=1 ; i<3 ; i++){
    
    const NamE = prompt("please inter name:") || " "
    const TeL = parseInt(prompt("please inter tel") || "")
    if((NamE && TeL)!==null){
    add_to_phone1({name:NamE , tel:TeL})
    console.log(sabad1)
    }else{
        console.log("empty")
    }
}
let temp2 = 0
function search_item1(N:string){
    for(let i=0 ; i<sabad1.length ; i++){
        if(N==sabad1[i].name){
            temp2 = 1   
            console.log("result of your search:" , sabad1[i])
               }
              
         }
         if(temp2==0) {
            console.log("not find")
          }
          else return
}
search_item1(prompt("please inter search item") || "" , ) 