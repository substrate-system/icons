import { define as _define } from '@substrate-system/web-component/util'
import { render } from './render/heart.js'

// for docuement.querySelector
declare global {
    interface HTMLElementTagNameMap {
        'heart-outline': HeartOutline
    }
}

export class HeartOutline extends HTMLElement {
    static TAG = 'heart-outline'

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
        return render()
    }
}

export function register () {
    customElements.define(HeartOutline.TAG, HeartOutline)
}

export function define () {
    _define(HeartOutline.TAG, HeartOutline)
}

