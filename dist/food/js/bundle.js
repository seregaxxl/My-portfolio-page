/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calc() {
    const calculatingResult = document.querySelector(".calculating__result span");

    var height,weight,age,activity,sex;

    if(localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if(localStorage.getItem('activity')) {
        activity = localStorage.getItem('activity');
     } else {
        activity = 1.375;
         localStorage.setItem('activity', 1.375);
     }

    function initialLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((elem) => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            } else if (elem.getAttribute('data-ratio') === localStorage.getItem('activity')) {
                elem.classList.add(activeClass);
            }
        });
    }

    initialLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');
    initialLocalSettings('#gender div', 'calculating__choose-item_active');


        


    function caloriesCalc() {
        if (!sex || !height || !weight || !age || !activity ) {
            calculatingResult.textContent = '_____';
            return;
        }
        if(sex === 'female') {
            calculatingResult.textContent = Math.floor((447.6 + (9.2 * weight) + (3.1 * height) - (5.7 * age)) * activity);
            return;
        } else {
            calculatingResult.textContent = Math.floor((88.36 + (13.4 * weight ) + (4.8 * height ) - (5.7 * age)) * activity);
            return;
        }
    }
    caloriesCalc();

    function getStaticInformation(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((elem)  => {
            elem.addEventListener('click', (event) => {
                elements.forEach((elem)  => {
                elem.classList.remove('calculating__choose-item_active');
                });
                event.target.classList.add('calculating__choose-item_active');
                if(event.target.getAttribute('data-ratio')) {
                    activity = +event.target.getAttribute('data-ratio');
                    localStorage.setItem('activity', +event.target.getAttribute('data-ratio'));
                } else {
                     sex = event.target.getAttribute('id');
                     localStorage.setItem('sex', event.target.getAttribute('id'));
                    } 
                caloriesCalc();
            }); 
        });
    }

    getStaticInformation('.calculating__choose_big div');
    getStaticInformation('#gender div');

    function getDynamicInformation(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((elem)  => {
           elem.addEventListener('input', (event) => {
            if (elem.value.match(/\D/g)) {
                elem.style.border = '1px solid red';
            } else {
                elem.style.border = 'none';
            }
            switch(elem.getAttribute('id')) {
                case "height":
                    height = +elem.value;
                    break;
                case "weight":
                    weight = +elem.value;
                    break;
                case "age":
                    age = +elem.value;
                    break;
            }
            caloriesCalc();
            });
        });
    }

    getDynamicInformation('.calculating__choose_medium input');
}
// calories calc
/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function cards() {
    class MenuCard {

        constructor(src, alt, name, text, price, parentSelector) {
        this.src = src;
        this.alt = alt;
        this.name = `Меню ${name}`;
        this.text = text;
        this.price = price;
        this.rate = 27;
        this.changeToUAH();
        this.parent = document.querySelector(parentSelector);
        }

        changeToUAH() {
            this.price = this.price * this.rate;
        }
    
        render() {
            const element = document.createElement('div');
            element.classList.add('menu__item');
            element.innerHTML = `
            <img src="${this.src}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">${this.name}</h3>
                    <div class="menu__item-descr">${this.text}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                    `;
            this.parent.append(element);      
        }
    }

    axios.get('http://localhost:3000/menu')
    .then(data => {
        data.data.forEach(({img, altimg, title, descr, price}) => {
            !img ? console.log('empty info') :
            new MenuCard(img, altimg, title, descr, price, '.menu__item_container').render();
        });
    });
}
  // ⇈ создание классов для карточек товаров ⇈
/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");


function forms(timeoutModalToShow) {
    const forms = document.querySelectorAll('form'),
    msg = {
        loading: 'img/form/spinner.svg', 
        success: 'спасибо скоро мы с Вами свяжемся', 
        failure:'что-то пошло не так...'
    };
    forms.forEach(item => {
        bindpostData(item);
    });

    

    function bindpostData(form) {
    form.addEventListener('submit',(e) => {
        e.preventDefault();
        const statusMessage = document.createElement('img');
        statusMessage.src = msg.loading;
        statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
        `;
        form.append(statusMessage);

        form.insertAdjacentElement('afterend', statusMessage);

        const formData = new FormData(form);

        const json = JSON.stringify(Object.fromEntries(formData.entries()));

        Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["postData"])('http://localhost:3000/menu', json)
        .then(data => {
            console.log(data);
            showThanksModal(msg.success);
            statusMessage.remove();
            }).catch(() => {
                showThanksModal(msg.failure);
            }).finally(() => {
                form.reset();
            });
        });
    }
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');
        Object(_modal__WEBPACK_IMPORTED_MODULE_0__["openModal"])('.modal', timeoutModalToShow);
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class='modal__content'>
        <div data-modalClose class='modal__close'>&times;</div>
        <div class='modal__title'>${message}</div>
        </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])('.modal');
        }, 4000);
    }
}
// forms requests
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default, openModal, closeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    if (modal.classList.contains('show')) {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
    }
}

function openModal(modalSelector, timeoutModalToShow) {
    const modal = document.querySelector(modalSelector);
    if (!modal.classList.contains('show')) {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        console.log(timeoutModalToShow);
        if (timeoutModalToShow) {
        clearInterval(timeoutModalToShow);
        }
    }
}

function modal(triggerSelector, modalSelector, timeoutModalToShow) {
    
    const btnsConnect = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector);
       
    modal.addEventListener('click', (e) => {
        if( e.target === modal || e.target.getAttribute('data-modalClose') == '') {
            closeModal(modalSelector);
        }
    });



    btnsConnect.forEach((elem) => {
        elem.addEventListener('click', () => openModal(modalSelector, timeoutModalToShow));
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    function showModalOnScroll () {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, timeoutModalToShow);
            window.removeEventListener('scroll', showModalOnScroll);
        }
    }
    window.addEventListener('scroll', showModalOnScroll);






}
//modals
/* harmony default export */ __webpack_exports__["default"] = (modal);



/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider({
    content, offset, nextArrow, prevArrow, currentSlide, 
    wrapper, fill, totalCounter, currentCounter, dotsIndicators, 
    dotIndicator, activeClass
}) 
{
    let currentSliderNo = currentSlide;
    const sliderContent = document.querySelectorAll(content),
          totalSliderNu = sliderContent.length,
          prevSlide = document.querySelector(prevArrow),
          nextSlide = document.querySelector(nextArrow),
          slidesWrapper = document.querySelector(wrapper),
          slidesField = document.querySelector(fill),
          sliderWidth = window.getComputedStyle(slidesWrapper).width;

    slidesField.style.width = 100 * sliderContent.length + '%';
    sliderContent.forEach((e) => {
        e.style.width = sliderWidth;
    });
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow ='hidden';

    function total(i) {
        if (i < 10) {
            document.querySelector(totalCounter).innerHTML = `0${totalSliderNu}`;
        } else {
            document.querySelector(totalCounter).innerHTML = `${totalSliderNu}`;
        }
    }
    total(totalSliderNu);

    function slideNoUpdate(i) {
        if (i < 10) {
            document.querySelector(currentCounter).innerHTML = `0${currentSliderNo}`;
        } else {
            document.querySelector(currentCounter).innerHTML = `${currentSliderNo}`;
        }
    }

    slideNoUpdate(1);


    nextSlide.addEventListener('click', () => {
        if(currentSliderNo == totalSliderNu) {
            currentSliderNo = 1;
        } else {
            currentSliderNo++;
        }
        slideNoUpdate(currentSliderNo);
        sliderNavUpdate(currentSliderNo - 1);
        if (offset == widthToDigits(sliderWidth) * (totalSliderNu - 1) ) {
            offset = 0;
        } else {
            offset += widthToDigits(sliderWidth);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        });

    prevSlide.addEventListener('click', () => {
        if(currentSliderNo == 1) {
            currentSliderNo = totalSliderNu;
        } else {
            currentSliderNo--;
        }
        slideNoUpdate(currentSliderNo);
        sliderNavUpdate(currentSliderNo - 1);
        if (offset == 0 ) {
            offset = widthToDigits(sliderWidth) * (totalSliderNu - 1);
        } else {
            offset -= widthToDigits(sliderWidth);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        });
        const sliderContainer = document.querySelector(dotsIndicators);
        sliderContent.forEach((e,i) => {
            let dot = document.createElement('div');
            dot.classList.add(dotIndicator.slice(1));
            if (i + 1 == currentSliderNo) {
                dot.classList.add('active');
            }
            sliderContainer.append(dot);
            dot.addEventListener('click', (event) => {
                offset = widthToDigits(sliderWidth) * i ;
                slidesField.style.transform = `translateX(-${offset}px)`;
                currentSliderNo = i + 1;
                sliderNavUpdate(i);
                slideNoUpdate(currentSliderNo);
            });
       });
       function sliderNavUpdate(i) {
            document.querySelectorAll(dotIndicator).forEach((elem) => {
                elem.classList.remove(activeClass);
            });
            document.querySelectorAll(dotIndicator)[i].classList.add(activeClass);
       }
       function widthToDigits(w) {
            return +w.replace(/\D/g, '');
       }
}
// ⇈ slider ⇈ 
/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs(tabsSelector, tabsContentSelector,tabsParentSelector,activeClass) {
    const tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        
        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (item == target) {
                    hideTabContent();
                    showTabContent(i);
                    target.classList.add(activeClass.slice(1));
                }
            });
        }
    });
    // ⇈ переключение табов на первом экране ⇈
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);



/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer(id, deadline, dateNow) {

    function setTimerChangeHtml (selector, endTime) {
        const timer = document.querySelector(selector),
            timeInterval = setInterval(updateClock, 1000);
        updateClock();
        function getZero(n) {
            if (n >=0 && n < 10) {
                return `0${n}`;
            } else { return n;}
        }
        function updateClock() {
            const dateDiff = getTimeRemaining(endTime);
            timer.querySelector('#days').innerHTML = getZero(dateDiff.days);
            timer.querySelector('#hours').innerHTML = getZero(dateDiff.hours);
            timer.querySelector('#minutes').innerHTML = getZero(dateDiff.minutes);
            timer.querySelector('#seconds').innerHTML = getZero(dateDiff.seconds);
            if (dateDiff.total <= 999) {
                clearInterval(timeInterval);
                }
            }
        }

    function getTimeRemaining (endTime) {
        const daysInMs = 1000 * 60 * 60 * 24,
            hoursInMs = 1000 * 60 * 60,
            minutesInMs = 1000 * 60,
            secondsInMs = 1000;
            dateNow = new Date();
        let timeDiff = deadline.getTime() - dateNow.getTime(),
            daysDiff, hoursDiff, minutesDiff, secondsDiff;
        if (timeDiff <= 0) {
            daysDiff = 0;
            hoursDiff= 0; 
            minutesDiff= 0; 
            secondsDiff = 0;
        } else {
            daysDiff = Math.floor(timeDiff / daysInMs);
            hoursDiff = Math.floor((timeDiff / hoursInMs) % 24);
            minutesDiff = Math.floor((timeDiff / minutesInMs) % 60);
            secondsDiff = Math.floor((timeDiff / secondsInMs) % 60);
        }
        return {days:daysDiff, hours:hoursDiff, minutes:minutesDiff, seconds:secondsDiff, total:timeDiff};
    }

    setTimerChangeHtml (id, deadline);
}
//timer
/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cards */ "./src/js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");









window.addEventListener('DOMContentLoaded', () => {
    const timeoutModalToShow = setTimeout(() => Object(_modules_modal__WEBPACK_IMPORTED_MODULE_3__["openModal"])('.modal', timeoutModalToShow), 3000); 
    Object(_modules_calc__WEBPACK_IMPORTED_MODULE_0__["default"])();
    Object(_modules_cards__WEBPACK_IMPORTED_MODULE_1__["default"])();
    Object(_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])(timeoutModalToShow);
    Object(_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])('[data-modal]', '.modal', timeoutModalToShow);
    Object(_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])({
        content: '.offer__slide',
        offset:0,
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        currentSlide: 1,
        wrapper: '.offer__slider-wrapper',
        fill: '.offer__slider-inner',
        totalCounter: '#total',
        currentCounter: '#current',
        dotsIndicators: '.carousel-indicators',
        dotIndicator: '.dot',
        activeClass:'active'
    });
    Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_5__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    Object(_modules_timer__WEBPACK_IMPORTED_MODULE_6__["default"])('.timer', new Date('January 20, 2023 00:00:00'), new Date());

});


/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/*! exports provided: postData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
const postData = async (url, data) => {
    let res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await res.json();
};




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map