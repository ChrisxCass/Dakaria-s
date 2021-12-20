$(document).ready(function() {

    //dar clase active al item
    $('.category_list .category_item[category="all"]').addClass('category_item-active');

    $('.category_item').click(function() {

        var catProduct= $(this).attr('category');
        console.log(catProduct);
        //agregando clase active a el enlace seleccionado
        $('.category_item').removeClass('category_item-active');
        $(this).addClass('category_item-active');

        // ocultando productos********************************

        $('.product-item').hide();

        // Mostrar productos

        $('.product-item[category="'+catProduct+'"]').show();


        });
        //mostrando todos los productos
        $('.category_item[category="all"]').click(function(){
            $('.product-item').show();
        });
});