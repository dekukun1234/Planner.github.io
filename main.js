// main.js

const modalContainer = document.createElement('div');
modalContainer.classList.add('modal-container');

const cardInput = document.createElement('input');
cardInput.setAttribute('type', 'text');
cardInput.setAttribute('id', 'cardInput');
cardInput.setAttribute('placeholder', 'Ingresa la información de la card');
modalContainer.appendChild(cardInput);

const agregarButton = document.createElement('button');
agregarButton.textContent = 'Agregar Card';
agregarButton.setAttribute('onclick', 'agregarCard()');
modalContainer.appendChild(agregarButton);

const colors = ['#CF593C', '#CFFA80', 'black', '#1EA3D9', 'white', 'pink', 'orange', 'purple'];

const cancelButton = document.createElement('button');
cancelButton.textContent = 'Cancelar';
cancelButton.classList.add('cancel-button');
cancelButton.addEventListener('click', function() {
  ocultarModal();
});
modalContainer.appendChild(cancelButton);

const botoncrear = document.getElementById('botoncrear');

botoncrear.addEventListener('click', function() {
  // Si el modal está oculto, lo mostramos y viceversa.
  if (!modalContainer.parentNode) {
    document.body.appendChild(modalContainer);
  } else {
    ocultarModal();
  }
});

function agregarCard() {
  const input = cardInput.value;
  if (!input) {
    alert('Por favor, ingresa la información de la card');
    return;
  }

  const gridContainer = document.getElementById('gridContainer');

  const card = document.createElement('div');
  card.classList.add('card');
  card.textContent = input;

  const colorButtonContainer = document.createElement('div');
  colorButtonContainer.classList.add('color-button-container');

  colors.forEach(color => {
    const colorButton = document.createElement('button');
    colorButton.classList.add('color-button');
    colorButton.style.backgroundColor = color;
    colorButton.addEventListener('click', function() {
      card.style.backgroundColor = color;
    });
    colorButtonContainer.appendChild(colorButton);
  });

  card.appendChild(colorButtonContainer);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Eliminar';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', function() {
    gridContainer.removeChild(card);
  });

  card.appendChild(deleteButton);

  gridContainer.appendChild(card);

  // Limpiar el input después de agregar la card
  cardInput.value = '';

  // Cerramos el modal después de agregar la card
  ocultarModal();
}

// Función para ocultar el modal
function ocultarModal() {
  // Si el modal está visible, lo ocultamos
  if (modalContainer.parentNode) {
    modalContainer.parentNode.removeChild(modalContainer);
  }
}

// Evento para filtrar cartas por búsqueda
const searchInput = document.querySelector('input[type="search"]');

searchInput.addEventListener('input', function() {
  const searchText = searchInput.value.trim().toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const cardText = card.textContent.trim().toLowerCase();
    if (cardText.includes(searchText)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
