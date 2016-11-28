import Rx from "rxjs/Rx"
import {createSubscriber} from "./lib/util"

// Rx.Observable.interval(500)
//     .take(5)
//     .subscribe(createSubscriber("interval"))

// Rx.Observable.timer(1000, 500)
//     .take(3)
//     .subscribe(createSubscriber("timer"))

// Rx.Observable.of(["Hello, World", "hey"], 43, "dodol")
//     .subscribe(createSubscriber("of"))

// Rx.Observable.from(["Hello, World", "hey", 23, 4, 5])
//     .subscribe(createSubscriber("from"))

// const arr = [1,2,3,4,5]
// Rx.Observable.from(arr)
//     .map(x => x * 5)
//     .subscribe(createSubscriber("from"))

// Rx.Observable.from([new Error("HEY")])
//     .subscribe(createSubscriber("error"))

// Rx.Observable.throw(new Error("HEY"))
//     .subscribe(createSubscriber("error"))

// Rx.Observable.throw(1231323)
//     .subscribe(createSubscriber("error"))

// Rx.Observable.empty()
//     .subscribe(createSubscriber("empty"))

// let sideEffect = 0;
// const defer$ = Rx.Observable.defer(()=>{
//     sideEffect++;
//     return Rx.Observable.of(sideEffect)
// })

// defer$.subscribe(createSubscriber("defer$.one"))
// defer$.subscribe(createSubscriber("defer$.two"))
// defer$.subscribe(createSubscriber("defer$.three"))

Rx.Observable.never()
    .subscribe(createSubscriber("never"))

Rx.Observable.range(0,3)
    .subscribe(createSubscriber('range'))