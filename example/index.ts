import '../src/eye-regular.js'
import '../src/eye-slash.js'
import '../src/edit-square.js'
import '../src/edit-pencil.js'
import './index.css'

document.body.innerHTML += `
    <div class="icons-demo">
        <div>
            <eye-regular></eye-regular>
            eye regular
        </div>

        <div>
            <eye-slash></eye-slash>
            eye slash
        </div>

        <div>
            <edit-square></edit-square>
            edit square
        </div>

        <div>
            <edit-pencil></edit-pencil>
            edit pencil
        </div>
    </div>
`
