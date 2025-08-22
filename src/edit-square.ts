import { define as _define } from '@substrate-system/web-component/util'
import { render as renderEditSquare } from './render/edit-square.js'
export class EditSquare extends HTMLElement {
    static TAG_NAME = 'edit-square'
    _title: string

    constructor () {
        super()
        this._title = this.getAttribute('title') || 'Edit'
    }

    /**
     * Only watching for 'title'.
     */
    attributeChangedCallback (_name: string, _oldValue: string, newValue: string) {
        this._title = newValue
        this.render()
    }

    connectedCallback () {
        const title = this.getAttribute('title')
        if (title === undefined || title === null) {
            this._title = 'Edit'
        } else {
            this._title = title
        }

        this.render()
    }

    render () {
        const title = this._title
        if (!title) return
        this.innerHTML = renderEditSquare({ title })
    }
}

export function define () {
    _define(EditSquare.TAG_NAME, EditSquare)
}
