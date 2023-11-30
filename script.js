
// не бойтесь this
// const heroBtn = document.querySelectorAll('.hero_item');
// heroBtn.forEach(function (element) {
//     element.addEventListener('click', changeBgColor);
// });

// function changeBgColor() {
//     for (let i = 0; i < heroBtn.length; i++) {
//         heroBtn[i].classList.remove('selected');
//     }
//     this.classList.add('selected');
//     console.log(this)
// }


// const deleteIcon = document.querySelectorAll('.fa-delete-left');
// for (let i = 0; i < deleteIcon.length; i++) {
//     deleteIcon[i].addEventListener('click', removeItem);
// }
// function removeItem() {
//     document.querySelector('.trick_item').remove();
// }





// add Button open modal window
// const addBtn = document.querySelector('.add_button');
// addBtn.addEventListener('click', openAddModalWindow);

// function openAddModalWindow() {
//     let a = document.querySelector('.modal_wrapper');
//     a.classList.add('active');
// }


// // cancel button in modal window close modal window
// const cancelBtn = document.querySelector('.cancel_btn');
// cancelBtn.addEventListener('click', closeModalWindow);

// function closeModalWindow() {
//     let a = document.querySelector('.modal_wrapper');
//     a.classList.remove('active');
//     document.querySelector('.i-1').value = '';
//     document.querySelector('.i-2').value = '';
// }



// save button in modal window add new item to trick_list
// const saveBtn = document.querySelector('.save_btn');
// saveBtn.addEventListener('click', addANewElement);



// function addANewElement() {

//     // берет значение из инпута и сохраняет в переменные
//     const i_1 = document.querySelector('.i-1').value;
//     const i_2 = document.querySelector('.i-2').value;

//     // создаем переменную и помещаем в нее блок список со страницы
//     const trickList = document.querySelector('.trick_list');

//     // создания элемента и добавление
//     const newItem = document.createElement('li');
//     newItem.classList.add('trick_item');
//     trickList.appendChild(newItem);

//     const newName = document.createElement('div');
//     newName.classList.add('trick_name');
//     newItem.appendChild(newName);
//     newName.textContent = i_1;

//     const newExecution = document.createElement('div');
//     newExecution.classList.add('trick_execution');
//     newName.appendChild(newExecution);
//     newExecution.textContent = i_2;

//     // // create trash icon
//     // const newTrashIcon = document.createElement('i');
//     // newTrashIcon.classList.add('fa-solid', 'fa-delete-left', 'delete_icon', 'active');
//     // newItem.appendChild(newTrashIcon);


//     // // вешаем событие на созданую только что иконку удалить
//     // newTrashIcon.addEventListener('click', deleteNewItem);
//     // function deleteNewItem() {
//     //     console.log('delete work well');
//     //     newItem.remove(); // удаляем только что созданный блок
//     // }

//     // очистка инпутов
//     document.querySelector('.i-1').value = '';
//     document.querySelector('.i-2').value = '';

//     //закрывает модальное окно
//     document.querySelector('.modal_wrapper').classList.remove('active');
// }







// переключение табов с приемами
// function openTab(event, tabName) {

//     // скрываем контент
//     const tabContent = document.querySelectorAll('.tab_content');
//     for (let i = 0; i < tabContent.length; i++) {
//         tabContent[i].style.display = 'none';
//     }

//     // удаляем класс active со всех элементов
//     const tablink = document.querySelectorAll('.tab_link');
//     for (let i = 0; i < tablink.length; i++) {
//         tablink[i].classList.remove('active');
//     }

//     document.getElementById(tabName).style.display = 'block';
//     event.currentTarget.classList.add('active');
// }








// смена вида кнопок
// const psBtnChoose = document.querySelector('#ps');
// const xboxBtnChoose = document.querySelector('#xbox');
// const universalBtnChoose = document.querySelector('#uni');

// psBtnChoose.addEventListener('click', changeKeyToPlaystation);
// xboxBtnChoose.addEventListener('click', changeKeyToXbox);
// universalBtnChoose.addEventListener('click', changeKeyToUniversal);

// psBtnChoose.click();

// function changeKeyToPlaystation() {
//     let keyViewBtn = document.querySelectorAll('.key_view_btn');
//     for (let i = 0; i < keyViewBtn.length; i++) {
//         keyViewBtn[i].style.background = '#fff';
//     }
//     this.style.background = 'red';

//     const square = document.querySelectorAll('.square');
//     for (let i = 0; i < square.length; i++) {
//         square[i].innerHTML = '<img src="img/icons/square.png">';
//     }
//     const triangle = document.querySelectorAll('.triangle');
//     for (let i = 0; i < triangle.length; i++) {
//         triangle[i].innerHTML = '<img src="img/icons/triangle.png">';
//     }
//     const cross = document.querySelectorAll('.cross');
//     for (let i = 0; i < cross.length; i++) {
//         cross[i].innerHTML = '<img src="img/icons/cross.png">';
//     }
//     const circle = document.querySelectorAll('.circle');
//     for (let i = 0; i < circle.length; i++) {
//         circle[i].innerHTML = '<img src="img/icons/circle.png">';
//     }
//     const l1 = document.querySelectorAll('.l1');
//     for (let i = 0; i < l1.length; i++) {
//         l1[i].innerHTML = '<img src="img/icons/l1.png">';
//     }
//     const l2 = document.querySelectorAll('.l2');
//     for (let i = 0; i < l2.length; i++) {
//         l2[i].innerHTML = '<img src="img/icons/l2.png">';
//     }
//     const r1 = document.querySelectorAll('.r1');
//     for (let i = 0; i < r1.length; i++) {
//         r1[i].innerHTML = '<img src="img/icons/r1.png">';
//     }
//     const r2 = document.querySelectorAll('.r2');
//     for (let i = 0; i < r2.length; i++) {
//         r2[i].innerHTML = '<img src="img/icons/r2.png">';
//     }
// }

// function changeKeyToXbox() {
//     let keyViewBtn = document.querySelectorAll('.key_view_btn');
//     for (let i = 0; i < keyViewBtn.length; i++) {
//         keyViewBtn[i].style.background = '#fff';
//     }
//     this.style.background = 'red';

//     const square = document.querySelectorAll('.square');
//     for (let i = 0; i < square.length; i++) {
//         square[i].innerHTML = '<img src="img/icons/x.png">';
//     }
//     const triangle = document.querySelectorAll('.triangle');
//     for (let i = 0; i < triangle.length; i++) {
//         triangle[i].innerHTML = '<img src="img/icons/y.png">';
//     }
//     const cross = document.querySelectorAll('.cross');
//     for (let i = 0; i < cross.length; i++) {
//         cross[i].innerHTML = '<img src="img/icons/a.png">';
//     }
//     const circle = document.querySelectorAll('.circle');
//     for (let i = 0; i < circle.length; i++) {
//         circle[i].innerHTML = '<img src="img/icons/b.png">';
//     }
//     const l1 = document.querySelectorAll('.l1');
//     for (let i = 0; i < l1.length; i++) {
//         l1[i].innerHTML = '<img src="img/icons/lb.png">';
//     }
//     const l2 = document.querySelectorAll('.l2');
//     for (let i = 0; i < l2.length; i++) {
//         l2[i].innerHTML = '<img src="img/icons/lt.png">';
//     }
//     const r1 = document.querySelectorAll('.r1');
//     for (let i = 0; i < r1.length; i++) {
//         r1[i].innerHTML = '<img src="img/icons/rb.png">';
//     }
//     const r2 = document.querySelectorAll('.r2');
//     for (let i = 0; i < r2.length; i++) {
//         r2[i].innerHTML = '<img src="img/icons/rt.png">';
//     }
// }

// function changeKeyToUniversal() {
//     let keyViewBtn = document.querySelectorAll('.key_view_btn');
//     for (let i = 0; i < keyViewBtn.length; i++) {
//         keyViewBtn[i].style.background = '#fff';
//     }
//     this.style.background = 'red';

//     const square = document.querySelectorAll('.square');
//     for (let i = 0; i < square.length; i++) {
//         square[i].innerHTML = '<img src="img/icons/one.png">';
//     }
//     const triangle = document.querySelectorAll('.triangle');
//     for (let i = 0; i < triangle.length; i++) {
//         triangle[i].innerHTML = '<img src="img/icons/two.png">';
//     }
//     const cross = document.querySelectorAll('.cross');
//     for (let i = 0; i < cross.length; i++) {
//         cross[i].innerHTML = '<img src="img/icons/three.png">';
//     }
//     const circle = document.querySelectorAll('.circle');
//     for (let i = 0; i < circle.length; i++) {
//         circle[i].innerHTML = '<img src="img/icons/four.png">';
//     }
//     const l1 = document.querySelectorAll('.l1');
//     for (let i = 0; i < l1.length; i++) {
//         l1[i].innerHTML = '<img src="img/icons/lb.png">';
//     }
//     const l2 = document.querySelectorAll('.l2');
//     for (let i = 0; i < l2.length; i++) {
//         l2[i].innerHTML = '<img src="img/icons/lt.png">';
//     }
//     const r1 = document.querySelectorAll('.r1');
//     for (let i = 0; i < r1.length; i++) {
//         r1[i].innerHTML = '<img src="img/icons/rb.png">';
//     }
//     const r2 = document.querySelectorAll('.r2');
//     for (let i = 0; i < r2.length; i++) {
//         r2[i].innerHTML = '<img src="img/icons/rt.png">';
//     }
// }





// меняем цвет фрейм даты в зависимости от значений
// const startFrame = document.querySelectorAll('.start');
// for (let i = 0; i < startFrame.length; i++) {
//     if (+startFrame[i].textContent >= 9) {
//         startFrame[i].style.color = 'red';
//     }
//     else if (+startFrame[i].textContent < 9) {
//         startFrame[i].style.color = 'green';
//     }
// }

// const blockFrame = document.querySelectorAll('.block');
// for (let i = 0; i < blockFrame.length; i++) {
//     if (+blockFrame[i].textContent >= 0) {
//         blockFrame[i].style.color = 'green';
//     }
//     else if (+blockFrame[i].textContent <= 0) {
//         blockFrame[i].style.color = 'red';
//     }
// }

// const hitFrame = document.querySelectorAll('.hit');
// for (let i = 0; i < hitFrame.length; i++) {
//     if (+hitFrame[i].textContent >= 0) {
//         hitFrame[i].style.color = 'green';
//     }
// }


const card = document.querySelector('.card');
let charBtn = document.querySelectorAll('.character-item');

// charBtn.forEach(element => {
//     element.addEventListener('click', () => {
//         // card.classList.remove('display-none');
//         charBtn.forEach((item) => {
//             item.classList.remove('item-selected');
//         })
//         element.classList.add('item-selected');
//     })
// })

const closeMoveModalBtn = document.querySelector('.close');
closeMoveModalBtn.addEventListener('click', () => {
    card.classList.add('transform-anim')
})



// Start Btn Logic
const startBtn = document.querySelector('.btn-start');
const characterList = document.querySelector('.character-list');
const body = document.querySelector('body');

startBtn.addEventListener('click', () => {
    characterList.classList.remove('start-anim-gap');
    startBtn.classList.add('display-none');
    body.classList.add('change-bg')
})


// FETCH JSON =======================
// =======================================

function replaceContentIn(event, chooseCharacter) {

    card.classList.remove('transform-anim');
    charBtn.forEach((item) => {
        item.classList.remove('item-selected');
    })
    event.currentTarget.classList.add('item-selected')


    fetch('./characters.json')
        .then(response => response.json())
        .then(data => {
            let characterName = document.querySelector('.card_title');
            characterName.textContent = data[chooseCharacter].name;
            // basic attacks
            let listBasic = "";
            data[chooseCharacter].basic.forEach(element => {
                listBasic += `
                    <li class="trick_item">
                        <div class="trick_info">
                            <div class="trick_name">
                                ${element.name}
                            </div>
                            <div class="trick_execution">
                                <span class="move-btn">${element.button}</span>
                            </div>
                        </div>
                    </li>
                `
            });
            document.querySelector('.trick_list.basic').innerHTML = listBasic;

            // aerial attacks
            let moveAerial = "";
            data[chooseCharacter].aerial.forEach(element => {
                moveAerial += `
                    <li class="trick_item">
                        <div class="trick_info">
                            <div class="trick_name">
                                ${element.name}
                            </div>
                            <div class="trick_execution">
                                <span class="move-btn">${element.button}</span>
                            </div>
                        </div>
                    </li>
                `
            });
            document.querySelector('.trick_list.aerial').innerHTML = moveAerial;

            // throws
            let throwsList = "";
            data[chooseCharacter].throws.forEach(element => {
                throwsList += `
                    <li class="trick_item">
                        <div class="trick_info">
                            <div class="trick_name">
                                ${element.name}
                            </div>
                            <div class="trick_execution">
                                <span class="move-btn">${element.button}</span>
                            </div>
                        </div>
                    </li>
                `
            });
            document.querySelector('.trick_list.throws').innerHTML = throwsList;

            // special moves
            let specialList = "";
            data[chooseCharacter].special.forEach(element => {
                specialList += `
                    <li class="trick_item">
                        <div class="trick_info">
                            <div class="trick_name">
                                ${element.name}
                            </div>
                            <div class="trick_execution">
                                <span class="move-btn">${element.button}</span>
                            </div>
                        </div>
                    </li>
                `
            });
            document.querySelector('.trick_list.special').innerHTML = specialList;

            // fatal blow
            let fatalBlowList = "";
            data[chooseCharacter].fatal_blow.forEach(element => {
                fatalBlowList += `
                    <li class="trick_item">
                        <div class="trick_info">
                            <div class="trick_name">
                                ${element.name}
                            </div>
                            <div class="trick_execution">
                                <span class="move-btn">${element.button}</span>
                            </div>
                        </div>
                    </li>
                `
            });
            document.querySelector('.trick_list.fatal_blow').innerHTML = fatalBlowList;

            // fatalities
            let fatalitiesList = "";
            data[chooseCharacter].fatalities.forEach(element => {
                fatalitiesList += `
                    <li class="trick_item">
                        <div class="trick_info">
                            <div class="trick_name">
                                ${element.name}
                            </div>
                            <div class="trick_execution">
                                <span class="move-btn">${element.button}</span>
                            </div>
                        </div>
                    </li>
                `
            });
            document.querySelector('.trick_list.fatalities').innerHTML = fatalitiesList;

            // fatalities
            let brutalitiesList = "";
            data[chooseCharacter].brutalities.forEach(element => {
                brutalitiesList += `
                    <li class="trick_item">
                        <div class="trick_info">
                            <div class="trick_name">
                                ${element.name}
                            </div>
                            <div class="trick_execution">
                                <span class="move-btn">${element.button}</span>
                            </div>
                        </div>
                    </li>
                `
            });
            document.querySelector('.trick_list.brutalities').innerHTML = brutalitiesList;
        })

}


