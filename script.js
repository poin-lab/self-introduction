let count = 0;

function increaseCounter() {
    if (count>=10){
        alert("10번이나 누르셨네요!!! 리셋 눌러주세요!");
        return;
    }
    else{
        count++;
        document.getElementById('count').textContent = count;
    }  
}

function resetCounter() {
    count = 0;
    document.getElementById('count').textContent = count;
    
}

function nomean() {
    alert("아무 효과 없는 버튼입니다!!! 알림만 나와요!!!");
   
}
