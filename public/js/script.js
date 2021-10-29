let todo_list = document.querySelector('.todo-list');

request.get('api.php?api-name=get-all', function (response) {
    for (const [id, row] of Object.entries(response.entities)) {
        addToDoElement(id, row.description, (row.status == 1));
    }
});

let todo_form = document.getElementById('todo_form');

todo_form.onsubmit = function (event) {
    event.preventDefault();
    request.post(this, function (response) {
        document.getElementById('todo-description').value = '';
        addToDoElement(response.entity.id, response.entity.description, false);
    });
};

function addToDoElement(id, description, status) {
    let li = document.querySelector('.template.todo').cloneNode(true);
    li.classList.remove('template');
    li.querySelector('.text').textContent = description;
    li.setAttribute('data-id', id);
    li.querySelector('.form-check-input').checked = status;
    todo_list.append(li);
}

/**
 * Q: Ko satur todo_list mainīgais?
 * A: todo_list vienāds ar ul elementu ar klasi todo-list
 */

todo_list.onclick = function (event) {
    let element = event.target;
    // element - mainīgais kurš satur konkrēti to elementu uz kuru tika uzklikšķināts
    if(element.classList.contains('todo__delete')) {
        event.preventDefault();

        let url = element.getAttribute('href');
        let task_element = element.parentNode.parentNode;
        let id = task_element.getAttribute('data-id');
        url += "&id=" + id;

        request.get(url, function (response) {
            task_element.remove();
        });
    }
    else if (element.classList.contains('form-check-input')) {
        /**
         * Q: Kā mēs varm noskaidrot ko satur element mainīgais šajā rindā?
         * A: Ar console.log izvadīt elmenet mainīgo
         * 
         * A: element == input type=checkbox elementu
         */
        let task_element = element.parentNode.parentNode;
        let id = task_element.getAttribute('data-id');
        let status = element.checked;
        request.get('api.php?api-name=update&id=' + id + '&status=' + status);
    }
    else if (element.classList.contains('todo__description')) {
        element.setAttribute('contenteditable', true);
    }
}

document.body.onclick = function (event) {
    let editable = this.querySelector('[contenteditable=true]');
    if (editable == null) {
        return;
    }
    let task_element = editable.parentNode.parentNode;
    let id = task_element.getAttribute('data-id');

    if (editable !== event.target) {
        request.get('api.php?api-name=update&id=' + id + '&description=' + editable.textContent, function (response) {
            editable.removeAttribute('contenteditable');
        });
    }

}




