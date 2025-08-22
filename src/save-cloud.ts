import { define as _define } from '@substrate-system/web-component/util'
import { render as renderSaveCloud } from './render/save-cloud.js'

export class SaveCloud extends HTMLElement {
    static observedAttributes: string[] = ['title']
    static TAG_NAME = 'save-cloud'
    _title: string

    constructor () {
        super()
        this._title = this.getAttribute('title') || 'Save'
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
            this._title = 'Save'
        } else {
            this._title = title
        }

        this.render()
    }

    render () {
        const title = this._title
        if (!title) return
        this.innerHTML = renderSaveCloud({ title })
    }
}

export function define () {
    _define(SaveCloud.TAG_NAME, SaveCloud)
}

