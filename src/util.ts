import { type Attrs } from '@substrate-system/web-component/attributes'

export function createRenderer (
    createHtml:(attrs?:Attrs)=>string,
    tag:string
) {
    return function (attrs?:Attrs):string {
        const html = createHtml(attrs)

        // running in node?
        return typeof window === 'undefined' ?
            `<${tag} class="icon">
                ${html}
            </${tag}>` :
            html
    }
}
