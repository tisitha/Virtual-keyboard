let textBox = document.querySelector(".textbox");
let enterKey = document.querySelector(".enterKey");
let spaceKey = document.querySelector(".spaceKey");
let backspaceKey = document.querySelector(".backspaceKey");
let capsLockKey = document.querySelector(".capsLockKey");
isCaps = false;
let keys = document.querySelectorAll(".key");

enterKey.addEventListener("click",function(){
    let contain = textBox.innerHTML;
    let newContain = contain + "<br>";
    textBox.innerHTML = newContain;
})

spaceKey.addEventListener("click",function(){
    let contain = textBox.innerHTML;
    let newContain = contain + " ";
    textBox.innerHTML = newContain;
})

backspaceKey.addEventListener("click",function(){
    let contain = textBox.innerHTML;
    let newContain = contain.slice(0,contain.length-1);
    textBox.innerHTML = newContain;
})

capsLockKey.addEventListener("click",function(){
    if (isCaps==true){
        capsLockKey.classList.remove("active");
        for(let key of keys){
            key.innerHTML = key.innerHTML.toLowerCase();
        }
    }
    else{
        capsLockKey.classList.add("active");
        for(let key of keys){
            key.innerHTML = key.innerHTML.toUpperCase();
        }
    }
    isCaps = !isCaps;
})

for(let key of keys){
    key.addEventListener("click",function(){
        let contain = textBox.innerHTML;
        let newContain = contain + key.innerHTML;
        textBox.innerHTML = newContain;
    }
    )
}
