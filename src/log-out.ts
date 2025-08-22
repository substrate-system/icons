import { define as _define } from '@substrate-system/web-component/util'
import { render as renderLogOut } from './render/log-out.js'

export class LogOut extends HTMLElement {
    static observedAttributes: string[] = ['title']
    static TAG_NAME = 'log-out'
    _title: string

    constructor () {
        super()
        this._title = this.getAttribute('title') || 'Logout'
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
            this._title = 'Logout'
        } else {
            this._title = title
        }

        this.render()
    }

    render () {
        const title = this._title
        if (!title) return
        this.innerHTML = renderLogOut({ title })
    }
}

export function define () {
    _define(LogOut.TAG_NAME, LogOut)
}
