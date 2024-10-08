import { register as pencil } from './edit-pencil.js'
import { register as square } from './edit-square.js'
import { register as eye } from './eye-regular.js'
import { register as eyeSlash } from './eye-slash.js'
export * as pencil from './edit-pencil.js'
export * as square from './edit-square.js'
export * as eye from './eye-regular.js'
export * as eyeSlash from './eye-slash.js'

/**
 * Register everything, using default names.
 */
export function regiser () {
    pencil()
    square()
    eye()
    eyeSlash()
}
