
let gallery = document.querySelector('.gallery');
let modal = document.querySelector('dialog');
let modalImage = modal.querySelector('img');
let closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', openModal);

function openModal(e) {
    if (e.target.tagName != 'IMG') {
        return
    }

    let fullImage = e.target.src.replace('-sm', '-full');

    modalImage.src = fullImage

    modal.showModal();
    
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
