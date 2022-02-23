let container = document.getElementById("container");
let item;

for(let i = 1; i <= 100; i++){

    item = document.createElement("div");
    item.classList.add("item");
    container.append(item);

    if(i%3 == 0 && i%5 == 0){
        item.innerHTML = "FizzBuzz";
        item.setAttribute("data-m", "3,5");
    }else if(i%3 == 0){
        item.innerHTML = "Fizz";
        item.setAttribute("data-m", "3");
    }else if(i%5 == 0){
        item.innerHTML = "Buzz";
        item.setAttribute("data-m", "5");
    }else{
        item.innerHTML = i;
    }
}