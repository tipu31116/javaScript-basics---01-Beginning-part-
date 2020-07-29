const string ='This is movie series ';
//finding are total character
console.log(string.length);
//finding are the single value
console.log(string[0]);
//finding character by index 
console.log(string.charAt(3));
//finding index by character
console.log(string.indexOf('r'));
//upperCase
console.log(string.toUpperCase());
//lowerCase
console.log(string.toLowerCase());
//check whether string is included or not
console.log(string.includes('7'));


//remove space
console.log(string.trimStart().length);
console.log(string.trimEnd().length);


//pulling out string
console.log(string.slice(0,7));
console.log(string.substr(0,7));
console.log(string.substr());


//concat method
console.log(string.concat('!'));
//converting/creating from a array
console.log(string.split());
console.log(string.split(''));
console.log(string.split(' '));


var x = "The character \\ is called backslash.";
console.log(x);


// var str = "Please locate where 'locate' occurs!";
// var pos = str.indexOf("c");
// console.log(pos); 

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
console.log(pos);


var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("John");
console.log(pos);


var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate", 15);
console.log(pos);


var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate", 15);
console.log(pos);


var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
console.log(pos);


//slice
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
console.log(res);


//slice method if nagitive
var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);
console.log(res);


var res = str.slice(7);
console.log(res);

var res = str.slice(-12);
console.log(res)


str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
console.log(n);

str = "Please visit Microsoft and Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
console.log(n);



str = "Please visit Microsoft!";
var n = str.replace("MICROSOFT", "W3Schools");

console.log(n);


var text1 = "Hello";
var text2 = "World";
console.log(text1.concat());


console.log(text1.split());



var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!"); 
console.log(text);


var str = "       Hello World!        ";
console.log(str.trimStart().length); 
console.log(str.trimEnd().length);
console.log(str.trim().length);




var str = "       Hello World!        ";
console.log(str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')); 



if (!String.prototype.trim) {
    String.prototype.trim = function () {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
  }
  var str = "       Hello World!        ";
  console.log(str.trim()); 



  var txt = "a,b,c,d,e";   // String
  txt.split(",");          // Split on commas
  txt.split(" ");          // Split on spaces
  txt.split("|");          // Split on pipe 
  console.log(txt);