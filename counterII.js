var createCounter = function(init) {
    let currentValue=init;
    return obj={
        increment:function(){
            return ++currentValue;
        },
        decrement:function(){
            return --currentValue;
        },
        reset:function(){
            currentValue=init;
            return currentValue;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */