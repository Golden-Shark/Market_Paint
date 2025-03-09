"use strict";
window.addEventListener("DOMContentLoaded", () => {});

const hero_content = document.getElementById('hero-content');
const form_content = document.querySelector('.form-content');
const giveImg = document.getElementById('give-img');

window.addEventListener('resize', () => {
    if (window.innerWidth >= window.innerHeight || window.innerWidth >= 1000) {
        hero_content.innerHTML = '<h3>«Маркет красок»: Экспертиза Андрея Симанчука — ваш ключ к безупречному ремонту</h3><button>Связаться со мной</button>';
        form_content.innerHTML = '<h2>Оставьте заявку и я обязательно свяжусь с вами</h2><div class="info-desktop"><h4>Адрес шоу-рума: <span>Москва, Хавская ул., дом 24</span></h4><h4>Запись через форму на сайте или по телефону: <span>+7 (ХХХ) XXX–XX–XX</span></h4><p>P.S. Даже если уже всё купили — проверьте чек-лист у меня. Это бесплатно, а сэкономить можете сотни тысяч.</p></div>';
        giveImg.src = 'img/give-you-desktop.png';
    } else {
        hero_content.innerHTML = '<h3>«Маркет красок»: Экспертиза Андрея Симанчука — ваш ключ к безупречному ремонту</h3>';
        form_content.innerHTML = '<h2>Оставьте заявку и я обязательно свяжусь с вами</h2>';
        giveImg.src = 'img/give-you.png';
    }
    
})

if (window.innerWidth >= window.innerHeight || window.innerWidth >= 1000) {
    hero_content.innerHTML = '<h3>«Маркет красок»: Экспертиза Андрея Симанчука — ваш ключ к безупречному ремонту</h3><button>Связаться со мной</button>';
    form_content.innerHTML = '<h2>Оставьте заявку и я обязательно свяжусь с вами</h2><div class="info-desktop"><h4>Адрес шоу-рума: <span>Москва, Хавская ул., дом 24</span></h4><h4>Запись через форму на сайте или по телефону: <span>+7 (ХХХ) XXX–XX–XX</span></h4><p>P.S. Даже если уже всё купили — проверьте чек-лист у меня. Это бесплатно, а сэкономить можете сотни тысяч.</p></div>';
    giveImg.src = 'img/give-you-desktop.png';
    
} else {
    hero_content.innerHTML = '<h3>«Маркет красок»: Экспертиза Андрея Симанчука — ваш ключ к безупречному ремонту</h3>';
    form_content.innerHTML = '<h2>Оставьте заявку и я обязательно свяжусь с вами</h2>';
    giveImg.src = 'img/give-you.png';
}