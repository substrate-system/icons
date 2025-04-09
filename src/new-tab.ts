import { kebabCase } from '@substrate-system/kebab-case'

export class NewTab extends HTMLElement {
    static observedAttributes:string[] = ['title']
    static TAG_NAME = 'new-tab'
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
            this._title = 'New tab'
        } else {
            this._title = title
        }

        this.render()
    }

    render () {
        if (!this._title) return
        const kebabTitle = kebabCase(this._title)

        this.innerHTML = `
            <svg role="image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                aria-labelledby="${kebabTitle}"
            >
                <title id="${kebabTitle}">${this._title}</title>
                <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/>
            </svg>
        `
    }
}

export function register () {
    customElements.define(NewTab.TAG_NAME, NewTab)
}
