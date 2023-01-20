/* 문자열 순회 */
let s = "토마토123"
let st = ""
/* 첫번째 글자부터 가지고 옴
for(let c of s){
    console.log(c);
}*/



/* 실습 : 회문인지 판별 */

/*첫번째방법*/
for(let i = s.length - 1; i>=0; i--){
    st = st + s[i];
}
    console.log(st);

if(s==st) console.log("회문")
else console.log("비회문");

/*두번째방법*/
st = s.split("")                 //글자 배열로 만들기
console.log(st)

st = s.split("").join()         //글자 배열을 붙이기
console.log(st)

st = s.split("").reverse()    //글자 배열을 반대 배열로
console.log(st)

if(s==st) console.log("회문")
else console.log("비회문");
 
/* 실습 : 문자열에 포함된 숫자의 합구하기*/

let sum = 0;
st = s.split("");
for(let n of st) {
    //inNaN() : 문자열 중에서 숫자이면 false => !를 붙여줘야함
    //parseInt() : 숫자문자를 숫자(int)로 바꿔줌!
    if(!isNaN(n))   sum = sum + parseInt(n);
}

console.log(sum); 

 
/* 여러줄 문자열 저장 */
s = `Ecma International의 프로토타입 기반의 프로그래밍 언어로, 스크립트 언어에 해당된다.
특수한 목적이 아닌 이상 모든 웹 브라우저에 인터프리터가 내장되어 있다. 
오늘날 HTML, CSS와 함께 웹을 구성하는 요소 중 하나다.
HTML이 웹 페이지의 기본 구조를 담당하고, CSS가 디자인을 담당한다면 
JavaScript는 클라이언트 단에서 웹 페이지가 동작하는 것을 담당한다.
웹 페이지를 자동차에 비유하자면, HTML은 자동차의 뼈대, CSS는 자동차의 외관, 
JavaScript는 자동차의 동력이라고 볼 수 있다.`

 
/*실습 : 위의 문자열에서 HTML은 몇번 사용되었는지 확인*/
 

/* 문자열 슬라이싱*/
 
