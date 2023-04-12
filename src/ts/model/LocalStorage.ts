import { Task } from "./Task"
import { deserialize, serialize } from "./Serialization"

export class LocalStorage {
    constructor(defaultProject: string) {
        if (!this.#isPopulated()) {
            this.#populate(defaultProject)
        }
    }

    getProjects(): string[] {
        const json = localStorage.getItem('projects')
        return JSON.parse(json)
    }

    pushProject(title: string) {
        const projects = this.getProjects()
        projects.push(title)
        localStorage.setItem('projects', JSON.stringify(projects))
    }

    getTasks(project = ''): Task[] {
        const tasks = deserialize(localStorage.getItem('tasks'))
        return project ? tasks.filter(task => task.project === project) : tasks
    }

    pushTask(task: Task): void {
        const tasks = this.getTasks()
        tasks.push(task)
        this.#setTasks(tasks)
    }

    editTask(newTask: Task): void {
        const tasks = this.getTasks()
        const index = tasks.findIndex(task => task.id === newTask.id)
        tasks.splice(index, 1)
        tasks.push(newTask)
        this.#setTasks(tasks)
    }

    removeTask(id: string): void {
        const tasks = this.getTasks()
        const index = tasks.findIndex(task => task.id === id)
        tasks.splice(index, 1)
        this.#setTasks(tasks)
    }

    #isPopulated(): boolean {
        return !!localStorage.getItem('tasks')
    }

    #populate(defaultProject: string): void {
        this.#setTasks([])
        localStorage.setItem('projects', JSON.stringify([ defaultProject ]))
    }

    #setTasks(tasks: Task[]): void {
        localStorage.setItem('tasks', serialize(tasks))
    }
}