function addItem() {
    const list = document.getElementById('list');
    const itemInput = document.getElementById('itemInput');
    
    const newItem = document.createElement('div');
    newItem.className = 'list-item';
    newItem.textContent = itemInput.value;

    list.appendChild(newItem);

    // Очистить поле ввода
    itemInput.value = '';

    // Добавьте обработчик события для выбора элемента
    newItem.addEventListener('click', function () {
        // Снимите выделение со всех элементов списка
        const items = document.querySelectorAll('.list-item');
        items.forEach(item => item.classList.remove('selected'));

        // Выделите выбранный элемент
        newItem.classList.add('selected');
    });
}
