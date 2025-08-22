import { test } from '@substrate-system/tapzero'
import { waitFor } from '@substrate-system/dom'
import '../src/eye-regular.js'
import '../src/eye-slash.js'

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
    </div>`

    const el = await waitFor('eye-regular')
    const slash = await waitFor('eye-slash')

    t.ok(el, 'should find regular eye')
    t.ok(slash, 'should find slash eye')
})
