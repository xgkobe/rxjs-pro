const {Observable} = require('rxjs');

const stream$ = new Observable(subscriber => {
    subscriber.next([1,2,3]);
    setTimeout(() => {
        subscriber.next({ a: 1000 });
      }, 1000);
      setTimeout(() => {
        subscriber.next("end");
      }, 3000);
      setTimeout(() => {
        subscriber.complete();
      }, 4000);
})

let subscription2 = null;
//  延时1s后，启动流
setTimeout(() => {
    subscription2 = stream$.subscribe({
      next: v => console.log("ms stream2", v)
    });
}, 1000);

setTimeout(() => {
    subscription2.unsubscribe();
}, 1500);
