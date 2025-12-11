function carregar(){
    var msg = document.getElementById('msg');
    var imagem = document.getElementById('foto');
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    min = ('0' + min).slice(-2);
    msg.innerHTML = `Agora são ${hora}:${min}`
    if(hora >= 6 && hora < 12){
        imagem.src = 'imagens/imagem_manha-ofc.png'
        document.body.style.background = '#d5cf71ff'
    }
    else if(hora >= 12 && hora < 18){
        imagem.src = 'imagens/imagem_tarde-ofc.png'
        document.body.style.background = '#70D3FF'
    }
    else{
        imagem.src = 'imagens/imagem_noite_ofc.png'
        document.body.style.background = '#264352'
    }
}