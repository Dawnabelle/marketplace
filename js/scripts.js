$(function(){
  $("#orderForm").submit(function() {
    var fullName = $("input#fullName").val();
    var streetAddress = $("input#streetAddress").val();
    var cityStateZip = $("input#cityStateZip").val();
    var bagType = $("#bagType").val();
    var greens = $("input:radio[name=greens]:checked").val();
    var fruit = $("input:radio[name=fruit]:checked").val();
    var herb = $("input:radio[name=herb]:checked").val();

    $(".fullName").text(fullName);
    $(".streetAddress").text(streetAddress);
    $(".cityStateZip").text(cityStateZip);
    $(".bagType").text(bagType);

    $("#output").show();

    event.preventDefault();
  });

});
