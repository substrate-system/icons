import { render } from './render/eye-regular.js'

export class EyeRegular extends HTMLElement {
    static TAG = 'eye-regular'
    _title:string

    constructor () {
        super()
        this._title = this.getAttribute('title') || 'See'
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
            this._title = 'See'
        } else {
            this._title = title
        }

        this.render()
    }

    render () {
        const title = this._title
        if (!title) return

        this.innerHTML = render({ title })
    }
}

export function register () {
    customElements.define(EyeRegular.TAG, EyeRegular)
}
