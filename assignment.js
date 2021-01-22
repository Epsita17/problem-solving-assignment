/** "kilometerToMeter"
Know that 1 kilometer is equal to 1000 meter.
So to convert, we can use the formula;
meter = kilometer*1000;
We calculte on 5 kilometer;
var kilometer = 5; */

function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}
var totalMeter = kilometerToMeter(5);
console.log(totalMeter);

/** "budgetCalculator" 
Will purchase 6 watches, 3 phones and 2 laptops; calculation/inputs below */  

function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var total = watchPrice + phonePrice + laptopPrice;
  
    return total;
 }
  var total = budgetCalculator( 6, 3, 2);
  console.log(total);

/** "hotelCost"
    We stayed "Hotel Programming Hero" at California total 32 days; 
    var stay = 32; */    

    function hotelCost(stay) {
        var cost = 0;
    
        if(stay <=10){
            cost = stay * 100;
        
        }
        else if(stay <=20){
         var firstPart = 10 * 100;
         var remaining = stay - 10;
         var secondPart = remaining * 80
         cost = firstPart + secondPart ;
        }
        else {
            var firstPart = 10 * 100    /**Per night 100 Taka for first 10days*/
            var secondPart = 10 * 80    /**Per night  80 Taka for second 10days */
            var remaining = stay-20;    /**Per night  50 Taka for remaining days*/
            var thirdPart = remaining * 50;
            totalCost = firstPart + secondPart + thirdPart ;
        }
        return totalCost;
    }
    
    var cost = hotelCost(32);
    console.log(cost);  

/** "megaFriend" */
// var longestName = ['azaan','junayna','epsita','ashraful']

function megaFriend(name) {
    var longestWord = "";
    for ( var i = 0; i < name.length; i++) {
      if (longestWord.length < name[i].length) {
      longestWord = name[i];
      }
    }
    return longestWord;
  }
  var longestName = (megaFriend(['azaan','junayna','epsita','ashraful']));
  console.log (longestName);    
