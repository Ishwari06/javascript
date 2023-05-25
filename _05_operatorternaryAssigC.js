function maleMarriageEligibility(gender,age,boyName){
    

var result=(gender=="male" && age>=21) ? "You are elligible" : "you are not elligible";
console.log("Billgates",result,"for marriage");}

var returnVal= maleMarriageEligibility("male",25,"Billgates");{
    console.log(`${returnVal}`);

    console.log("");}

    var returnVal= maleMarriageEligibility("male",17,"Stew Jobs");{
        console.log(`${returnVal}`);
    
console.log("");    
    }

    var femaleMarriageEligibility = function(gender,age,girlName){
        var result = (gender=="female", age>=18) ? `Hey ${girlName} you are eligible for marriage`:` ${girlName}you are not eligible
         for marriage`;
        return result;
    }
    var returnValue = maleMarriageEligibility("Female",16,"Jenifer");
    console.log(`${returnValue}`);
    
    var returnValue = maleMarriageEligibility("Female",27,"Malinda Gates");
    console.log(`${returnValue}`);