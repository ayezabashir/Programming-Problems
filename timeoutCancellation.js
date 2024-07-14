var cancellable = function(fn, args, t) {
    let canceled = false;
    const timeoutId = setTimeout(() => {
        if (!canceled) {
            fn(...args);
        }
    }, t);
    return function cancelFn() {
        canceled = true;
        clearTimeout(timeoutId);
    };
};
