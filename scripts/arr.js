/* 배열 선언 */
let arr = [] ;                  //추천
let arr2 = new Array();         //생성자로 객체 생성 -> 잘안씀

/* 배열 추가 삭제 : 뒤에서 */
arr.push('🍕');            //이모지 : 윈도우+.
arr.push('🍔');
arr.push('🍟');
console.log(arr);           //결과 : (3) ['🍕','🍔','🍟']

arr.pop();
console.log(arr);           //결과 : (2) ['🍕','🍔']
 
/* 배열 추가 삭제 : 앞에서 */
arr.unshift('😀');          //앞에서부터 추가
arr.unshift('😛');          //제일 마지막에 추가된것이 제일 앞에 있음
console.log(arr);           //결과 : (4) ['😛','😀','🍕','🍔']

arr.shift();                //앞에서부터 삭제
console.log(arr);           //결과 : (3) ['😀','🍕','🍔']


/* 배열 순회 1*/
for(let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

/* 배열 순회 2 : 추천 */
for(let i of arr) {
    console.log(i);
}
 
/* 배열의 length 속성*/
console.log(arr.length) ;
arr.length = 1;                 //해당길이 외의 arr의 내용을 지워버림
console.log(arr);               //결과 : ['😀']

//배열 비우기
arr.length = 0;
console.log(arr);

/* 배열을 문자열로 반환*/
arr = ['🍕','🍔','🍗','🍜',] ;      //맨 마지막에 쉼표 찍어주는것을 권장
let s = String(arr);
console.log(s);

/* 문자열 split하면 배열반환 : 많이 씀!!!! */
let sarr = s.split(',');
console.log(sarr);

/* 배열 정렬 */
let num = [1,3,5,2,4];

num.sort();                     // 배열 오름차순 정렬
console.log(num);               //결과 : (5) [1,2,3,4,5]

num.sort((a,b) => {return b-a});  // 배열 내림차순 정렬
console.log(num);                 //결과 : (5) [5,4,3,2,1]

/* 배열 섞기*/
 num.sort(() => Math.random() - 0.5)
 console.log(num);                     //결과 : (5) [마음대로섞임]

/* filter : 주어진 함수의 조건을 만족하는 요소를 모아 새로운 배열로 반환*/
//3보다 큰수 집합 

/* 실습 : 합집합, 교집합, 차집합 */
let setA = [1,2,3,4,5];
let setB = [4,5,6,7,8];

//합집합
let union = [...setA, ...setB]      //배열을 펼침
console.log(union);                 //결과 : (10) [1,2,3,4,5,4,5,6,7,8]

//교집합 : 배열 A와 B가 같은것       
//filter는 '골라서' 새로운 배열을 만듦
let intersection = setA.filter((item)=> setB.includes(item))
console.log(intersection);                    //결과 : (2) [4,5]

//map은 새로운 배열을 만드는데 원래 있던 배열을 '다 가져와서' 변형해서 만듦
let setA2 = setA.map((item)=> item * 2)         //결과 : (5) [2,4,6,8,10]
console.log(setA2);

//차집합 : 배열 A와 B가 다른것
let difference = setA.filter((item) => !setB.includes(item))
console.log(difference);                         //결과 : (3) [1,2,3,]

//합집합 수정 : 차집합 + 배열B
union = [...difference, ...setB];
console.log(union)                              //결과 : (8) [1,2,3,4,5,6,7,8]




