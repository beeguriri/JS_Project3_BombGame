
//폭탄이 있는 위치를 나타내는 배열
//DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
let num = [0,0,0,0,0,0,0,0,1];

//박스를 선택한 순서를 기록하는 배열
let selNum = [];

//박스를 선택한 개수를 기록하는 변수 (8개 = 성공)
let cnt = 0 ;

//폭탄이 섞였는지 체크하는 flag변수 (폭탄을 섞으면 true -> 폭탄섞기 버튼 눌러지면 안됨)
let shuffleFlag = false;

//메세지 표시 함수
const showMsg = (m) => {
    document.querySelector("#msg").innerHTML = m;
}

//보드 내용 지우기 함수
const boardInit = () => {
    const board = document.querySelectorAll(".boardBox");
    for(let item of board) {
        item.innerHTML = '';
    }

    //횟수, 기록배열 초기화!!! 꼭 해야함!!!
    cnt = 0;
    selNum.length = 0;
    console.log(board);
}

//보드 전체 하트로 만들기 함수
const showAll = () => {

    /* 배열값이 1인 박스 찾아서 바꿔주기
    let idx = num.indexOf(1) + 1; //배열인덱스를 찾았으니 박스 번호는 +1 해줘야함
    console.log("last: " + idx);

    document.querySelector("#box"+idx).innerHTML = `<img src = "./images/hart.png" />`
    */

    //배열값 상관없이 모두 바꿔주기

    const board = document.querySelectorAll(".boardBox");

    for(let item of board) {
        item.innerHTML=`<img src = "./images/hart.png" />`;
    }
}


//보드 숫자 누른 후 보여주기 함수 (show)
const show = (n) => {

    //폭탄섞기 버튼 안누른 상태에서 보드판을 누르면 메세지출력 후
    //(버튼 안눌러도) 폭탄섞기 함수 호출 
    if (!shuffleFlag) {
        showMsg('게임 종료. 다시하세요.');
        return;   
    }

    //숫자를 누르면 value값(n)이 생김 
    //value값의 인덱스가 0이면 하트 그림
    //value값의 인덱스가 1이면 폭탄 그림
    console.log(n);
    console.log(num[n-1]);      //배열 인덱스는 0부터 시작하므로 -1해줌

    //이미 선택된 칸을 또 선택했을때 (배열에 이미 값이 있을때) 중복처리하기 위하여!
    if(selNum.indexOf(n) != -1) return;

    cnt++ ;                     //보드 누른 횟수 cnt = selNum.length
    selNum.push(n);             //눌러진 정보 저장
    console.log(selNum);

    let img ;

    if(num[n-1]==0) img = 'hart' ;
    else {
        img = 'boom' ;
        shuffleFlag = false ; //폭탄이 나오면 더이상 안눌러지게
        showMsg('게임 실패!!!');
    }

    document.querySelector("#box"+n).innerHTML = `<img src = "./images/${img}.png" />`

    if(cnt ==8) {
        showAll();  //배열에서 1이 어디있는지 알면
        shuffleFlag = false ; //성공하면 더이상 안눌러지게
        showMsg('게임 성공!!!');
        return;
    }
}


//폭탄 섞기 함수 (boxShuffle)
const boxShuffle = () => {

    if(shuffleFlag) {
        showMsg('폭탄을 이미 섞었습니다. 게임을 진행해 주세요.');
        return;   //함수를 빠져나올때는 return
    }

    num.sort(() => Math.random() - 0.5)
    shuffleFlag = true;
    //폭탄섞기 버튼을 누르면 보드판 지우기
    boardInit();
    console.log(num);
}

/* DOM이 로드된 후에 클릭이벤트 연결*/
document.addEventListener("DOMContentLoaded", ()=>{
   
});