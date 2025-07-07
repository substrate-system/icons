import { test } from '@substrate-system/tapzero'
import { eyeSlash } from '../src/render/eye-slash.js'

test('render in node', t => {
    const eye = eyeSlash({ title: 'abc' })
    t.equal(typeof eye, 'string', 'should return a string')
    t.ok(eye.includes('<eye-slash'),
        'should include the cutom element name, b/c we are in node')
})
