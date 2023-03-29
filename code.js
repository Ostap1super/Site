let index = 0;
  let index_2 = 0;
let enter_1 = Number(prompt("Enter the numbers for field(Range from 0 to 10)"))
   let countOfStayed_1_Ships = enter_1;
 let countOfStayed_2_Ships = enter_1;

let fieldForFirstPlayer = []
 let fieldForSecondPlayer  = []

   let countForFirstPlayer = 0
  let countSecondPlayer = 0

    let failedForFirstPlayer = 0;
  let failedForSecondPlayer = 0;

// Кількість полів:
 if(enter_1 > 10) {
  console.log("Fail range from 0 to 10 ")
 }
 else{

 // Провірка на діапазон від 0 до 100 і додавання до елементів для масиву №1:
  for(let i = 0;i < enter_1;i++) {
    fieldForFirstPlayer.push(Number(prompt("Fill the first field")));
     for(let i = 0;i < fieldForFirstPlayer.length;i++) {
       if(fieldForFirstPlayer[i] >= 0 && fieldForFirstPlayer[i] < 101) {

       }
       else {
        console.log(`${fieldForFirstPlayer[i]},- Incorrect value,enter range from 0 to 100`)
        fieldForFirstPlayer = []
        console.log("Array was cleaned, please reload game");
        countForFirstPlayer = enter_1;
      
       }
     }
    
  }
  // Провірка на діапазон від 0 до 100 і додавання до елементів для масиву №2:
      for(let i = 0;i < enter_1;i++) {
     fieldForSecondPlayer.push(Number(prompt("Fill the second field")));
      // for(let i = 0;i < fieldForSecondPlayer.length;i++) {
      //   if(fieldForSecondPlayer[i] >= 0 && fieldForSecondPlayer[i] < 101) {

      //   }
      //   else{
      //     console.log(`${fieldForSecondPlayer[i]},- Incorrect value,enter range from 0 to 100`)
      //     fieldForSecondPlayer = [];
      //     console.log("Array was cleaned, please reload game");
      //   countForSecondPlayer = enter_1;
      //   }
      // }
    }
console.log(`Elements of first array:${fieldForFirstPlayer},  Elements of second array:${fieldForSecondPlayer}`)


 while(countForFirstPlayer < enter_1 && countSecondPlayer < enter_1){
      
 // Ігрок №1
 let hitForTheFirstPlayer = Number(prompt("First player:hit second player"))
     let result = foundhit(hitForTheFirstPlayer)
 function foundhit(a) {
 	for(let i = 0;i < fieldForSecondPlayer.length;i++) {
 		if(a == fieldForSecondPlayer[i]) {
 			return a;
 		}
 	}
 }


if(hitForTheFirstPlayer == result) {
	countForFirstPlayer++;
  
   function deleteFromArray(a) {
  for(let i = 0;i < fieldForSecondPlayer.length;i++) {
       if (a == fieldForSecondPlayer[i]) {
        index = i;
        return a;
       }
   }
  }
  deleteFromArray(hitForTheFirstPlayer)

  fieldForSecondPlayer.splice(index,1);
  console.log(fieldForSecondPlayer)

	console.log(`Hit in ${hitForTheFirstPlayer}, you have to hit ${--countOfStayed_1_Ships} more --- First player`)
	if(countForFirstPlayer == enter_1) {
		alert("Won first player")

		break;
	}
 }

else {
	console.log(`First player:not hit number ship ${hitForTheFirstPlayer}`)
	failedForFirstPlayer++;
}



  // Ігрок #2
 let hitForTheSecondPlayer = Number(prompt("Second player:hit first player"))
    let result_2 = foundhit_2(hitForTheSecondPlayer)
 function foundhit_2(b) {
 	for(let i = 0;i < fieldForFirstPlayer.length;i++) {
 		if(b == fieldForFirstPlayer[i]) {
 			return b;
 		}
 	}
 }
 if(hitForTheSecondPlayer == result_2) {
 	countSecondPlayer++;

function deleteFromArray2(a) {
       for(let i = 0;i < fieldForFirstPlayer.length;i++) {
        if(a == fieldForFirstPlayer[i])
          index_2 = i
          return a;
       }
}
 deleteFromArray2(hitForTheSecondPlayer)
  fieldForFirstPlayer.splice(index_2,1)
  console.log(fieldForFirstPlayer);

 	console.log(`Hit in ${hitForTheSecondPlayer}, you have to hit ${--countOfStayed_2_Ships} more --- Second player`)
 	if(countSecondPlayer == enter_1) {
 		alert("Won second player")
		break;
	}
 }
 else{
 	console.log(`Second player:not hit number ship ${hitForTheSecondPlayer}`)
 	failedForSecondPlayer++;
  }

 }

}
     console.log(`${failedForFirstPlayer} --- Quantity of fail shots for first player `)
  
    console.log(`${failedForSecondPlayer } --- Quantity of fail shots for second player `)

   console.log(`${countForFirstPlayer} --- Quantity of accurate shots for first player `)

  console.log(`${countSecondPlayer} --- Quantity of accurate shots for second player `)

 let allShots = failedForSecondPlayer + failedForFirstPlayer  + countSecondPlayer + countForFirstPlayer;

console.log(`${allShots} --- Quantity of all shots`)
