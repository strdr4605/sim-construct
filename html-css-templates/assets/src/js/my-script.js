$(document).ready(function(){
    $('.product').click(function(event){
      event.stopPropagation()
      $product = $(this).html()
      $('.zoom-product')
        .addClass('display-flex')
        .removeClass('hidden')
        .html($product).children('img').addClass('zoom-image')
    })

    $('.zoom-product').click(function (event) {
      event.stopPropagation()
    })

    $('body').click(function () {
      $('.display-flex')
        .addClass('hidden')
        .removeClass('display-flex')
        .html('')
    })
})
