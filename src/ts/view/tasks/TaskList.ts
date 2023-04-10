import TaskHtml from './Task.html'
import { Task } from '../../model/Task'
import { remove } from '../../Controller'
import { isValid } from 'date-fns'

export function renderTaskList(tasks: Task[]) {
    const main = document.querySelector('main')

    const list = renderUL(tasks)

    main.innerHTML = ''
    main.appendChild(list)
}

function renderUL(tasks: Task[]) {
    const ul = document.createElement('ul')
    ul.classList.add('mb-4', 'list-group', 'list-group-flush')

    if (tasks.length > 0) {
        ul.classList.add('border-top', 'border-bottom')
    }

    for (const todo of tasks) {
        ul.appendChild(renderLI(todo))
    }

    return ul
}

function renderLI(task : Task) {
    const li = document.createElement('li')
    li.classList.add('list-group-item')
    li.setAttribute('data-id', ""+task.id)

    li.innerHTML = TaskHtml
    li.querySelector('#task__title').textContent = task.title
    li.querySelector('#task__duedate').textContent = formatDate(task)
    li.querySelector('#task__description').textContent = task.description
    li.querySelector('button').addEventListener('click', () => remove(task.id))

    return li
}

function formatDate(task: Task) {
    return isValid(task.date) ? task.date.toLocaleString([], dateOptions(task.hasTime)) : ''
}

function dateOptions(hasTime: boolean): Intl.DateTimeFormatOptions {
    return {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: hasTime ? '2-digit' : undefined,
        minute: hasTime ? '2-digit' : undefined
    }
}