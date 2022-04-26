// const placeHolder = document.getElementById("placeholder");
// const input = document.getElementById("input");
// const submit = document.getElementById("submit");
// const list = document.getElementById("list");
// const image = document.getElementById('image');

// submit.addEventListener("click", () => {
//     placeHolder.style.color = "goldenrod";
//     //placeHolder.textContent = input.value;
//     placeHolder.textContent = `I like ${input.value}`;

//     list.innerHTML = `<li>${input.value}</li>`;
// });

// submit.addEventListener("click", () => {
//     placeHolder.textContent = `link: ${input.value}`;
//     image.src = input.value;
// });

// submit.addEventListener("click", () => {
//     //image.style.cssText = 'display: none';
//     if( image.style.display == 'none' ){
//         image.style.display = 'block';
//         submit.textContent = 'hide';
//     } else {
//         image.style.display = 'none';
//         submit.textContent = 'show';
//     }
// });

//console.log(image);


const input = document.getElementById("input");
const submit = document.getElementById("submit");
const list = document.getElementById("list");

// const ex = list.getElementsByTagName('li');
// console.log(ex);

submit.addEventListener('click', ()=>{
    if(!input.value.replace(' ','')) return;

    let listItem = document.createElement('li');
    listItem.textContent = input.value;
    input.value = '';
    // console.log(listItem);
    list.appendChild(listItem);
});


const shoHide = document.getElementById("shoHide");

shoHide.addEventListener('click', ()=>{
    list.style.display = ( list.style.display == 'none' ? 'block' : 'none' ); 
    shoHide.textContent = ( list.style.display == 'none' ? 'show list' : 'hide list' );
});

const removeButton = document.getElementById('remove');

removeButton.addEventListener('click', () => {
    let node = list.querySelector(':last-child');
    //let node = list.lastChild;
    console.log(node, typeof node);
    list.removeChild( node );
});


// window.setTimeout( (something) => {
//     console.log(something);
//  }, 5000, "Hello" );

// for (let li of Array(list) ) {
//     li.addEventListener("mouseover", () => {  
//         li.textContent = li.textContent.toUpperCase();
//     });
//     li.addEventListener("mouseout", () => {  
//         li.textContent = li.textContent.toLowerCase();
//     });

// }

list.addEventListener("mouseover", (event) => {
    //console.log(event.target.tagName);
    if( event.target.tagName.toLowerCase() == 'li' ) 
        event.target.textContent = event.target.textContent.toUpperCase();
    //console.log(event);
});
list.addEventListener("mouseout", (event) => {
    if( event.target.tagName.toLowerCase() == 'li' ) 
        event.target.textContent = event.target.textContent.toLowerCase();
});

let loremNode = document.getElementById('lorem');
let parentNode = loremNode.parentNode;

parentNode.removeChild( loremNode );

list.addEventListener("click", (event) => {
    const li = event.target;
    const ul = li.parentNode;
    ul.removeChild(li);
});