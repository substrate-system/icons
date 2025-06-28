export const githubLogo = function ():string {
    const html = `<svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 190 190"
        xml:space="preserve"
    >
        <!-- Vertical bars -->
        <!-- Left vertical bar (green) -->
        <rect x="45" y="0" width="40" height="100%" fill="#b8ce56" />
        <!-- Right vertical bar (black) -->
        <rect x="105" y="0" width="40" height="100%" fill="#b8ce56" />

        <!-- Horizontal bars -->
        <!-- Top horizontal bar (black) -->
        <rect x="0" y="50" height="40" fill="#b8ce56" width="100%" />
        <!-- Bottom horizontal bar (green) -->
        <rect x="0" y="110" height="40" fill="#b8ce56" width="100%" />
    </svg>`

    // running in node?
    return typeof window === 'undefined' ?
        `<github-logo>
            ${html}
        </github-logo>` :
        html
}

githubLogo.TAG = 'github-logo'
