const cardOfMoves = document.querySelector('.card');
const startBtn = document.querySelector('.btn-start');
const startBtnWrapper = document.querySelector('.btn-start_wrapper');
const sectionCharacter = document.querySelector('.character');
const body = document.querySelector('body');
const closeBtn = document.querySelector('.close');
const characterCardTitle = document.querySelector('.card_title');
const characterList = document.querySelector('.character-list');

const basic = document.querySelector('.trick_list.basic');
const aerial = document.querySelector('.trick_list.aerial');
const throws = document.querySelector('.trick_list.throws');
const special = document.querySelector('.trick_list.special');
const fatalBlow = document.querySelector('.trick_list.fatal_blow');
const fatalities = document.querySelector('.trick_list.fatalities');
const brutalities = document.querySelector('.trick_list.brutalities');
const breakers = document.querySelector('.trick_list.breakers');
const taunts = document.querySelector('.trick_list.taunts');


// Start Btn Logic
startBtn.addEventListener('click', () => {
    sectionCharacter.classList.add('active');
    startBtnWrapper.classList.add('display-none');
    body.classList.add('change-bg')
    setTimeout(() => {
        startBtnWrapper.style.display = "none";
    }, 300);
})


// start FETCH function
fetch('./characters-02.json').then(response => response.json()).then(data => {

    data.forEach(item => {
        characterList.insertAdjacentHTML('beforeend', `
            <li class="character-item" id="${item.id}">
                <img src="${item.img}" draggable="false">
                <div class="character-name">${item.name}</div>
            </li>
        `)
    })

    // choose and activate for each character item via click
    let characterCard = document.querySelectorAll('.character-item');
    characterCard.forEach(card => {
        card.addEventListener('click', () => {
            characterCard.forEach(card => {
                card.classList.remove('item-selected');
            })
            card.classList.add('item-selected');
            cardOfMoves.classList.add('transform-anim')
            body.classList.add('scroll-stop');
            getCharacterCardId();
            getCharacterName(card);
        })
    })

    // close button in modal window
    closeBtn.addEventListener('click', () => {
        cardOfMoves.classList.remove('transform-anim');
        body.classList.remove("scroll-stop")
        characterCard.forEach(card => {
            card.classList.remove('item-selected')
        })
    })

    // get char card id and take data from json and ad to move list card of each character
    function getCharacterCardId() {
        const characterCardId = document.querySelector('.item-selected').getAttribute('id');

        // move list add moves
        basic.innerHTML = "";
        aerial.innerHTML = "";
        throws.innerHTML = "";
        special.innerHTML = "";
        fatalBlow.innerHTML = "";
        fatalities.innerHTML = "";
        brutalities.innerHTML = "";
        breakers.innerHTML = "";
        taunts.innerHTML = "";
        moveListAddContent('basic', basic);
        moveListAddContent('aerial', aerial);
        moveListAddContent('throws', throws);
        moveListAddContent('special', special);
        moveListAddContent('fatalBlow', fatalBlow);
        moveListAddContent('fatalities', fatalities);
        moveListAddContent('brutalities', brutalities);
        moveListAddContent('breakers', breakers);
        moveListAddContent('taunts', taunts);

        function moveListAddContent(a, b) {
            data[characterCardId][a].forEach(item => {
                b.insertAdjacentHTML('beforeend', `
                    <li class="trick_item">
                        <div class="trick_info">
                            <div class="trick_name">
                                ${item.name}
                            </div>
                            <div class="trick_execution">
                            <span class="move-btn">${item.move}</span>
                            </div>
                        </div>
                    </li>
                `)
            })
        }
    }

    function getCharacterName(a) {
        const characterName = a.querySelector('.character-name').textContent;
        console.log(characterName)
        characterCardTitle.textContent = characterName;
    }

})
