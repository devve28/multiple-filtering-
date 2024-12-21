

function debounce(func, delay) {
    let timeoutId; 

    const debouncedFunction = function (...args) {
        
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        
        timeoutId = setTimeout(() => {
            func.apply(this, args); 
        }, delay);
    };

    
    debouncedFunction.cancel = function() {
        clearTimeout(timeoutId);
    };

    return debouncedFunction;
}

export default debounce;
