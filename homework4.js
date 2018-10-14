//Use While loop to create a function called 'triangleStars' that prints an upside-down triangle to the console of the given height. 
const getStars = function (a) {
  let stars = "";
  while (a > 0) {
    a = a - 1;
    stars = stars + "*"
  };
  return stars;
};
const getSpace = function (a) {
  let space = "";
  while (a > 0) {
    a = a - 1;
    space = space + " "
  };
  return space;
};
const triangleStars = function (height){
  let line = "";
  let spaceNum = height
  while (height > 0){
    line = getSpace (spaceNum - height)+ getStars (height*2-1) ;
    height = height-1
    console.log(line);
    }
  }
 const g = triangleStars(4)
 console.log(g)

//Write a function that takes a two dimensional array and returns a single array with all the values in the child arrays.

const multiToSingle = function (array) {
  let arr = [];
  let a = array.length;
  let b = array[0].length;
  let b0 = array[0];
  let b1 = 0;
  let c = array[1].length;
  let c0 = array[1];
  let c1 = 0;
  let x = 0;
  while (a != 0) {
    while (b != 0) {
      arr[x] = b0[b1];
      b1=b1+1;
      x=x+1;
      b=b-1;
    };
    while (c != 0) {
      arr[x] = c0[c1];
      c1=c1+1;
      x=x+1;
      c=c-1;
    };
    a=a-1;
  };
  console.log(arr);
}
multiToSingle([[1, 2, 3], [4, 5, 6]]);

// Create a function 'findMinMax' that returns the largest number from the given array if the second argument is true.  It returns the smallest number in the given array if the second argument is false.
function findMinMax(arraybol, bol) {
	
	if(bol === true){
		
		let lenOfAr = arraybol.length;
		let a = 0;
		let b = 0;
		
		while(lenOfAr != 0){
			
			lenOfAr--;
			b = arraybol[lenOfAr];
			
			if(a < b) {
			a = b;
			} 
			
		}
		console.log(a);
	}
	
	if(bol === false){
	
		let lenOfAr = arraybol.length;
		let x = 0;
		let y = 0;
		
		while(lenOfAr != 0){
			
			lenOfAr--;
			y = arraybol[lenOfAr];
			if(x === 0){
			
			x = arraybol[lenOfAr];
			
			}
			
			if(x > y) {
			x = y;
			} 
			
		}
		
		console.log(x);
	
	}
	
	
}

findMinMax([4,2,66,-44,8],true)   //should log 66
findMinMax([4,2,66,-44,8],false)   //should log -44



//Create a function 'forEach' that takes an array and a function and then calls the given function once with each value in the given array.

const forEach=function (arr, functionval){
    length = -1;
    while(length != arr.length-1){
        length=length+1;
        functionval(arr[length]);
      }
  }
    
  forEach([4,3,2], function (val){
    console.log(val);
  });
//Create a function 'sum' that takes an array of numbers and returns their sum.
function sum(number) {
	
	let x = 0;
	let lengthh = number.length; 
	
	
	while(lengthh != 0){
    	lengthh = lengthh - 1;
		x = x + number[lengthh]; 
	}
	console.log(x)
}


sum([4,3,2]);
// Write a function 'reverse' that reverses the given string.
function reverse(str){
		  let lengStr = str.length;
		  let x = "";
		  
		  while(lengStr != 0){
			  lengStr = lengStr - 1;
			  x = x + str[lengStr];
			  
		  }
		  console.log(x);
	  }
	  
	  //Create a function called checkerboard using While loop which, given a size argument, will draw an n by n checkerboard on the screen. 
	    function checkerboard(anum){
		  let t = anum;
		  let x1 = 1;
		  let txt = "";
		  let finalt = "";
		  
		  while(anum != 0){
			  
			  x1++;
			  
			  if (x1 % 2 === 0) {
				  while(t != 0){
					  t--;
					  txt = txt + "*";
				  } 
				  finalt = finalt + txt;
			  }
			  
				  else {
					  while(t != 0){
						  t--;
						  txt = txt + "*";
					  }
					  finalt = finalt + " " + txt;
				  }
			  
			  finalt = finalt + "\n";
			  anum = anum - 1;
					  
			  } console.log(finalt);
		  }
	  
	  checkerboard(5);
	  
	  reverse('abcd');
	  // Create a function called checkerboard using While loop which, given a size argument, will draw an n by n checkerboard on the screen.  Example: checkerboard(5)
	  function checkerboard(anum){
		  let t = anum;
		  let x1 = 1;
		  let txt = "";
		  let finalt = "";
		  
		  while(anum != 0){
			  
			  x1++;
			  
			  if (x1 % 2 === 0) {
				  while(t != 0){
					  t--;
					  txt = txt + "*";
				  } 
				  finalt = finalt + txt;
			  }
			  
				  else {
					  while(t != 0){
						  t--;
						  txt = txt + "*";
					  }
					  finalt = finalt + " " + txt;
				  }
			  
			  finalt = finalt + "\n";
			  anum = anum - 1;
					  
			  } console.log(finalt);
		  }
	  
	  checkerboard(5);