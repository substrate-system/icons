import { define as github } from './github-logo.js'
import { define as pencil } from './edit-pencil.js'
import { define as square } from './edit-square.js'
import { define as eye } from './eye-regular.js'
import { define as eyeSlash } from './eye-slash.js'
import { define as newTab } from './new-tab.js'
import { define as saveCloud } from './save-cloud.js'
import { define as logOut } from './log-out.js'
export * as pencil from './edit-pencil.js'
export * as square from './edit-square.js'
export * as eye from './eye-regular.js'
export * as eyeSlash from './eye-slash.js'
export * as newTab from './new-tab.js'
export * as SaveCloud from './save-cloud.js'
export * as GithubLogo from './github-logo.js'

/**
 * Register everything, using default names.
 */
export function define () {
    pencil()
    square()
    eye()
    eyeSlash()
    newTab()
    saveCloud()
    logOut()
    github()
}
