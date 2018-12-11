// document.getElementById('testParagraph').style.color = 'orange';

// console.log(document.querySelectorAll('p.sampleClass'));

// document.querySelectorAll('p.sampleClass')[0].innerText = 'My text has changed';

// document.querySelectorAll('p.sampleClass')[0].innerHTML = '<i>My text has changed</i>';

// document.getElementById('clickThisButton').addEventListener('click',(details) => {
//     if(details.target.style.backgroundColor == 'red') {
//         details.target.style.backgroundColor = 'blue';
//     } else {
//         details.target.style.backgroundColor = 'red';
//     }
// });

// console.log(document.getElementById('nameInput'[0].innerText))

// document.getElementById('nameInput').addEventListener('keyup', e => {
//     console.log(e.target.value);
// })

document.getElementById('nameInput').addEventListener('keyup', e => {
    if(e.target.value == '') {
        document.getElementsByTagName('p')[0].innerText = 'NOTHING HAS CHANGED!'
    } else {
        document.getElementsByTagName('p')[0].innerText = `Everyone, say hello to ${e.target.value}!`
    }
});