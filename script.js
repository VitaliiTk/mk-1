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
    startBtnWrapper.classList.add('scale-0');
    body.classList.add('change-bg')
    setTimeout(() => {
        startBtnWrapper.style.display = "none";
    }, 300);
})


// start FETCH function
fetch('./characters.json')
    .then(response => response.json())
    .then(data => {

        data.forEach(item => {
            characterList.insertAdjacentHTML('beforeend', `
            <li class="character-item" id="${item.id}">
                <img src="${item.img}" draggable="false">
                <div class="character-name">${item.name}</div>
            </li>
        `)
        })

        // choose and activate for each character item via click
        const characterItem = document.querySelectorAll('.character-item');
        characterItem.forEach(card => {
            card.addEventListener('click', () => {
                characterItem.forEach(card => {
                    card.classList.remove('item-selected');
                })
                card.classList.add('item-selected');
                cardOfMoves.classList.add('transform-anim')
                body.classList.add('scroll-stop');
                getCharacterId();
                getCharacterName(card);
            })
        })

        // close button in modal window
        closeBtn.addEventListener('click', () => {
            cardOfMoves.classList.remove('transform-anim');
            body.classList.remove("scroll-stop")
            characterItem.forEach(card => {
                card.classList.remove('item-selected')
            })
        })

        function cleanMoveList() {
            basic.innerHTML = "";
            aerial.innerHTML = "";
            throws.innerHTML = "";
            special.innerHTML = "";
            fatalBlow.innerHTML = "";
            fatalities.innerHTML = "";
            brutalities.innerHTML = "";
            breakers.innerHTML = "";
            taunts.innerHTML = "";
        }

        // get char card id and take data from json and ad to move list card of each character
        function getCharacterId() {
            const selectedCharacterId = document.querySelector('.item-selected').getAttribute('id');


            cleanMoveList();

            // move list add moves
            function moveListAddContent(a, b) {
                data[selectedCharacterId][a].forEach(item => {
                    b.insertAdjacentHTML('beforeend', `
                    <li class="trick_item">
                        <div class="trick_modal"></div>
                        <div class="trick_info">
                            <div class="trick_name">${item.name}</div>
                            <div class="trick_execution">
                                <span class="move-btn">${item.move}</span>
                            </div>
                        </div>
                    </li>
                `)
                })
            }
            moveListAddContent('basic', basic);
            moveListAddContent('aerial', aerial);
            moveListAddContent('throws', throws);
            moveListAddContent('special', special);
            moveListAddContent('fatalBlow', fatalBlow);
            moveListAddContent('fatalities', fatalities);
            moveListAddContent('brutalities', brutalities);
            moveListAddContent('breakers', breakers);
            moveListAddContent('taunts', taunts);
        }


        function getCharacterName(a) {
            const characterName = a.querySelector('.character-name').textContent;
            characterCardTitle.textContent = characterName;
        }

    })
