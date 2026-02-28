const character = {
    code: 'CSE121b',
    name: 'Javascript Language',
    logo: 'images/js-logo.png',
    information: [
        {
            class: 'Hylian Warrior',
            level: 0,
            health: 8
        }
    ]
};
    

function displayInformation (characterInformation) {
    return`<div>
    <p><strong>Class:</strong> ${characterInformation.class}</p>
    <p><strong>Level:</strong> ${characterInformation.level}</p>
    <p><strong>Health:</strong> ${characterInformation.health}</p>
    </div>
    `
}

function renderInformation (information) {
    const html = information.map(displayInformation);
    document.querySelector("#info").innerHTML = html.join("")
}

renderInformation(character.information)

document.querySelector("#attack").addEventListener("click", function () {
    const linkHealth = character.information[0];

    if (linkHealth.health > 0) {
        linkHealth.health--;
        renderInformation(character.information);
    }

    if (linkHealth.health === 0) {
        document.querySelector("#gameOver").style.display = "block";
        let modal = document.querySelector('dialog')
        modal.showModal();
    }
});

document.querySelector("#level").addEventListener("click", function() {
    character.information[0].level++;
    renderInformation(character.information);
});


