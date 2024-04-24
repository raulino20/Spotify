function Search(){

const Sens = document.getElementById('Sensacional')

const Party = document.getElementById('Festa')

const Busca = document.getElementById('TextSearch')
  
  
  if(Busca.value && Sens === true ){
 
    Sens.style.display = 'block'
    Party.style.display = 'none'

 } if(Busca.value !== Sens){
    const Card = document.getElementsByClassName('CardFree')
    const Error = document.createElement('h1')
    Error.style.color = 'white'
    const Place = document.getElementById('Hd')

    Error.innerText = 'MUSICA NÃO ENCONTRADA'
    Place.appendChild(Error)
    Card.style.display = 'none'

 } 
}


function Abrir(){

const Img = document.getElementById('LogoFreeTJ')
const Container = document.getElementById('Marcante')
const Letra = document.getElementById('Legenda')

  Container.addEventListener('click',function(){

Container.style.display = 'flex'
Container.style.flexDirection = 'Column'
Container.style.width = '90%'
Container.style.height = 'auto'

Img.style.width = '50%'
Img.style.margin = '0 auto'

Letra.style.display = 'block'
Letra.style.fontSize = '25px'
Letra.style.padding = '0.5rem'
Letra.style.textIndent = '3px'

   const Textinho = document.getElementById('text')
   const Mudar = document.getElementById('fechar')
 
   Textinho.style.display = 'none'
   Mudar.style.display = 'block'
   Mudar.style.width = 'max-content'
   Mudar.style.margin = '0 auto'
})
}


function Close(){

   const Letra = document.getElementById('Legenda')
   Letra.style.display = 'none'
   .style.display = 'block'
   
}