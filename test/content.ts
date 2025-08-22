import { test } from '@substrate-system/tapzero'
import { render as eyeRegular } from '../src/render/eye-regular.js'
import { eyeSlash } from '../src/render/eye-slash.js'
import { render as editPencil } from '../src/render/edit-pencil.js'
import { render as editSquare } from '../src/render/edit-square.js'
import { render as saveCloud } from '../src/render/save-cloud.js'
import { render as logOut } from '../src/render/log-out.js'
import { render as newTab } from '../src/render/new-tab.js'
import { render as heart } from '../src/render/heart.js'
import { githubLogo } from '../src/render/github-logo.js'

test('eye-regular content validation', t => {
    const html = eyeRegular({ title: 'Test Eye' })

    // Check basic SVG structure
    t.ok(html.includes('<svg'), 'should contain svg element')
    t.ok(html.includes('class="icon eye-regular"'),
        'should have correct class')
    t.ok(html.includes('viewBox="0 0 576 512"'),
        'should have correct viewBox')
    t.ok(html.includes('role="image"'), 'should have image role')

    // Check accessibility
    t.ok(html.includes('aria-labelledby="test-eye"'),
        'should have aria-labelledby')
    t.ok(html.includes('<title id="test-eye">Test Eye</title>'),
        'should have title element')

    // Check content
    t.ok(html.includes('<path'), 'should contain path element')
    t.ok(html.includes('d="M288 80c-65.2 0-118.8 29.6-159.9 67.7'),
        'should have correct path data')

    // Check FontAwesome attribution
    t.ok(html.includes('Font Awesome Free'),
        'should include FontAwesome attribution')
})

test('eye-slash content validation', t => {
    const html = eyeSlash({ title: 'Test Eye Slash' })

    // Check basic SVG structure
    t.ok(html.includes('<svg'), 'should contain svg element')
    t.ok(html.includes('class="icon eye-slash"'),
        'should have correct class')
    t.ok(html.includes('viewBox="0 0 640 512"'),
        'should have correct viewBox')
    t.ok(html.includes('role="image"'), 'should have image role')

    // Check accessibility
    t.ok(html.includes('aria-labelledby="test-eye-slash"'),
        'should have aria-labelledby')
    t.ok(html.includes('<title id=test-eye-slash>Test Eye Slash</title>'),
        'should have title element')

    // Check content
    t.ok(html.includes('<path'), 'should contain path element')
    t.ok(html.includes('d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"'),
        'should have correct path data')

    // Check FontAwesome attribution
    t.ok(html.includes('Font Awesome Free'),
        'should include FontAwesome attribution')
})

test('edit-pencil content validation', t => {
    const html = editPencil({ title: 'Test Edit Pencil' })

    // Check basic SVG structure
    t.ok(html.includes('<svg'), 'should contain svg element')
    t.ok(html.includes('class="icon edit-pencil"'),
        'should have correct class')
    t.ok(html.includes('viewBox="0 0 512 512"'),
        'should have correct viewBox')
    t.ok(html.includes('role="image"'), 'should have image role')

    // Check accessibility
    t.ok(html.includes('aria-labelledby="test-edit-pencil"'),
        'should have aria-labelledby')
    t.ok(html.includes('<title id="test-edit-pencil">Test Edit Pencil</title>'),
        'should have title element')

    // Check content
    t.ok(html.includes('<path'), 'should contain path element')
    t.ok(html.includes('d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"'),
        'should have correct path data')

    // Check FontAwesome attribution
    t.ok(html.includes('Font Awesome Free'),
        'should include FontAwesome attribution')
})

test('edit-square content validation', t => {
    const html = editSquare({ title: 'Test Edit Square' })

    // Check basic SVG structure
    t.ok(html.includes('<svg'), 'should contain svg element')
    t.ok(html.includes('class="icon edit-square"'),
        'should have correct class')
    t.ok(html.includes('viewBox="0 0 512 512"'),
        'should have correct viewBox')
    t.ok(html.includes('role="image"'), 'should have image role')

    // Check accessibility
    t.ok(html.includes('aria-labelledby="test-edit-square"'),
        'should have aria-labelledby')
    t.ok(html.includes('<title id="test-edit-square">Test Edit Square</title>'),
        'should have title element')

    // Check content
    t.ok(html.includes('<path'), 'should contain path element')
    t.ok(html.includes('d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"'),
        'should have correct path data')

    // Check FontAwesome attribution
    t.ok(html.includes('Font Awesome Free'),
        'should include FontAwesome attribution')
})

test('save-cloud content validation', t => {
    const html = saveCloud({ title: 'Test Save Cloud' })

    // Check basic SVG structure
    t.ok(html.includes('<svg'), 'should contain svg element')
    t.ok(html.includes('class="icon save-cloud"'),
        'should have correct class')
    t.ok(html.includes('viewBox="0 0 640 512"'),
        'should have correct viewBox')
    t.ok(html.includes('role="image"'), 'should have image role')

    // Check accessibility
    t.ok(html.includes('aria-labelledby="test-save-cloud"'),
        'should have aria-labelledby')
    t.ok(html.includes('<title id="test-save-cloud">Test Save Cloud</title>'),
        'should have title element')

    // Check content
    t.ok(html.includes('<path'), 'should contain path element')
    t.ok(html.includes('d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128l-368 0zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39L296 392c0 13.3 10.7 24 24 24s24-10.7 24-24l0-134.1 39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z'),
        'should have correct path data')

    // Check FontAwesome attribution
    t.ok(html.includes('Font Awesome Free'),
        'should include FontAwesome attribution')
})

test('log-out content validation', t => {
    const html = logOut({ title: 'Test Log Out' })

    // Check basic SVG structure
    t.ok(html.includes('<svg'), 'should contain svg element')
    t.ok(html.includes('class="icon log-out"'),
        'should have correct class')
    t.ok(html.includes('viewBox="0 0 512 512"'),
        'should have correct viewBox')
    t.ok(html.includes('role="image"'), 'should have image role')

    // Check accessibility
    t.ok(html.includes('aria-labelledby="test-log-out"'),
        'should have aria-labelledby')
    t.ok(html.includes('<title id="test-log-out">Test Log Out</title>'),
        'should have title element')

    // Check content
    t.ok(html.includes('<path'), 'should contain path element')
    t.ok(html.includes('d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z'),
        'should have correct path data')

    // Check FontAwesome attribution
    t.ok(html.includes('Font Awesome Free'),
        'should include FontAwesome attribution')
})

test('new-tab content validation', t => {
    const html = newTab({ title: 'Test New Tab' })

    // Check basic SVG structure
    t.ok(html.includes('<svg'), 'should contain svg element')
    t.ok(html.includes('class="icon new-tab"'),
        'should have correct class')
    t.ok(html.includes('viewBox="0 0 512 512"'),
        'should have correct viewBox')
    t.ok(html.includes('role="image"'), 'should have image role')

    // Check accessibility
    t.ok(html.includes('aria-labelledby="test-new-tab"'),
        'should have aria-labelledby')
    t.ok(html.includes('<title id="test-new-tab">Test New Tab</title>'),
        'should have title element')

    // Check content
    t.ok(html.includes('<path'), 'should contain path element')
    t.ok(html.includes('d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z'),
        'should have correct path data')

    // Check FontAwesome attribution
    t.ok(html.includes('Font Awesome Free'),
        'should include FontAwesome attribution')
})

test('heart-outline content validation', t => {
    const html = heart()

    // Check basic SVG structure
    t.ok(html.includes('<svg'), 'should contain svg element')
    t.ok(html.includes('viewBox="0 0 122.88 109.57"'),
        'should have correct viewBox')
    t.ok(html.includes('xmlns="http://www.w3.org/2000/svg"'),
        'should have SVG namespace')

    // Check content
    t.ok(html.includes('<g>'), 'should contain group element')
    t.ok(html.includes('<path'), 'should contain path element')
    t.ok(html.includes('d="M65.46,19.57c-0.68,0.72-1.36,1.45-2.2,2.32l-2.31,2.41l-2.4-2.33c-0.71-0.69-1.43-1.4-2.13-2.09'),
        'should have correct path data')

    // Check it's not a FontAwesome icon (different source)
    t.ok(!html.includes('Font Awesome Free'),
        'should not include FontAwesome attribution')
})

test('github-logo content validation', t => {
    const html = githubLogo()

    // Check basic SVG structure
    t.ok(html.includes('<svg'), 'should contain svg element')
    t.ok(html.includes('viewBox="0 0 97.6 96"'),
        'should have correct viewBox')
    t.ok(html.includes('xmlns="http://www.w3.org/2000/svg"'),
        'should have SVG namespace')

    // Check content
    t.ok(html.includes('<path'), 'should contain path element')
    t.ok(html.includes('d="M48.9,0C21.8,0,0,22,0,49.2C0,71,14,89.4,33.4,95.9c2.4,0.5,3.3-1.1,3.3-2.4c0-1.1-0.1-5.1-0.1-9.1'),
        'should have correct path data')

    // Check it's not a FontAwesome icon (different source)
    t.ok(!html.includes('Font Awesome Free'),
        'should not include FontAwesome attribution')
})

test('default title handling', t => {
    // Test that components use default titles when none provided
    const eyeRegularDefault = eyeRegular()
    const editPencilDefault = editPencil()
    const saveCloudDefault = saveCloud()

    t.ok(eyeRegularDefault.includes('<title id="show">Show</title>'),
        'eye-regular should use default title "Show"')
    t.ok(editPencilDefault.includes('<title id="edit">Edit</title>'),
        'edit-pencil should use default title "Edit"')
    t.ok(saveCloudDefault.includes('<title id="save">Save</title>'),
        'save-cloud should use default title "Save"')
})

test('kebab-case title conversion', t => {
    // Test that titles are properly converted to kebab-case for IDs
    const html = eyeRegular({ title: 'My Custom Title' })

    t.ok(html.includes('aria-labelledby="my-custom-title"'),
        'should convert title to kebab-case for aria-labelledby')
    t.ok(html.includes('<title id="my-custom-title">My Custom Title</title>'),
        'should convert title to kebab-case for title id')
})

test('SVG structure validation', t => {
    const html = editPencil({ title: 'Test' })

    // Check for required SVG attributes
    t.ok(html.includes('xmlns="http://www.w3.org/2000/svg"'),
        'should have SVG namespace')
    t.ok(html.includes('viewBox='), 'should have viewBox attribute')
    t.ok(html.includes('role="image"'), 'should have image role')

    // Check for accessibility attributes
    t.ok(html.includes('aria-labelledby='),
        'should have aria-labelledby attribute')
    t.ok(html.includes('<title'), 'should have title element')

    // Check for icon class
    t.ok(html.includes('class="icon'), 'should have icon class')
})
