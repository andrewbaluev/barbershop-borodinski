new Swiper('.swiper-container', {
   slidesPerView: 1,
   spaceBetween: 20,
   loop: true,
   effect: 'slide',
   navigation: {
      nextEl: '.btn__gallery-next',
      prevEl: '.btn__gallery-back',
   },
});


new Swiper('.item-slider', {
   spaceBetween: 20,
   loop: true,
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
   mousewheel: {
      eventsTarget: '.item-slider',
      forceToAxis: true
   },
   thumbs: {
     swiper: {
         el: '.item-mini-slider',
         slidesPerView: 5,
         spaceBetween: 10
      }
   },
 });









// Библиотека создает функцию closest. Используя её мы можем искать элемент, который находится выше по дереву и класс которого совпадает с тем который мы ищем.
// В нашем случае мы должны найти родителя с классом .modal и не важно является ли он прямым предком или между них есть еще какие-то элементы.

!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


/* В начале, повесим на document событие DOMContentLoaded. Это событие сработает когда страница будет загружена. */

document.addEventListener('DOMContentLoaded', function() {

   /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay */
   const modalButtons  = document.querySelectorAll('.open-modal'),
        overlay        = document.querySelector('.overlay'),
        closeButtons   = document.querySelectorAll('.modal-close');


      //  console.log(modalButtons);

   /* Перебираем массив кнопок */
   modalButtons.forEach(function(item){

      /* Назначаем каждой кнопке обработчик клика */
      item.addEventListener('click', function(e) {

         /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку. Нужно подстраховаться. */
         e.preventDefault();

         /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal и будем искать модальное окно с таким же атрибутом. */
         const modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

         /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
         modalElem.classList.add('active');
         overlay.classList.add('active');
      }); // end click

   }); // end foreach


   closeButtons.forEach(function(item) {

      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal');

         parentModal.classList.remove('active');
         overlay.classList.remove('active');
      });

    }); // end foreach

    document.body.addEventListener('keydown', function(evt) {
      // evt.preventDefault();

    // Hide modal window Escape press

      if(evt.key == 'Escape') {
          document.querySelector('.modal.active').classList.remove('active');
          document.querySelector('.overlay').classList.remove('active');
      }
    }, false);

    // Hide modal window overlay press

    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });

}); // end ready
