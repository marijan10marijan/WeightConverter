
const number = document.getElementById('inputt');

number.addEventListener('input', output);


document.querySelector('.result-box').style.visibility = 'hidden';
function output(e) {
    document.querySelector('.result-box').style.visibility = 'visible';
    let value = e.target.value;
    document.querySelector('.poundsOutput').innerText = value * 2.2045;
    document.querySelector('.ouncesOutput').innerText = value * 35.2739619;
}





















