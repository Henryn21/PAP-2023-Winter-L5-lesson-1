let showCard=(type)=>{
    reset();
    cards.forEach(card => {
        if(!card.classList.contains(type)){
            card.classList.add("hide")
        }
    });
}
let reset=()=>{
    cards.forEach(card => {
        card.classList.remove("hide")
    });
}
let cards=document.querySelectorAll(".machine");

