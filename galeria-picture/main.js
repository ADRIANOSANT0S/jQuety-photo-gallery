$(document).ready(function() {
    alert("Cuidado com o uso de imagens da web, pois elas contêm direitos autorais e, se forem violados, podem acarretar problemas com a justiça.")
    
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#btn-cancelar').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const urlNewImg = $('#url-img').val()
        const newImg = $('<li style="display:none"></li>')
        $(`<img src="${urlNewImg}" />`).appendTo(newImg)
        $(`
            <div class="overlay-img-link">
                <a href="${urlNewImg}" title="Ver imagem em tamanho real" target="_blank">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(newImg)
        $(newImg).fadeIn(1000)
        $(newImg).appendTo('ul')
        $('#url-img').val('')
    })
})