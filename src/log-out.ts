import { kebabCase } from '@substrate-system/kebab-case'

export class LogOut extends HTMLElement {
    static observedAttributes:string[] = ['title']
    static TAG_NAME = 'log-out'
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
            this._title = 'Logout'
        } else {
            this._title = title
        }

        this.render()
    }

    render () {
        if (!this._title) return
        const kebabTitle = kebabCase(this._title)

        this.innerHTML = `<svg role="image" xmlns="http://www.w3.org/2000/svg"
            class="icon log-out"
            viewBox="0 0 512 512"
            aria-labelledby="${kebabTitle}"
        >
            <title id="${kebabTitle}">${this._title}</title>
            <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/>
        </svg>
        `
    }
}

export function register () {
    customElements.define(LogOut.TAG_NAME, LogOut)
}
