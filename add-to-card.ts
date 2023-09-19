

const sabad :string[] = []
function add_to_card(item:string){
    const add_item = item
    sabad.push(add_item)
    console.log(sabad)


}
for (let i=1 ; i<3 ; i++){
    const IN = prompt("please inter your buy:")
    if(IN){
    add_to_card(IN)
    }
    else {
        console.log("empty")
    }
}