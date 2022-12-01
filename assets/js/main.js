import app from './firebase/app.js'
import { subscribeToHellfireClub } from './firebase/helfireClub.js'

// FORM entre para o Clube de D&D
const txtName = document.getElementById('txtName') 
const txtEmail = document.getElementById('txtEmail') 
const txtLevel = document.getElementById('txtLevel')
const txtPersonagem = document.getElementById('txtCharacter') 

const btnSubscribe = document.getElementById('btnSubscribe') 

//Chamada do botao ME inscrever
btnSubscribe.addEventListener('click', async ()  =>{
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        personagem: txtPersonagem.value
    }
// Salvar objeto no DB...
   const subscriptionId = await subscribeToHellfireClub(subscription)
   console.log(`Inscrito com sucesso: ${subscriptionId}`)
})
