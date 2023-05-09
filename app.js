let hello = 'Hello World';
alert(hello);

let str1 = 'Hello';
let str2 = 'World!!';
alert(str1 + str2);

let orange = 120;
let apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
 } else if (orange == apple){
  alert('みかんとりんごが同じ値段');
 } else{
  alert('みかんの値段がりんごより高い');
 }

 let max = 100;
 let num = 1;
 let count = 0;
 while(num < max){
     num = num *2;
     count = count+1;
 }

 alert('2を掛け続けて'+max+'を超えるのに必要だった回数は'+count+'回です')

 let i;
 let number = 0;

 for(i = 1;i<11;i++){
     number = number +i;
 }

 alert('1から10まで足し算した結果は'+number+'です');

 alert(1+5)
 alert(59-5)
 alert(58*8)
 alert(10/5)