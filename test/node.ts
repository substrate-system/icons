import { test } from '@substrate-system/tapzero'
import { eyeSlash } from '../src/render/eye-slash.js'
import { render as heart } from '../src/render/heart.js'
import { render as eyeRegular } from '../src/render/eye-regular.js'
import { render as editPencil } from '../src/render/edit-pencil.js'
import { render as editSquare } from '../src/render/edit-square.js'
import { render as saveCloud } from '../src/render/save-cloud.js'
import { render as logOut } from '../src/render/log-out.js'
import { render as newTab } from '../src/render/new-tab.js'
import { githubLogo } from '../src/render/github-logo.js'

test('eye-slash render in node', t => {
    const eye = eyeSlash({ title: 'abc' })
    t.equal(typeof eye, 'string', 'should return a string')
    t.ok(eye.includes('<eye-slash'),
        'should include the custom element name, b/c we are in node')
})

test('eye-regular render in node', t => {
    const eye = eyeRegular({ title: 'abc' })
    t.equal(typeof eye, 'string', 'should return a string')
    t.ok(eye.includes('<eye-regular'),
        'should include the custom element name, b/c we are in node')
})

test('edit-pencil render in node', t => {
    const pencil = editPencil({ title: 'abc' })
    t.equal(typeof pencil, 'string', 'should return a string')
    t.ok(pencil.includes('<edit-pencil'),
        'should include the custom element name, b/c we are in node')
})

test('edit-square render in node', t => {
    const square = editSquare({ title: 'abc' })
    t.equal(typeof square, 'string', 'should return a string')
    t.ok(square.includes('<edit-square'),
        'should include the custom element name, b/c we are in node')
})

test('save-cloud render in node', t => {
    const cloud = saveCloud({ title: 'abc' })
    t.equal(typeof cloud, 'string', 'should return a string')
    t.ok(cloud.includes('<save-cloud'),
        'should include the custom element name, b/c we are in node')
})

test('log-out render in node', t => {
    const logout = logOut({ title: 'abc' })
    t.equal(typeof logout, 'string', 'should return a string')
    t.ok(logout.includes('<log-out'),
        'should include the custom element name, b/c we are in node')
})

test('new-tab render in node', t => {
    const tab = newTab({ title: 'abc' })
    t.equal(typeof tab, 'string', 'should return a string')
    t.ok(tab.includes('<new-tab'),
        'should include the custom element name, b/c we are in node')
})

test('heart icon', t => {
    const h = heart()
    t.equal(typeof h, 'string', 'should return a string')
    t.ok(h.includes('<heart-outline'),
        'should include the element name b/c we are in node')
})

test('github-logo render in node', t => {
    const logo = githubLogo()
    t.equal(typeof logo, 'string', 'should return a string')
    t.ok(logo.includes('<github-logo'),
        'should include the element name b/c we are in node')
})
