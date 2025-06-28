import { register } from '../src/index.js'
import './index.css'
import '../src/index.css'

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

        <div>
            <new-tab></new-tab>
            new tab
        </div>

        <div>
            <save-cloud title="the save title"></save-cloud>
            save cloud
        </div>

        <div>
            <log-out title="sign out"></log-out>
            log out
        </div>

        <div>
            <github-logo title="github"></github-logo>
            Github Logo
        </div>
    </div>
`
