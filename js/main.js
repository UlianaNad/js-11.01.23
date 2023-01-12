let item = document.querySelector('.item');

function move(){
  
    return function(){
        item.addEventListener('mouseenter', () =>{
            item.innerHTML = 'Good job';
            item.style.color = 'red';
        })
    }
}

let mouseenter = move()();

item.addEventListener('mouseout', () =>{
    item.innerHTML = item;
    item.style.color = 'black';
    console.log(item)
});