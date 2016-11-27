import $ from "jquery"


const $title = $("#title")
const $result = $("#result")

let lastQuery = null
let lastTimeout = null
$title.on('keyup', e => {
    const title = e.target.value
    if (title == lastQuery){
        return
    }

    lastQuery = title

    if (lastTimeout)
        window.clearTimeout(lastTimeout)

    lastTimeout = window.setTimeout( () => {
        getItems(title)
        .then( items => {
            const $items = items.map(item => $(`<li />`).text(item))
            $result.empty()
                .append($items)
        })
    }, 500)
})

// -----
// Library

function getItems(title) {
    console.log(`Querying ${title}`)
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve([title, "item 2", `Another ${Math.random()}`])
        }, 500 + (Math.random * 1000))
    })
} 