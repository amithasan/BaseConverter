
function log(str, val) {
    console.log(str + " = " + val);
}
var convertBase = function (val, base1, base2) {
    if (typeof (val) == "number") {
        //console.log(base1 + " " + base2);
        //console.log(parseInt(String(val)).toString(base2));
        return parseInt(String(val)).toString(base2);
    } else {
        //console.log(base1 + " " + base2);
        //console.log(parseInt(val.toString(), base1).toString(base2));
        return parseInt(val.toString(), base1).toString(base2);
    };
}

var convert = function (value, base1, base2) {
    if (base1 == 10) {
        //console.log(base1 + " " + base2);
        return convertBase(parseInt(value), base1, base2)
    } else {
        //console.log(base1 + " " + base2);
        return convertBase(value, base1, base2);

    }
}

$(document).ready(function () {
    var from = 10;
    var to = 2;
    var lastfrom = $("#firstfrom")
    var lastto = $("#firstto");

    $(".from").fastClick(function () {
        from = parseInt($(this).text());
        //console.log("from = " + from);
        //console.log("to = " + to);

        lastfrom.removeClass("btn-warning");
        lastfrom = $(this);
        $(this).addClass("btn-warning");

        //console.log($("#numinput").val());
        //console.log("=" + convert($("#numinput").val(), from, to));
        //var input = $("#numinput").val();
        //log("input", input);
        //var res = convert(input, from, to);
        //log("result", res);
        //$("#result").text(res);

        getAndShowResult();
    });

    $(".to").fastClick(function () {
        to = parseInt($(this).text());

        lastto.removeClass("btn-warning");
        lastto = $(this);
        $(this).addClass("btn-warning");

        //var input = $("#numinput").val();
        //log("input", input);
        //var res = convert(input, from, to);
        //log("result", res);
        //$("#result").text(res);
        getAndShowResult();
    });

    $("#ok").fastClick(function () {
        getAndShowResult();
    });
    $("#clear").fastClick(function () {
        $("#numinput").val("");
    });
    //$('#numinput').on('change', function () {
    //    getAndShowResult();
    //});

    function getAndShowResult() {
        var input = $("#numinput").val();
        var res = convert(input, from, to);

        if (isNaN(convert(res, 16, 2))) {
            $("#result").html("Invalid Input!!!");
        } else {
            $("#result").html(res + "<sub>" + to + "</sub>");
        }
    }
});

