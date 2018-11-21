function do_a(callback) {
    setTimeout(function () {
        // simulate a time consuming function
        console.log('`do_a`: this takes longer than `do_b`');

        // if callback exist execute it
        callback && callback();
    }, 3000);
}

function do_b() {
    console.log('`do_b`: now we can make sure `do_b` comes out after `do_a`');
}

do_a(function () {
    do_b();
});


// 1. Declare do_a as a function accepting one paramater called callback. This isn't executing yet.
// 2. do_a contains the in-built method setTimeout. This is going to wait 3000ms and then runs the anon function
        // the anon function console.logs the do_a message
        // if there was a callback argument given, it executes the callback
        // the setTimeout function has now finished
// 3. delare function do_b which logs a do_b message
// 4. Now we invoke do_a, supplying an anon function as the callback parameter
// 5. do_a executes: wait 3s, log do_a and then invokes whatever was supplied as the callback
// 6. the callback is an anon function which invokes do_b
// 7. do_b logs its message