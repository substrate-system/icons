import { kebabCase } from '@substrate-system/kebab-case'

export class EditPencil extends HTMLElement {
    static observedAttributes:string[] = ['title']
    static TAG_NAME = 'edit-pencil'

    _title:string|null

    constructor () {
        super()
        this._title = this.getAttribute('title')
    }

    /**
     * Only watching for 'title'.
     */
    attributeChangedCallback (_name, _oldValue, newValue) {
        this._title = newValue
        this.render()
    }

    connectedCallback () {
        const title = this.getAttribute('title')
        if (title === undefined || title === null) {
            this._title = 'Save'
        } else {
            this._title = title
        }

        this.render()
    }

    render () {
        const title = this._title
        if (!title) return
        const kebabTitle = kebabCase(title)

        this.innerHTML = `<svg
            class="icon edit-pencil" role="image"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
            aria-labelledby="${kebabTitle}"
        >
            <title id="${kebabTitle}">${title}</title>
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
        </svg>`
    }
}

export function register () {
    customElements.define(EditPencil.TAG_NAME, EditPencil)
}
