let secret_number = Math.floor(Math.random() * 21);
let isGameOver = false;
let score=10;
let show_score=document.getElementById('score_current');
console.log(secret_number);

const checkNumber=()=> {
    const user_choose = parseInt(document.querySelector(".check").value);
    if(user_choose>20 || user_choose <0){
        console.log("out of domain");
        alert('Vui lòng chọn lại vì giá trị bạn chọn nằm ngoài vùng')
        
    }
    else if (user_choose > secret_number ) {
        console.log("Quá cao");
        score=score-1;
        show_score.innerHTML=score;
        console.log(score);// socre thoi diem hien tai
        document.querySelector(".incorret").textContent="CAO HƠN ĐÁP ÁN !!!!";
        if(score==0){
            alert('số điểm của bạn là : '+score)
            document.getElementById("tryagain").style.display='block';
            document.querySelector("#chooose").style.display='none'
            
        }
    } else if (user_choose < secret_number ) {
        console.log("Quá thấp");    
        score=score-1;
        show_score.innerHTML=score;
        console.log(score);// socre thoi diem hien tai
        document.querySelector(".incorret").textContent="THẤP HƠN ĐÁP ÁN !!!!";
        
        if(score==0){
            alert('số điểm của bạn là : '+score)
            document.querySelector("#chooose").style.display='none'
            document.getElementById("tryagain").style.display='block';
            
        }
    } else if(user_choose === secret_number){
        console.log("Bạn đã chọn đúng");
        alert('số điểm của bạn là : '+score)
        document.querySelector("#chooose").style.display='none'
        document.querySelector(".incorret").textContent="CHỌN ĐÚNG !!!!";
        document.getElementById("tryagain").style.display='block';
       
    }

}
const restart=()=>{
    show_score.textContent=10;
    score=10;
    document.querySelector("#chooose").style.display='inline'

    document.getElementById("tryagain").style.display='none';
    secret_number = Math.floor(Math.random() * 21);
    document.querySelector(".incorret").textContent="CHỌN 1 SỐ TỪ 0 ĐẾN 20";
    console.log(secret_number);
    document.querySelector(".check").value=0;
}
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        checkNumber(); 
    }
}



