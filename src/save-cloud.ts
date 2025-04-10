import { kebabCase } from '@substrate-system/kebab-case'

export class SaveCloud extends HTMLElement {
    static observedAttributes:string[] = ['title']
    static TAG_NAME = 'save-cloud'
    _title:string

    constructor () {
        super()
        this._title = this.getAttribute('title') || 'Save'
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
        const kebabTitle = kebabCase(this._title)

        this.innerHTML = `
            <svg role="image" xmlns="http://www.w3.org/2000/svg"
                class="icon save-cloud"
                viewBox="0 0 640 512"
                aria-labelledby="${kebabTitle}"
            >
                <title id="${kebabTitle}">${this._title}</title>
                <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128l-368 0zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39L296 392c0 13.3 10.7 24 24 24s24-10.7 24-24l0-134.1 39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/>
            </svg>
        `
    }
}

export function register () {
    customElements.define(SaveCloud.TAG_NAME, SaveCloud)
}

