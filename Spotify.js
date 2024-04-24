const Tamanho = document.getElementsByClassName('Corpo')

function Drop(){
    const X = document.getElementById('Cruz')
    const Arrow = document.getElementById('Flecha')
    const Janela = document.getElementById('DropUl')
 //  const Drop = document.getElementById('Dropin')   


   Arrow.addEventListener('click',function(){

    Janela.style.display = 'block'
     Janela.style.marginTop = '3rem'
       Janela.style.backgroundColor ='rgb(11, 6, 40)'
        Janela.style.position = 'fixed'
      Janela.style.width = '100%'
     Janela.style.height = '100vh'
    Janela.style.zIndex = '4' 

    Arrow.style.display = 'none'
  
    X.style.display = 'flex'
     X.style.alignItems = 'center'
    X.style.color = 'white'


 // Drop.style.display = 'flex'
 //    Drop.style.borderRadius = '10%'
//  Drop.style.alignItems = 'center'

  })


   X.addEventListener('click',function(){

    Janela.style.display = 'none'
    X.style.display = 'none'
    Arrow.style.display = 'block'

   })

}


