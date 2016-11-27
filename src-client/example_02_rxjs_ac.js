import $ from "jquery"
import Rx from "rxjs/Rx"

const $title = $("#title")
const $result = $("#result")

Rx.Observable.fromEvent($title, "keyup")
    .map(e => e.target.value)
    .distinctUntilChanged()
    .debounceTime(500)
    .switchMap(getItems)
    .subscribe( items => {
        $result.empty()
            .append(items.map(item => $(`<li />`).text(item)))
    })

// const keyUps$ = Rx.Observable.fromEvent($title, "keyup")
// const queries$ = keyUps$
//     .map(e => e.target.value)
//     .distinctUntilChanged()
//     .debounceTime(500)
//     .switchMap(getItems)

// queries$.subscribe(items => {
//     $result.empty()
//         .append(items.map(x => $(`<li />`).text(x)))
// })

function getItems(title) {
    console.log(`Querying ${title}`)
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve([title, "item 2", `Another ${Math.random()}`])
        }, 500 + (Math.random * 5000))
    })
} 
