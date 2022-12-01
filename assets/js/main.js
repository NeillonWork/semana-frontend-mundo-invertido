import app from './firebase/app.js'
import { getHellfireClubSubscriptions, subscribeToHellfireClub } from './firebase/helfireClub.js'

// FORM entre para o Clube de D&D
const txtName = document.getElementById('txtName') 
const txtEmail = document.getElementById('txtEmail') 
const txtLevel = document.getElementById('txtLevel')
const txtPersonagem = document.getElementById('txtCharacter') 

const btnSubscribe = document.getElementById('btnSubscribe') 


//listar cadastrados em tela

const subscriptionList = document.getElementById('subscriptions') 


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
  // console.log(`Inscrito com sucesso: ${subscriptionId}`)

   txtName.value = ''
   txtEmail.value = ''
   txtLevel.value = ''
   txtPersonagem.value = ''

   alert("Inscrito com sucesso")
})

// Retornando a lista do DB salvos
async function loadData(){
    const subscriptions = await getHellfireClubSubscriptions()

    subscriptionList.innerHTML = subscriptions.map(sub =>`
        <li>${sub.name}</li>
    `).join('')

   // console.log(subscriptions)
}

loadData()

// Printar na tela lista do banco de dados dentro de um Table
//.....