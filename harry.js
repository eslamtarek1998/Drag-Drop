let inp=document.getElementById("inp")
let btn=document.getElementById("btn")
let box=document.querySelectorAll(".box")


    btn.onclick=function(){
         if(inp.value!=""){

box[0].innerHTML+=`<p class="item" draggable="true">${inp.value}</p>`
    }

    inp.value=""

    dragItem()
    
}

function dragItem(){

    let items=document.querySelectorAll(".item")
    items.forEach(item=>{

item.addEventListener("dragstart",function(){

    drag=item;
    item.style.opacity='0.5'
    
})

item.addEventListener("dragend",function(){

    drag=null;
    item.style.opacity='1'
   
})

    })

box.forEach(boxx=>{

    boxx.addEventListener("dragover",function(e){

        e.preventDefault()


        this.style.background="#090"
        this.style.color="#fff"
    })

    boxx.addEventListener("dragleave",function(){


        this.style.background="#fff"
        this.style.color="#000"


})

boxx.addEventListener("drop",function(){


    boxx.append(drag)
    this.style.background="#fff"
    this.style.color="#000"


    
})

})

}

