$(document).ready(function(){
    $.ajax({
        method:"GET",
        dataType:"json",
        crossDomain: true,
        url: "https://cors-anywhere.herokuapp.com/https://corebiz.myvtex.com/api/catalog_system/pub/products/search/tablete",
        success: function(e){
            var productCount = 4 
            for (var index = 0; index < productCount; index++) {
                $("#product-" + index)[0].children[0].children[0].src = e[index].items[0].images[0].imageUrl     
                $("#product-" + index)[0].children[0].children[1].children[0].innerText = e[index].productTitle
                $("#product-" + index)[0].children[0].children[1].children[2].attributes[0].value = e[index].link
            }
        }
    })
})