import Rx from 'rxjs/Rx';
import {createSubscriber} from "./lib/util"

// ----------
// Part 1

// const promise = new Promise((resolve, reject) => {
//     console.log("In Promise")
//     resolve("hey")
// })

// promise.then(item => console.log(item))

// const simple$ = new Rx.sourceObservable$(observer => {
//     console.log("Generating sourceObservable$s")
//     setTimeout(() => {
//         observer.next("An Item!")
//         setTimeout(() => {
//             observer.next("Another Item")
//             observer.complete()
//         }, 1000);
//     }, 1000);
// })

// const error$ = new Rx.sourceObservable$(observer => {
//     observer.error(new Error({whoa: "WHOA"}))
// })

// error$.subscribe(
//     item => console.log(`one.next ${item}`),
//     error => console.log(`one.error ${error.stack}`),
//     () => console.log("one complete")
// )

// setTimeout(() =>  {
//     simple$.subscribe({
//         next: item => console.log(`two next ${item}`),
//         error: error => {console.log(`two.error ${error}`)},
//         complete: () => console.log("two.complete")
//     })
// }, 3000);

function createInterval$(time){
    return new Rx.Observable(observer => {
        let index = 0;
        let interval = setInterval(() => {
            console.log(`Generating ${index}`)
            observer.next(index++)
        }, time)

        return () => { clearInterval(interval) }
    })
}



function take$(sourceObservable$, amount){
    return new Rx.Observable(observer => {
        let count = 0
        console.log( `count ${count}`)
        const subscription = sourceObservable$.subscribe({
            next: item => {  
                (++count >= amount) ?
                    observer.complete() : observer.next(item) },
            error: error => {observer.error(error)},
            complete: ()=> {observer.complete()}
        })
        return () => subscription.unsubscribe()
    })
}


const everySecond$ = createInterval$(1000)
const firstFiveSeconds$ = take$(everySecond$, 5)
firstFiveSeconds$.subscribe(createSubscriber("one"))
