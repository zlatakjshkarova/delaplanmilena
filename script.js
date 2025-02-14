const myBtn = document.querySelector('#myBtn');
const nameInput = document.querySelector("#name")
const list = document.querySelector('#list');

myBtn.addEventListener('click', Task)

function Task() {
    if (nameInput.value != "") {
        const cenle = document.querySelector("#cenle");

        const model = document.querySelector("#model");
        const newItem = document.createElement("li")

        newItem.classList.add('item');

        const deleteButton = document.createElement('button')
        newItem.textContent = `<span>${'👏'}</span>`;


        list.appendChild(newItem);

        deleteButton.textContent = 'удалить';
        newItem.appendChild(deleteButton)

        deleteButton.addEventListener('click', () => {

            model.stley, display = 'block';


            function removeTask() {
                list.removeChild(newItem);
                model.style.display = 'none';

            }
            deleteButton.addEventListener('click', removeTask)
            block.classListadd("model")

            cenle.addEventListener('click', () => {
                model.stley.display = 'none';

                list.classListadd(newItem);
            })


        })
        nameInput.value = '';
    } else {
        alert('Заполните поле')
    }
}