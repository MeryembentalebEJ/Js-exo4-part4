// let btnShow = document.querySelector('button');
// let input = document.querySelector('#input');
// var presidents = ['François Hollande', 'Nicolas Sarkozy', 'Jacque Chirac', 'François Mitterand'];


// btnShow.addEventListener('click', () => {

// });

function show(){
    var presidents = prompt('Quel est le président actuel de la France ?');
    if (presidents == 'Macron'){
        alert('Yeah, you got it ! ')
    }else {
        alert('No! try again !!');
    }
}
show();

