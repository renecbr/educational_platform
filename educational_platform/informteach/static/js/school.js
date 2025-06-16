const radioButtons1 = document.querySelectorAll('input[name="listGroupRadio11"]');
const radioButtons2 = document.querySelectorAll('input[name="listGroupRadio12"]');
const radioButtons3 = document.querySelectorAll('input[name="listGroupRadio13"]');
const radioButtons21 = document.querySelectorAll('input[name="listGroupRadio21"]');
const radioButtons22 = document.querySelectorAll('input[name="listGroupRadio22"]');
const radioButtons23 = document.querySelectorAll('input[name="listGroupRadio23"]');
const radioButtons31 = document.querySelectorAll('input[name="listGroupRadio31"]');
const radioButtons32 = document.querySelectorAll('input[name="listGroupRadio32"]');
const radioButtons33 = document.querySelectorAll('input[name="listGroupRadio33"]');
const radioButtons34 = document.querySelectorAll('input[name="listGroupRadio34"]');
const radioButtons41 = document.querySelectorAll('input[name="listGroupRadio41"]');
const radioButtons42 = document.querySelectorAll('input[name="listGroupRadio42"]');
const radioButtons43 = document.querySelectorAll('input[name="listGroupRadio43"]');
let y = 0;
let yy = 0;
let x = 0;

function Calculator(){
    if (y === 1) {
            y += -1;
        }else if(y === 2){
            y += -2;
        }else if(y === 3){
            y += -3;
        }else if(y === 4){
            y += -4;
        }
    if (yy === 1) {
            yy += -1;
        }
    let xx = x;
    x +=-xx;

}

function Showradio(){

    radioButtons1.forEach(radio => {
        radio.checked = false;
        radio.parentNode.style.backgroundColor = 'transparent';
        radio.disabled = false;
    });
    radioButtons2.forEach(radio => {
        radio.parentNode.style.backgroundColor = 'transparent';
        radio.checked = false;
        radio.disabled = false;
    });
    radioButtons3.forEach(radio => {
        radio.parentNode.style.backgroundColor = 'transparent';
        radio.checked = false;
        radio.disabled = false;
    });

    radioButtons21.forEach(radio => {
        radio.checked = false;
        radio.parentNode.style.backgroundColor = 'transparent';
        radio.disabled = false;
    });
    radioButtons22.forEach(radio => {
        radio.parentNode.style.backgroundColor = 'transparent';
        radio.checked = false;
        radio.disabled = false;
    });
    radioButtons23.forEach(radio => {
        radio.parentNode.style.backgroundColor = 'transparent';
        radio.checked = false;
        radio.disabled = false;
    });

    radioButtons31.forEach(radio => {
        radio.checked = false;
        radio.parentNode.style.backgroundColor = 'transparent';
        radio.disabled = false;
    });
    radioButtons32.forEach(radio => {
        radio.parentNode.style.backgroundColor = 'transparent';
        radio.checked = false;
        radio.disabled = false;
    });
    radioButtons33.forEach(radio => {
        radio.parentNode.style.backgroundColor = 'transparent';
        radio.checked = false;
        radio.disabled = false;
    });
    radioButtons34.forEach(radio => {
        radio.parentNode.style.backgroundColor = 'transparent';
        radio.checked = false;
        radio.disabled = false;
    });

    radioButtons41.forEach(radio => {
        radio.checked = false;
        radio.parentNode.style.backgroundColor = 'transparent';
        radio.disabled = false;
    });
    radioButtons42.forEach(radio => {
        radio.parentNode.style.backgroundColor = 'transparent';
        radio.checked = false;
        radio.disabled = false;
    });
    radioButtons43.forEach(radio => {
        radio.parentNode.style.backgroundColor = 'transparent';
        radio.checked = false;
        radio.disabled = false;
    });

}

function Showresult(y){
    if (y === 4){
            document.getElementById('result1').innerHTML = 'Все ответы верны! Молодец, тест пройден на ОТЛИЧНО!';
            document.getElementById('result2').innerHTML = 'Все ответы верны! Молодец, тест пройден на ОТЛИЧНО!';
            document.getElementById('result3').innerHTML = 'Все ответы верны! Молодец, тест пройден на ОТЛИЧНО!';
            document.getElementById('result4').innerHTML = 'Все ответы верны! Молодец, тест пройден на ОТЛИЧНО!';
            Showsound('Отличный результат! Молодец!');
        }else if(y === 3 && yy === 1 ){
            document.getElementById('result1').innerHTML = 'У вас '+y +' правильных ответа. Молодец, тест пройден хорошо, необходимо еще раз повторить материал!';
            document.getElementById('result2').innerHTML = 'У вас '+y +' правильных ответа. Молодец, тест пройден хорошо, необходимо еще раз повторить материал!';
            document.getElementById('result3').innerHTML = 'У вас '+y +' правильных ответа. Молодец, тест пройден хорошо, необходимо еще раз повторить материал!';
            document.getElementById('result4').innerHTML = 'У вас '+y +' правильных ответа. Молодец, тест пройден хорошо, необходимо еще раз повторить материал!';
            Showsound('Хороший результат. Необходимо еще раз повторить материал.');
        }else if(y === 3){
            document.getElementById('result1').innerHTML = 'Все ответы верны! Молодец, тест пройден на ОТЛИЧНО!';
            document.getElementById('result2').innerHTML = 'Все ответы верны! Молодец, тест пройден на ОТЛИЧНО!';
            document.getElementById('result3').innerHTML = 'Все ответы верны! Молодец, тест пройден на ОТЛИЧНО!';
            document.getElementById('result4').innerHTML = 'Все ответы верны! Молодец, тест пройден на ОТЛИЧНО!';
            Showsound('Отличный результат! Молодец!');
        }else if(y === 2){
            document.getElementById('result1').innerHTML = 'У вас '+y +' правильных ответа. Молодец, тест пройден хорошо, необходимо еще раз повторить материал!';
            document.getElementById('result2').innerHTML = 'У вас '+y +' правильных ответа. Молодец, тест пройден хорошо, необходимо еще раз повторить материал!';
            document.getElementById('result3').innerHTML = 'У вас '+y +' правильных ответа. Молодец, тест пройден хорошо, необходимо еще раз повторить материал!';
            document.getElementById('result4').innerHTML = 'У вас '+y +' правильных ответа. Молодец, тест пройден хорошо, необходимо еще раз повторить материал!';
             Showsound('Хороший результат. Необходимо еще раз повторить материал.');
        }else if(y === 1){
            document.getElementById('result1').innerHTML = 'У вас '+y +' правильный ответ. Будем дальше изучать материал.';
            document.getElementById('result2').innerHTML = 'У вас '+y +' правильный ответ. Будем дальше изучать материал.';
            document.getElementById('result3').innerHTML = 'У вас '+y +' правильный ответ. Будем дальше изучать материал.';
            document.getElementById('result4').innerHTML = 'У вас '+y +' правильный ответ. Будем дальше изучать материал.';
            Showsound('Неплохо. Будем дальше изучать материал.');
        }else{
            document.getElementById('result1').innerHTML = 'У вас '+y +' правильных ответа. Вы наверно новичок. Давайте изучать материал вместе.';
            document.getElementById('result2').innerHTML = 'У вас '+y +' правильных ответа. Вы наверно новичок. Давайте изучать материал вместе.';
            document.getElementById('result3').innerHTML = 'У вас '+y +' правильных ответа. Вы наверно новичок. Давайте изучать материал вместе.';
            document.getElementById('result4').innerHTML = 'У вас '+y +' правильных ответа. Вы наверно новичок. Давайте изучать материал вместе.';
            Showsound('Вы наверно новичок. Давайте изучать материал вместе.');
        }
}

function Showheader1(){
    document.getElementById('h1').style.display = "none";
    document.getElementById('m1').style.display = "none";
    document.getElementById('h2').style.display = 'block';
    document.getElementById('m2').style.display = 'block';
    document.getElementById('m3').style.display = "none";
    document.getElementById('m4').style.display = "none";
    document.getElementById('l1').style.display = "none";
    document.getElementById('l2').style.display = "none";
    document.getElementById('l3').style.display = "none";
    document.getElementById('l4').style.display = "none";
    document.getElementById('t1').style.display = "none";
    document.getElementById('t2').style.display = "none";
    document.getElementById('t3').style.display = "none";
    document.getElementById('t4').style.display = "none";
}

function Showheader2(){
    document.getElementById('h1').style.display = "none";
    document.getElementById('m1').style.display = "none";
    document.getElementById('h2').style.display = 'block';
    document.getElementById('m2').style.display = "none";
    document.getElementById('m3').style.display = 'block';
    document.getElementById('m4').style.display = "none";
    document.getElementById('l1').style.display = "none";
    document.getElementById('l2').style.display = "none";
    document.getElementById('l3').style.display = "none";
    document.getElementById('l4').style.display = "none";
    document.getElementById('t1').style.display = "none";
    document.getElementById('t2').style.display = "none";
    document.getElementById('t3').style.display = "none";
    document.getElementById('t4').style.display = "none";
}

function Showheader3(){
    document.getElementById('h1').style.display = "none";
    document.getElementById('m1').style.display = "none";
    document.getElementById('h2').style.display = 'block';
    document.getElementById('m2').style.display = "none";
    document.getElementById('m3').style.display = "none";
    document.getElementById('m4').style.display = 'block';
    document.getElementById('l1').style.display = "none";
    document.getElementById('l2').style.display = "none";
    document.getElementById('l3').style.display = "none";
    document.getElementById('l4').style.display = "none";
    document.getElementById('t1').style.display = "none";
    document.getElementById('t2').style.display = "none";
    document.getElementById('t3').style.display = "none";
    document.getElementById('t4').style.display = "none";
}

function Showlesson1(){
    document.getElementById('h1').style.display = "none";
    document.getElementById('h2').style.display = 'block';
    document.getElementById('m1').style.display = "none";
    document.getElementById('m2').style.display = "none";
    document.getElementById('m3').style.display = "none";
    document.getElementById('m4').style.display = "none";
    document.getElementById('l1').style.display = 'block';
    document.getElementById('l2').style.display = "none";
    document.getElementById('l3').style.display = "none";
    document.getElementById('l4').style.display = "none";
    document.getElementById('t1').style.display = "none";
    document.getElementById('t2').style.display = "none";
    document.getElementById('t3').style.display = "none";
    document.getElementById('t4').style.display = "none";
    Showradio();
    Calculator();

}

function Showlesson2(){
    document.getElementById('h1').style.display = "none";
    document.getElementById('h2').style.display = 'block';
    document.getElementById('m1').style.display = "none";
    document.getElementById('m2').style.display = "none";
    document.getElementById('m3').style.display = "none";
    document.getElementById('m4').style.display = "none";
    document.getElementById('l1').style.display = "none";
    document.getElementById('l2').style.display = 'block';
    document.getElementById('l3').style.display = "none";
    document.getElementById('l4').style.display = "none";
    document.getElementById('t1').style.display = "none";
    document.getElementById('t2').style.display = "none";
    document.getElementById('t3').style.display = "none";
    document.getElementById('t4').style.display = "none";
    Showradio();
    Calculator();
}

function Showlesson3(){
    document.getElementById('h1').style.display = "none";
    document.getElementById('h2').style.display = 'block';
    document.getElementById('m1').style.display = "none";
    document.getElementById('m2').style.display = "none";
    document.getElementById('m3').style.display = "none";
    document.getElementById('m4').style.display = "none";
    document.getElementById('l1').style.display = "none";
    document.getElementById('l2').style.display = "none";
    document.getElementById('l3').style.display = 'block';
    document.getElementById('l4').style.display = "none";
    document.getElementById('t1').style.display = "none";
    document.getElementById('t2').style.display = "none";
    document.getElementById('t3').style.display = "none";
    document.getElementById('t4').style.display = "none";
    Showradio();
    Calculator();
}

function Showlesson4(){
    document.getElementById('h1').style.display = "none";
    document.getElementById('h2').style.display = 'block';
    document.getElementById('m1').style.display = "none";
    document.getElementById('m2').style.display = "none";
    document.getElementById('m3').style.display = "none";
    document.getElementById('m4').style.display = "none";
    document.getElementById('l1').style.display = "none";
    document.getElementById('l2').style.display = "none";
    document.getElementById('l3').style.display = "none";
    document.getElementById('l4').style.display = 'block';
    document.getElementById('t1').style.display = "none";
    document.getElementById('t2').style.display = "none";
    document.getElementById('t3').style.display = "none";
    document.getElementById('t4').style.display = "none";
    Showradio();
    Calculator();
}

function Showt11(){
    document.getElementById('t11').style.display = 'block';
    document.getElementById('t12').style.display = "none";
    document.getElementById('t13').style.display = "none";
}
function Showt12(){
    document.getElementById('t11').style.display = "none";
    document.getElementById('t12').style.display = 'block';
    document.getElementById('t13').style.display = "none";
}
function Showt13(){
    document.getElementById('t11').style.display = "none";
    document.getElementById('t12').style.display = "none";
    document.getElementById('t13').style.display = 'block';
}
function Showtest1(){
    document.getElementById('h1').style.display = "none";
    document.getElementById('h2').style.display = 'block';
    document.getElementById('m1').style.display = "none";
    document.getElementById('m2').style.display = "none";
    document.getElementById('m3').style.display = "none";
    document.getElementById('m4').style.display = "none";
    document.getElementById('l1').style.display = "none";
    document.getElementById('l2').style.display = "none";
    document.getElementById('l3').style.display = "none";
    document.getElementById('l4').style.display = "none";
    document.getElementById('t1').style.display = 'block';
    document.getElementById('t2').style.display = "none";
    document.getElementById('t3').style.display = "none";
    document.getElementById('t4').style.display = "none";
    document.getElementById('result1').innerHTML = 'Желам удачи в прохождении теста';
    Showt11();
    Showradio();
    Calculator();
}
radioButtons1.forEach(button => {
    button.addEventListener('change', () => {
      radioButtons1.forEach(rb => {
        rb.parentNode.classList.remove('selected');
        rb.parentNode.style.backgroundColor = 'transparent';
        rb.disabled = true;
        if (rb.value === '2') {
        rb.parentNode.style.backgroundColor = 'lightgreen';
        }else {
            rb.parentNode.style.backgroundColor = 'transparent';
        }
      });
      if (button.checked) {
        x +=1;
        if (button.value === '2') {
            button.parentNode.style.backgroundColor = 'lightgreen';
            y += 1;
        }else {
            button.parentNode.style.backgroundColor = 'Salmon';
        }
      }
      if(x===3){
        Showresult(y);
      }
    });
});
radioButtons2.forEach(button => {
    button.addEventListener('change', () => {
      radioButtons2.forEach(rb => {
        rb.parentNode.classList.remove('selected');
        rb.parentNode.style.backgroundColor = 'transparent';
        rb.disabled = true;
        if (rb.value === '3') {
        rb.parentNode.style.backgroundColor = 'lightgreen';
        }else {
            rb.parentNode.style.backgroundColor = 'transparent';
        }
      });
      if (button.checked) {
        x +=1;
        if (button.value === '3') {
            button.parentNode.style.backgroundColor = 'lightgreen';
            y += 1;
        }else {
            button.parentNode.style.backgroundColor = 'Salmon';
        }
      }
      if(x===3){
        Showresult(y);
      }
    });
});
radioButtons3.forEach(button => {
    button.addEventListener('change', () => {
      radioButtons3.forEach(rb => {
        rb.parentNode.classList.remove('selected');
        rb.parentNode.style.backgroundColor = 'transparent';
        rb.disabled = true;
        if (rb.value === '4') {
        rb.parentNode.style.backgroundColor = 'lightgreen';
        }else {
            rb.parentNode.style.backgroundColor = 'transparent';
        }
      });
      if (button.checked) {
        x +=1;
        if (button.value === '4') {
            button.parentNode.style.backgroundColor = 'lightgreen';
            y += 1;
        }else {
            button.parentNode.style.backgroundColor = 'Salmon';
        }
      }
    if(x===3){
        Showresult(y);
      }
    });
});

function Showt21(){
    document.getElementById('t21').style.display = 'block';
    document.getElementById('t22').style.display = "none";
    document.getElementById('t23').style.display = "none";
}
function Showt22(){
    document.getElementById('t21').style.display = "none";
    document.getElementById('t22').style.display = 'block';
    document.getElementById('t23').style.display = "none";
}
function Showt23(){
    document.getElementById('t21').style.display = "none";
    document.getElementById('t22').style.display = "none";
    document.getElementById('t23').style.display = 'block';
}
function Showtest2(){
    document.getElementById('h1').style.display = "none";
    document.getElementById('h2').style.display = 'block';
    document.getElementById('m1').style.display = "none";
    document.getElementById('m2').style.display = "none";
    document.getElementById('m3').style.display = "none";
    document.getElementById('m4').style.display = "none";
    document.getElementById('l1').style.display = "none";
    document.getElementById('l2').style.display = "none";
    document.getElementById('l3').style.display = "none";
    document.getElementById('l4').style.display = "none";
    document.getElementById('t1').style.display = "none";
    document.getElementById('t2').style.display = 'block';
    document.getElementById('t3').style.display = "none";
    document.getElementById('t4').style.display = "none";
    document.getElementById('result2').innerHTML = 'Желам удачи в прохождении теста';
    Showt21();
    Showradio();
    Calculator();

}
radioButtons21.forEach(button => {
    button.addEventListener('change', () => {
      radioButtons21.forEach(rb => {
        rb.parentNode.classList.remove('selected');
        rb.parentNode.style.backgroundColor = 'transparent';
        rb.disabled = true;
        if (rb.value === '1') {
        rb.parentNode.style.backgroundColor = 'lightgreen';
        }else {
            rb.parentNode.style.backgroundColor = 'transparent';
        }
      });
      if (button.checked) {
        x +=1;
        if (button.value === '1') {
            button.parentNode.style.backgroundColor = 'lightgreen';
            y += 1;
        }else {
            button.parentNode.style.backgroundColor = 'Salmon';
        }
      }
      if(x===3){
        Showresult(y);
      }
    });
});
radioButtons22.forEach(button => {
    button.addEventListener('change', () => {
      radioButtons22.forEach(rb => {
        rb.parentNode.classList.remove('selected');
        rb.parentNode.style.backgroundColor = 'transparent';
        rb.disabled = true;
        if (rb.value === '4') {
        rb.parentNode.style.backgroundColor = 'lightgreen';
        }else {
            rb.parentNode.style.backgroundColor = 'transparent';
        }
      });
      if (button.checked) {
        x +=1;
        if (button.value === '4') {
            button.parentNode.style.backgroundColor = 'lightgreen';
            y += 1;
        }else {
            button.parentNode.style.backgroundColor = 'Salmon';
        }
      }
      if(x===3){
        Showresult(y);
      }
    });
});
radioButtons23.forEach(button => {
    button.addEventListener('change', () => {
      radioButtons23.forEach(rb => {
        rb.parentNode.classList.remove('selected');
        rb.parentNode.style.backgroundColor = 'transparent';
        rb.disabled = true;
        if (rb.value === '2') {
        rb.parentNode.style.backgroundColor = 'lightgreen';
        }else {
            rb.parentNode.style.backgroundColor = 'transparent';
        }
      });
      if (button.checked) {
        x +=1;
        if (button.value === '2') {
            button.parentNode.style.backgroundColor = 'lightgreen';
            y += 1;
        }else {
            button.parentNode.style.backgroundColor = 'Salmon';
        }
      }
      if(x===3){
        Showresult(y);
      }
    });
});

function Showt31(){
    document.getElementById('t31').style.display = 'block';
    document.getElementById('t32').style.display = "none";
    document.getElementById('t33').style.display = "none";
    document.getElementById('t34').style.display = "none";
}
function Showt32(){
    document.getElementById('t31').style.display = "none";
    document.getElementById('t32').style.display = 'block';
    document.getElementById('t33').style.display = "none";
    document.getElementById('t34').style.display = "none";
}
function Showt33(){
    document.getElementById('t31').style.display = "none";
    document.getElementById('t32').style.display = "none";
    document.getElementById('t33').style.display = 'block';
    document.getElementById('t34').style.display = "none";
}
function Showt34(){
    document.getElementById('t31').style.display = "none";
    document.getElementById('t32').style.display = "none";
    document.getElementById('t33').style.display = "none";
    document.getElementById('t34').style.display = 'block';
}
function Showtest3(){
    document.getElementById('h1').style.display = "none";
    document.getElementById('h2').style.display = 'block';
    document.getElementById('m1').style.display = "none";
    document.getElementById('m2').style.display = "none";
    document.getElementById('m3').style.display = "none";
    document.getElementById('m4').style.display = "none";
    document.getElementById('l1').style.display = "none";
    document.getElementById('l2').style.display = "none";
    document.getElementById('l3').style.display = "none";
    document.getElementById('l4').style.display = "none";
    document.getElementById('t1').style.display = "none";
    document.getElementById('t2').style.display = "none";
    document.getElementById('t3').style.display = 'block';
    document.getElementById('t4').style.display = "none";
    document.getElementById('result3').innerHTML = 'Желам удачи в прохождении теста';
    Showradio();
    Calculator();
    Showt31();
    yy +=1;
}
radioButtons31.forEach(button => {
    button.addEventListener('change', () => {
      radioButtons31.forEach(rb => {
        rb.parentNode.classList.remove('selected');
        rb.parentNode.style.backgroundColor = 'transparent';
        rb.disabled = true;
        if (rb.value === '3') {
        rb.parentNode.style.backgroundColor = 'lightgreen';
        }else {
            rb.parentNode.style.backgroundColor = 'transparent';
        }
      });
      if (button.checked) {
        x +=1;
        if (button.value === '3') {
            button.parentNode.style.backgroundColor = 'lightgreen';
            y += 1;
        }else {
            button.parentNode.style.backgroundColor = 'Salmon';
        }
      }
      if(x===4){
        Showresult(y);
      }
    });
});
radioButtons32.forEach(button => {
    button.addEventListener('change', () => {
      radioButtons32.forEach(rb => {
        rb.parentNode.classList.remove('selected');
        rb.parentNode.style.backgroundColor = 'transparent';
        rb.disabled = true;
        if (rb.value === '2') {
        rb.parentNode.style.backgroundColor = 'lightgreen';
        }else {
            rb.parentNode.style.backgroundColor = 'transparent';
        }
      });
      if (button.checked) {
        x +=1;
        if (button.value === '2') {
            button.parentNode.style.backgroundColor = 'lightgreen';
            y += 1;
        }else {
            button.parentNode.style.backgroundColor = 'Salmon';
        }
      }
      if(x===4){
        Showresult(y);
      }
    });
});
radioButtons33.forEach(button => {
    button.addEventListener('change', () => {
      radioButtons33.forEach(rb => {
        rb.parentNode.classList.remove('selected');
        rb.parentNode.style.backgroundColor = 'transparent';
        rb.disabled = true;
        if (rb.value === '1') {
        rb.parentNode.style.backgroundColor = 'lightgreen';
        }else {
            rb.parentNode.style.backgroundColor = 'transparent';
        }
      });
      if (button.checked) {
        x +=1;
        if (button.value === '1') {
            button.parentNode.style.backgroundColor = 'lightgreen';
            y += 1;
        }else {
            button.parentNode.style.backgroundColor = 'Salmon';
        }
      }
      if(x===4){
        Showresult(y);
      }
    });
});
radioButtons34.forEach(button => {
    button.addEventListener('change', () => {
      radioButtons34.forEach(rb => {
        rb.parentNode.classList.remove('selected');
        rb.parentNode.style.backgroundColor = 'transparent';
        rb.disabled = true;
        if (rb.value === '4') {
        rb.parentNode.style.backgroundColor = 'lightgreen';
        }else {
            rb.parentNode.style.backgroundColor = 'transparent';
        }
      });
      if (button.checked) {
        x +=1;
        if (button.value === '4') {
            button.parentNode.style.backgroundColor = 'lightgreen';
            y += 1;
        }else {
            button.parentNode.style.backgroundColor = 'Salmon';
        }
      }
      if(x===4){
        Showresult(y);
      }
    });
});

function Showt41(){
    document.getElementById('t41').style.display = 'block';
    document.getElementById('t42').style.display = "none";
    document.getElementById('t43').style.display = "none";
}
function Showt42(){
    document.getElementById('t41').style.display = "none";
    document.getElementById('t42').style.display = 'block';
    document.getElementById('t43').style.display = "none";
}
function Showt43(){
    document.getElementById('t41').style.display = "none";
    document.getElementById('t42').style.display = "none";
    document.getElementById('t43').style.display = 'block';
}
function Showtest4(){
    document.getElementById('h1').style.display = "none";
    document.getElementById('h2').style.display = 'block';
    document.getElementById('m1').style.display = "none";
    document.getElementById('m2').style.display = "none";
    document.getElementById('m3').style.display = "none";
    document.getElementById('m4').style.display = "none";
    document.getElementById('l1').style.display = "none";
    document.getElementById('l2').style.display = "none";
    document.getElementById('l3').style.display = "none";
    document.getElementById('l4').style.display = "none";
    document.getElementById('t1').style.display = "none";
    document.getElementById('t2').style.display = "none";
    document.getElementById('t3').style.display = "none";
    document.getElementById('t4').style.display = 'block';
    document.getElementById('result4').innerHTML = 'Желам удачи в прохождении теста';
    Showt41();
    Showradio();
    Calculator();
}
radioButtons41.forEach(button => {
    button.addEventListener('change', () => {
      radioButtons41.forEach(rb => {
        rb.parentNode.classList.remove('selected');
        rb.parentNode.style.backgroundColor = 'transparent';
        rb.disabled = true;
        if (rb.value === '2') {
        rb.parentNode.style.backgroundColor = 'lightgreen';
        }else {
            rb.parentNode.style.backgroundColor = 'transparent';
        }
      });
      if (button.checked) {
        x +=1;
        if (button.value === '2') {
            button.parentNode.style.backgroundColor = 'lightgreen';
            y += 1;
        }else {
            button.parentNode.style.backgroundColor = 'Salmon';
        }
      }
      if(x===3){
        Showresult(y);
      }
    });
});
radioButtons42.forEach(button => {
    button.addEventListener('change', () => {
      radioButtons42.forEach(rb => {
        rb.parentNode.classList.remove('selected');
        rb.parentNode.style.backgroundColor = 'transparent';
        rb.disabled = true;
        if (rb.value === '4') {
        rb.parentNode.style.backgroundColor = 'lightgreen';
        }else {
            rb.parentNode.style.backgroundColor = 'transparent';
        }
      });
      if (button.checked) {
        x +=1;
        if (button.value === '4') {
            button.parentNode.style.backgroundColor = 'lightgreen';
            y += 1;
        }else {
            button.parentNode.style.backgroundColor = 'Salmon';
        }
      }
      if(x===3){
        Showresult(y);
      }
    });
});
radioButtons43.forEach(button => {
    button.addEventListener('change', () => {
      radioButtons43.forEach(rb => {
        rb.parentNode.classList.remove('selected');
        rb.parentNode.style.backgroundColor = 'transparent';
        rb.disabled = true;
        if (rb.value === '1') {
        rb.parentNode.style.backgroundColor = 'lightgreen';
        }else {
            rb.parentNode.style.backgroundColor = 'transparent';
        }
      });
      if (button.checked) {
        x +=1;
        if (button.value === '1') {
            button.parentNode.style.backgroundColor = 'lightgreen';
            y += 1;
        }else {
            button.parentNode.style.backgroundColor = 'Salmon';
        }
      }
      if(x===3){
        Showresult(y);
      }
    });
});

const textEl = document.getElementById('text');
let voices = speechSynthesis.getVoices();

function Showsound(t){
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(t);
  voices = speechSynthesis.getVoices();
  utterance.voice = window.speechSynthesis.getVoices().find(voices => voices.voiceURI === 'Google русский');
  window.speechSynthesis.speak(utterance);
}