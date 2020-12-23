console.log("DHEERAJ");

var num=12.23;
//console.log(num);

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 greater than this value is not safe

var a= 9007199254740991;
console.log(a);
a=a+1;
console.log(a);
console.log(Number.MIN_SAFE_INTEGER);

// the fixed variable in js is alwayas written in caps(only convention not fixed)
console.log(Math.PI);

// ** exponential
// % remainder
console.log(2**4); //finding power
console.log(4**0.5); //finding root
//Math.pow(a,b) also works here
console.log(Math.pow(2,5));

var b=2+3*5;
console.log(b);
//rules precedence           //associativity
                           

//  // *, %                 // right --> left
//  +,-                     // left --> right

var num=1000;// or 1e3
console.log(num);
var d= 1e4;//10000
console.log(d);

//number seperators
var e=10_0000; // it also works
console.log(e);

//mixint strings and numbers(weired)

var numb=12;//it is internally converted into string
var num2="12";
console.log(numb+num2);// in this case number is converted into string

console.log(numb-num2);//in this case string is converted into number

//parse int
// it converts a string into int(number)
var num3="17";
console.log(parseInt(num3));
console.log(parseFloat(num3));
var num4="17.12";
num4=parseFloat(num4);
console.log(num4);

var f="dheeraj12";// if we take number in last od string
f=parseInt(f);
console.log(f);
// output will be NaN (not a number)

//type of operator
console.log(typeof num3);//string

// null and undefined
var num5;
console.log(num5);//undefined

var num6=null;//when u take null urself

//math objects

var num7=12.2;
console.log(Math.round(num7));//12
console.log(Math.floor(num7));//12
console.log(Math.ceil(num7));//13

var randomNumber=Math.floor(Math.random()*100000);
console.log(randomNumber);

//Bigint

var bigNumber=9007199254740991n;
bigNumber=bigNumber+2n;
console.log(bigNumber);








