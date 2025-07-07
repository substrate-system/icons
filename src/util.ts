export function createRenderer (
    createHtml:(attrs?:Record<string, string|boolean>)=>string,
    tag:string
) {
    return function (attrs?:Record<string, string|boolean>):string {
        const html = createHtml(attrs)

        // running in node?
        return typeof window === 'undefined' ?
            `<${tag} class="icon">
                ${html}
            </${tag}>` :
            html
    }
}
