import { define as _define } from '@substrate-system/web-component/util'
import { eyeSlash as render } from './render/eye-slash'

// for document.querySelector
declare global {
    interface HTMLElementTagNameMap {
        'eye-slash': EyeSlash
    }
}

export class EyeSlash extends HTMLElement {
    static TAG = 'eye-slash'
    _title:string

    constructor () {
        super()
        this._title = this.getAttribute('title') || 'Hide'
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
            this._title = 'Hide'
        } else {
            this._title = title
        }

        this.render()
    }

    render () {
        const title = this._title

        this.innerHTML = render({ title })
    }
}

export function define () {
    _define(EyeSlash.TAG, EyeSlash)
}
