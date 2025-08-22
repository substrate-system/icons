import { define as _define } from '@substrate-system/web-component/util'
import { render as renderEditPencil } from './render/edit-pencil.js'

// for document.querySelector
declare global {
    interface HTMLElementTagNameMap {
        'edit-pencil': EditPencil
    }
}

export class EditPencil extends HTMLElement {
    static observedAttributes: string[] = ['title']
    static TAG = 'edit-pencil'
    _title: string

    constructor () {
        super()
        this._title = this.getAttribute('title') || 'Edit'
    }

    /**
     * Only watching for 'title'.
     */
    attributeChangedCallback (_name:string, _oldValue:string, newValue:string) {
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
        this.innerHTML = renderEditPencil({ title })
    }
}

export function define () {
    _define(EditPencil.TAG, EditPencil)
}
