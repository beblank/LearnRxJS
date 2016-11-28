"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function createInterval$(time) {
    return new _Rx2.default.Observable(function (observer) {
        var index = 0;
        var interval = setInterval(function () {
            console.log("Generating " + index);
            observer.next(index++);
        }, time);

        return function () {
            clearInterval(interval);
        };
    });
}

function take$(sourceObservable$, amount) {
    return new _Rx2.default.Observable(function (observer) {
        var count = 0;
        console.log("count " + count);
        var subscription = sourceObservable$.subscribe({
            next: function next(item) {
                ++count >= amount ? observer.complete() : observer.next(item);
            },
            error: function error(_error) {
                observer.error(_error);
            },
            complete: function complete() {
                observer.complete();
            }
        });
        return function () {
            return subscription.unsubscribe();
        };
    });
}

var everySecond$ = createInterval$(1000);
var firstFiveSeconds$ = take$(everySecond$, 5);
firstFiveSeconds$.subscribe((0, _util.createSubscriber)("one"));