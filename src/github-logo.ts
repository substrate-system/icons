import { githubLogo } from './ssr.js'

export class GithubLogo extends HTMLElement {
    static TAG = 'github-logo'

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
