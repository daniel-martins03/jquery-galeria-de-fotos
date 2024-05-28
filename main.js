$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(e){
        e.preventDefault()
        const enderecoNovaImagen = $('#endereco-imagem-nova').val()
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${enderecoNovaImagen}" />`).appendTo(novoItem)
        $(` 
            <div class= "overlay-imagem-link">
                <a href= "${enderecoNovaImagen}" targent= "_blanck" title= "Ver imagem em tamanho real">
                    Ver imagem em tamanho real 
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(2000)
        $("#endereco-imagem-nova").val('')
    })    
})