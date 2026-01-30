
let gallery = document.querySelector('.gallery');
let modal = document.querySelector('dialog');
let modalImage = modal.querySelector('img');
let closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    if (e.target.tagName != 'IMG') {
        return
    }

    let fullImage = e.target.src.replace('-sm', '-full');

    modalImage.src = fullImage

    modal.showModal();
    //console.log(e.target.src.replace('-sm', '-full'));


// Code to show modal  - Use event parameter 'e' (event) 
    
}

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
