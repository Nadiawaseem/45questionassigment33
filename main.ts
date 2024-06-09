   let number : number[] = [1,2,3,4,5,6,7,8,9,];

   for (let i =0; i < number.length; i ++) {

    const numbers = number [i];
    let ordinalEnding :string;

    if (numbers === 1){
        let ordinalEnding = "st"
    }else if (numbers === 2){
        ordinalEnding = "nd";

    }else if (numbers === 3){
        ordinalEnding = "rd";

    }else{
        ordinalEnding = "th";
    }
    console.log('${numbers}${ordinalEnding}');
   }