'use strict';

const inputRub=document.querySelector('#rub'),
      inputUsd=document.querySelector('#usd'); 

inputRub.addEventListener('input', ()=>{
    const request=new XMLHttpRequest();

    //request.open(method, url, async, login, pass);
    request.open('GET', 'js/curent.json');
    request.setRequestHeader('Content-type','application/json;charset=utf-8')
    
});
