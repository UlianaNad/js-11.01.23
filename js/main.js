let item = document.querySelector('.item');
let el = item.innerHTML;
item.innerHTML = 'Touch me!';

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
    item.innerHTML = el;
    item.style.color = 'black';
    console.log(el)
});