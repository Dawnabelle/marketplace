$(function(){
  $("#orderForm").submit(function() {
// Converts user inputs into variables
    var fullName = $("input#fullName").val();
    var streetAddress = $("input#streetAddress").val();
    var cityStateZip = $("input#cityStateZip").val();
    var bagType = $("#bagType").val();
    var greens = $("input:radio[name=greens]:checked").val();
    var fruit = $("input:radio[name=fruit]:checked").val();
    var herb = $("input:radio[name=herb]:checked").val();
    var delivery = $("#delivery").val();
// Takes input variables and places in output spans
    $(".fullName").text(fullName);
    $(".streetAddress").text(streetAddress);
    $(".cityStateZip").text(cityStateZip);
    $(".bagType").text(bagType);
    $(".greens").text(greens);
    $(".fruit").text(fruit);
    $(".herb").text(herb);
    $(".delivery").text(delivery);
// Hide order form show receipt
    $("#orderForm").hide();
    $("#output").show();

    event.preventDefault();
  });

});
