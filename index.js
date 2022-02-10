// const mainTag = document.getElementById('main');
// const firstChild = mainTag.querySelector('main');
// mainTag.removeChild(firstChild);

//1. 
document.querySelector('main').remove();

//2. 
const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
// document.body.append(newHeader);

//3. 
newHeader.textContent = 'Valencia is the champion';


