import { register } from '../src/index.js'
import './index.css'

register()

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
