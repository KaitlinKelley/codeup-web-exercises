"use strict";

function floydTriangle(){
    var rowCount = 1;
    for(var i = 1; i<=4; i++){
        var output = "";
        for(var j = 1; j<=i; j++){
            output += rowCount + " ";
            rowCount++;
        }
        console.log(output)
    }
}

floydTriangle();