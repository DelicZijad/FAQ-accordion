'use strict';
const questions=document.getElementsByClassName('content--question');

console.log(questions);

[...questions].forEach(question=>{
    question.addEventListener('click',function(e){
        
  const answer=e.target.parentElement.querySelector('.content--answer');
 
const answers=document.getElementsByClassName('content--answer');
[...answers].forEach(ans=>ans.classList.add('hide'))
answer.classList.remove('hide')
const arrows=document.getElementsByClassName('content--arrow');
[...arrows].forEach(arr=>arr.classList.remove('upside'))
 const arrow=e.target.querySelector('.content--arrow')
    arrow.classList.add('upside')
    })

})