import { test } from '@substrate-system/tapzero'
import { eyeSlash } from '../src/render/eye-slash.js'
import { render as heart } from '../src/render/heart.js'

test('render in node', t => {
    const eye = eyeSlash({ title: 'abc' })
    t.equal(typeof eye, 'string', 'should return a string')
    t.ok(eye.includes('<eye-slash'),
        'should include the cutom element name, b/c we are in node')
})

test('heart icon', t => {
    const h = heart()
    t.equal(typeof h, 'string', 'should return a string')
    t.ok(h.includes('<heart-outline'),
        'should include the element name b/c we are in node')
})
