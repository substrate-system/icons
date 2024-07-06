import { test } from '@bicycle-codes/tapzero'
import { waitFor } from '@bicycle-codes/dom'
import '../src/eye-regular.js'
import '../src/eye-slash.js'

test('example', async t => {
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
