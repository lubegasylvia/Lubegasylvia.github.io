$(document).ready(function () {
  console.log("ready!");
  $('.product-thumbnails img').click(function () {
    var imageSrc = $(this).attr("src");
    $("#product-main-image").attr("src", imageSrc);
    return false;

  });

  $('.readmore').click(function () {
    $("#product-added").show();
    return false;
  });

  $('.product-quantity-plus').click(function () {
    var quantity = $("#quantity");
    quantity.val(parseInt(quantity.val()) + 1);
    return false;
  });

  $('.product-quantity-minus').click(function () {
    var quantity = $("#quantity");
    quantity.val(parseInt(quantity.val()) - 1);
    return false;
  });


});