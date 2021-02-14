const myForm= document.querySelector('#my-form');
const nameInput= document.querySelector('#name');
const emailInput= document.querySelector('#my-form');
const msg= document.querySelector('.msg');
const userList= document.querySelector('#my-form');

myForm.addEventListner('submit',onSubmit);

function onSubmit(e){
	e.preventDefault();

	if(nameInput.value==''||emailInput.value==''){
		msg.innerHTML='please enter all fields';

		setTimeout(()=>msg.remove(),3000);
	}
		else{
			const li=document.createElement('li');
			li.appendChild(document.createTextNode('${nameInput')
	}
	
}