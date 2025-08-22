import { test } from '@substrate-system/tapzero'
import { waitFor } from '@substrate-system/dom'
import '../src/eye-regular.js'
import '../src/eye-slash.js'
import '../src/edit-pencil.js'
import '../src/edit-square.js'
import '../src/save-cloud.js'
import '../src/log-out.js'
import '../src/new-tab.js'
import '../src/heart-outline.js'
import '../src/github-logo.js'
import './content.js'

test('icons', async t => {
    document.body.innerHTML += `<div class="icons-demo">
        <div>
            <eye-regular></eye-regular>
            regular eye
        </div>
        <div>
            <eye-slash></eye-slash>
            slash eye
        </div>
        <div>
            <edit-pencil></edit-pencil>
            edit pencil
        </div>
        <div>
            <edit-square></edit-square>
            edit square
        </div>
        <div>
            <save-cloud></save-cloud>
            save cloud
        </div>
        <div>
            <log-out></log-out>
            log out
        </div>
        <div>
            <new-tab></new-tab>
            new tab
        </div>
        <div>
            <heart-outline></heart-outline>
            heart outline
        </div>
        <div>
            <github-logo></github-logo>
            github logo
        </div>
    </div>`

    const eyeRegular = await waitFor('eye-regular')
    const eyeSlash = await waitFor('eye-slash')
    const editPencil = await waitFor('edit-pencil')
    const editSquare = await waitFor('edit-square')
    const saveCloud = await waitFor('save-cloud')
    const logOut = await waitFor('log-out')
    const newTab = await waitFor('new-tab')
    const heartOutline = await waitFor('heart-outline')
    const githubLogo = await waitFor('github-logo')

    t.ok(eyeRegular, 'should find regular eye')
    t.ok(eyeSlash, 'should find slash eye')
    t.ok(editPencil, 'should find edit pencil')
    t.ok(editSquare, 'should find edit square')
    t.ok(saveCloud, 'should find save cloud')
    t.ok(logOut, 'should find log out')
    t.ok(newTab, 'should find new tab')
    t.ok(heartOutline, 'should find heart outline')
    t.ok(githubLogo, 'should find github logo')
})
