import { define as _define } from '@substrate-system/web-component/util'
import { githubLogo } from './render/github-logo.js'

// for docuement.querySelector
declare global {
    interface HTMLElementTagNameMap {
        'github-logo': GithubLogo
    }
}

export class GithubLogo extends HTMLElement {
    static TAG = 'github-logo'

    constructor () {
        super()
        this.classList.add('icon')
    }

    connectedCallback () {
        if (!this.innerHTML) {
            this.innerHTML = this.render()
        }
    }

    render ():string {
        return githubLogo()
    }
}

export function register () {
    customElements.define(GithubLogo.TAG, GithubLogo)
}

export function define () {
    _define(GithubLogo.TAG, GithubLogo)
}
