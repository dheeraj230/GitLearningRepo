//console.log("Hi! dheeraj");

// function takeOrder(a,b){
//     return a*10;
// }

// //single parameter
// function isPlacedOrder(total){
//     if(total>0){
//         return true;
//     }
//     return false;
// }


// //multiple parameters and returns
// function canDrive(orderAmmount,ammountpaid){
//     if(orderAmmount==ammountpaid){
//         return true;
//     }
//     return "Pay your bill you filthy human!";
// }

// //no parameters and no return types
// function greetingMessage(){
//     console.log("welcome to code MacD well which is weired!");
// }

// greetingMessage();
// console.log(takeOrder(4));
// console.log(isPlacedOrder(takeOrder(4)));
// console.log(canDrive(40,40));

// scopes
{
function canDriveCar(age) {
    if(age >=18){
        var str ="wow you can drive!";
        console.log(age+ "is good!"+str);
    }else{
        str="yay";
        //var str-->block scope
        // a,b,str -->global variable for
        //no declaration and you straight defination thus it had to create a global scope
        console.log(age+" is good" +str);
    }

    console.log("Well i did't expect that"+str)
    //yay
    // you want to use ur varibale declare,define use and well 
}

//canDriveCar(18);
//canDriveCar(12);
}

//value and type of
{
    var a="str";
    var b=1;
    var c=true;
    var d=null;
    var e=undefined;

    console.log(typeof(a));
    console.log(typeof(b));
    console.log(typeof(c));
    console.log(typeof(d));
    console.log(typeof(e));

    console.log(d==e);
    console.log(d===e);
    console.log(d== null);
    console.log(e== undefined);

    var obj1={
        attr1 :1,
        attr2 :"two",
        attr3 :false
    }

    obj1["anotherAttribute"]='yay';//''and " " is same in js
    console.log(obj1);

    var array=[1,"two",true,obj1];

    console.log(typeof(array)); //obj

    console.log(array);

    array[3] ["attr1"] //logically looks as 2D array

    //use [] for arrays and ,for objects

}

//standards functions of strings,arrays and numbers
console.log("I'm here");
 
{
    var starwars =['Episode 4:A new Hope',
        'Episode 5:The Empire Strikes back',
         'Episode 6:Return of the jodi',
         'Episode 1:The Phantom Menace',
         'Episode 2:Attack of the clones',
         'Episode 3:Revange of the Sith',
         'Episode 7:The Force Awakens'];

        //  console.log(starwars.indexOf("Episode 4:A new Hope"));
        //  console.log(starwars.lastIndexOf("Episode 4:A new Hope"));
        //  console.log(starwars.length);

        //  //slice and splice
        // // section of array without removing the content
        //  //splice delete the content
        //  console.log(starwars.slice(0,2));
        //  console.log(starwars);
        //  //console.log(starwars.splice(0,1));
        //  var newStarwars=starwars.splice(0,1);
        //  //splice gives a section of removed array
        //  console.log(starwars.indexOf('Episode 4:A new Hope'));

               
}

//function and scopes
{
    function sum(x,y){
        return x+y;
    } 

    function nestedFunc1(a,b){
        console.log(a);
        console.log(z); //expected here?

        {
            var z=5;
            console.log(a+b);
        }
    }

    // sum(2,3);
    // nestedFunc1(2,3);

    function func1(){
        console.log("I'm func 1");
        return function func2(){
            console.log("I'm func2");
        }
    }
    // console.log(typeof(func1));
    // func1()
    // // 
    // console.log(typeof(func1(())));
    // //var fun =func1;

    //calculate tax

    // function calculateTax(a,b){
    //     return function calculateNum(b){
    //         return a*b;
    //     }
    // }
    // var x =calculateTax(18);
    // console.log(x(5));
    // console.log(x(6));
    // console.log(x(7));
    // //console.log(x(6));
    // var y= calculateTax(19);
    // console.log(y(5));
    // console.log(y(6));
    // console.log(y(7));

    //ATM

    function calculateTax(){
        return function calculateNum(a,b){
            return a*b;
        }
    }

    // var x =calculateTax();
    // console.log(x(3,5));
    // console.log(x(18,6));
    // console.log(x(18,7));
    // //console.log(x(6));
    // var y= calculateTax();
    // console.log(y(18,5));
    // console.log(y(18,6));
    // console.log(y(18,7));

    //closure
    function calculateTax(a){
        return function calculateNum(b){
            return a*b;
        }
    }
    //even after the parent scope is over the child function will be able to acess them
    var a=calculateTax(12);
    console.log(a(5));//60

    function randomArrayAccess(){
        var someRandomArray =[1,2,3,4,5,6];

        return function elementatX(x){
            console.log(someRandomArray[x]);
        }
    }

}