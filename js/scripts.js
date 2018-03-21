$(function(){
  $("#orderForm").submit(function() {
// Converts user inputs into variables
    var fullName = $("input#fullName").val();
    var streetAddress = $("input#streetAddress").val();
    var cityStateZip = $("input#cityStateZip").val();
    var bagType = $("#bagType").val();
    var bagTypeCost;
    var familySize = $("#familySize").val();
    var familySizeCost;
    var greens = $("input:radio[name=greens]:checked").val();
    var fruit = $("input:radio[name=fruit]:checked").val();
    var herb = $("input:radio[name=herb]:checked").val();
    var delivery = $("#delivery").val();

    if (bagType === "box") {
      bagTypeCost = 2;
    } else if (bagType === "tote") {
      bagTypeCost = 3;
    } else if (bagType === "basket") {
      bagTypeCost = 5;
    } else { bagTypeCost = 0;
    }

    if (familySize === "couple") {
      familySizeCost = 5;
    } else if (familySize === "family") {
      familySizeCost = 10;
    } else { familySizeCost = 0;
    }

    var cost = 15 + bagTypeCost +familySizeCost;

// Takes input variables and places in output spans
    $(".fullName").text(fullName);
    $(".streetAddress").text(streetAddress);
    $(".cityStateZip").text(cityStateZip);
    $(".bagType").text(bagType);
    $(".familySize").text(familySize);
    $(".greens").text(greens);
    $(".fruit").text(fruit);
    $(".herb").text(herb);
    $(".delivery").text(delivery);
    $(".cost").text(cost);
// Hide order form show receipt
    $("#orderForm").hide();
    $("#output").fadeIn();

    event.preventDefault();
  });

});
