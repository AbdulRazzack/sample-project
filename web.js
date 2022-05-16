// document.getElementById()

// console.log(document.getElementById('task-title'));

// console.log(document.getElementById('task-title').id);

// document.getElementById('task-title').style.background = 'tan';

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li:nth-child(3)').style.color = 'red';
// document.querySelector('li:nth-child(4)').textContent = 'Dog';
// document.querySelector('li:nth-child(odd)').style.background = 'tan';

const lis = document.querySelectorAll('li');

lis.forEach(function(lis, index){
    lis.textContent = `Task ${index+1} `;
});

const odd = document.querySelectorAll('li:nth-child(odd)');
const even = document.querySelectorAll('li:nth-child(even)');
odd.forEach(function(li,index){
    li.style.background = '#ccc';
});

even.forEach(function(li,index){
    li.style.background = '#f4f4f4'
});
console.log(lis);
