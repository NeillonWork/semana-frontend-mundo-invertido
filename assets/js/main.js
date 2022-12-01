// FORM entre para o Clube de D&D
const txtName = document.getElementById('txtName') 
const txtEmail = document.getElementById('txtEmail') 
const txtLevel = document.getElementById('txtLevel')
const txtPersonagem = document.getElementById('txtCharacter') 

const btnSubscribe = document.getElementById('btnSubscribe') 

//Chamada do botao ME inscrever
btnSubscribe.addEventListener('click', () =>{
    debugger
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        personagem: txtPersonagem.value
    }
// Salvar objeto no DB...
}); 
