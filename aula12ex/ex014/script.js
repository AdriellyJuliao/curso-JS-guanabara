function carregar(){
setInterval(() => {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.toLocaleTimeString()
    msg.innerHTML = `Agora são ${hora}.`

        hora=hora.split(":")[0]

        if(hora>= 00 && hora < 12){
            //BOM DIA
            img.src = 'fotomanha.jpg'
            document.body.style.background = '#e2cd9f'

        } else if (hora >=12 && hora <= 18){
            //BOA TARDE
            img.src = 'fototarde.jpg'
            document.body.style.background = '#b9846f'

        } else {
            //BOA NOITE
            img.src = 'fotonoite.jpg'
            document.body.style.background = '#515154'

        }
}, 1000);
}