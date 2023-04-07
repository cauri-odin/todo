import { Project } from "./Models"

export class LocalStorage {
    constructor() {
        if (!this.#isPopulated) {
            this.#populate()
        }
    }

    #isPopulated() {
        return !!localStorage.getItem('currentProject')
    }

    #populate() {
        const inbox =  new Project('Inbox')
        localStorage.setItem('currentProject', JSON.stringify(inbox))
    }

    getProject() {
        const json = localStorage.getItem('currentProject')
        return Project.fromJSON(json)
    }

    setProject(project: Project) {
        localStorage.setItem('currentProject', JSON.stringify(project))
    }
}