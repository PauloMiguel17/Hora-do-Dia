function carregar(){
    var msg = document.getElementById('msg');
    var imagem = document.getElementById('foto');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        imagem.src = 'imagens/imagem_manha-ofc.png'
        document.body.style.background = '#FFD470'
    }
    if(hora >= 12 && hora < 18){
        imagem.src = 'imagens/imagem_tarde-ofc.png'
        document.body.style.background = '#70D3FF'
    }
    else{
        imagem.src = 'imagens/imagem_noite_ofc.png'
        document.body.style.background = '#264352'
    }
}