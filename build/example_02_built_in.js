"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require("./lib/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

_Rx2.default.Observable.never().subscribe((0, _util.createSubscriber)("never"));

_Rx2.default.Observable.range(0, 3).subscribe((0, _util.createSubscriber)('range'));