/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    
    // var index = /[a-z]/i.exec(input).index
    // var num = input.slice(0,index);
    
    var num2 = input.split("");
    var index = input.match(/[a-z]/i).index
    if (index == 0) return 1;
    var num3 = num2.splice(index);
    
    num2 = num2.join("");
    
    if(num2.indexOf("/")==-1){
      if(isNaN(num2)) return "invalid number";
      result = Number(num2);
    } else {
      var arrNum = num2.split("/");
      if (arrNum.length > 2) return "invalid number";
      if(isNaN(arrNum[0]) || isNaN(arrNum[1])) return "invalid number";
      result = Number (arrNum[0]/arrNum[1])
    }
    //console.log(result)
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    var measureUnit = ['gal','l','mi','km','lbs','kg'];
    var index = input.match(/[a-z]/i).index;
    var unit = input.split("").splice(index).join("");
    
    //console.log(unit.toLowerCase());
    
    if(measureUnit.indexOf(unit.toLowerCase())==-1) return "invalid unit";
    result = unit.toLowerCase();
    
    //console.log(result);
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    var initialUnit = initUnit.toLowerCase();
    
    switch(initialUnit){
      case 'mi' : result = 'km' ; break;
      case 'km' : result = 'mi'; break;
      case 'gal' : result = 'l'; break;
      case 'l' : result = 'gal'; break;
      case 'lbs' : result = 'kg'; break;
      case 'kg' : result = 'lbs'; break;
      default : result = "invalid unit"; break;
    }
    //console.log(result);
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    var initialUnit = unit.toLowerCase();
    //console.log(initialUnit);
    switch(initialUnit){
      case 'mi' : result = 'miles' ; break;
      case 'km' : result = 'kilometers'; break;
      case 'gal' : result = 'gallons'; break;
      case 'l' : result = 'liters'; break;
      case 'lbs' : result = 'pounds'; break;
      case 'kg' : result = 'kilograms'; break;
      default : result = "invalid unit"; break;
    }
    //console.log(result);
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    switch(initUnit){
      case 'gal' : result = initNum*galToL; break;
      case 'l' : result = initNum/galToL; break;
      case 'lbs' : result = initNum*lbsToKg; break;
      case 'kg' : result = initNum/lbsToKg; break;
      case 'mi' : result = initNum*miToKm; break;
      case 'km' : result = initNum/miToKm; break;
      default : result = 'Error'; break;
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    if (initNum == 'invalid number' & initUnit == 'invalid unit') result = initNum + " and unit";
    else if (initNum == 'invalid number') result = initNum;
    else if (initUnit == 'invalid unit') result = initUnit;
    else result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit)
    
    //console.log(result);
    return result;
  };
  
}

module.exports = ConvertHandler;
