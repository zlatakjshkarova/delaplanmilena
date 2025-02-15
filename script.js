const myBtn = document.querySelector('#myBtn');
const nameInput = document.querySelector("#name")
const list = document.querySelector('#list');

nameInput.addEventListener('click', (event) => {
    if (event.key === "Event") {
        addTask()
    }
})


myBtn.addEventListener('click', Task)

function Task() {
    if (nameInput.value != "") {
        const cenle = document.querySelector("#cenle");

        const model = document.querySelector("#model");
        const newItem = document.createElement("li")

        newItem.classList.add('item');

        const deleteButton = document.createElement('button')
        newItem.innerHTML = `<span>${nameInput.value}</span>`;


        list.appendChild(newItem);
        cenle.textContent = 'отмена'
        deleteButton.textContent = 'удалить'
        deleteButton.textContent = 'удалить';
        newItem.appendChild(deleteButton)

        deleteButton.addEventListener('click', () => {

            model.stley, display = 'block';


            function removeTask() {
                list.removeChild(newItem);
                model.style.display = 'none';

            }

            list.addEventListener('click', removeTask)


            deleteButton.addEventListener('click', removeTask)
            block.classList.add("model")



            delBtnModal.addEventListener('click', removeTask)

            cenle.addEventListener('click', () => {
                model.style.display = 'none';

                delBtnModal.addEventListener('click', removeTask);

            })


        })
        nameInput.value = '';
    } else {
        alert('Заполните поле')
    }
}