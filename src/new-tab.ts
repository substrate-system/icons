import { define as _define } from '@substrate-system/web-component/util'
import { render as renderNewTab } from './render/new-tab.js'

// for document.querySelector
declare global {
    interface HTMLElementTagNameMap {
        'new-tab': NewTab
    }
}

export class NewTab extends HTMLElement {
    static observedAttributes: string[] = ['title']
    static TAG = 'new-tab'
    _title: string

    constructor () {
        super()
        this._title = this.getAttribute('title') || 'New Tab'
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
            this._title = 'New tab'
        } else {
            this._title = title
        }

        this.render()
    }

    render () {
        const title = this._title
        if (!title) return
        this.innerHTML = renderNewTab({ title })
    }
}

export function define () {
    _define(NewTab.TAG, NewTab)
}
