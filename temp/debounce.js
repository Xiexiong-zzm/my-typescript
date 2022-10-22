function debounce(fn, delay) {
    if (typeof fn !== 'function') return

    let timer
    return function () {
        if (timer) {
            clearTimeout(timer)
            timer = null
        } else {
            timer = setTimeout(() => {
                fn.apply(this, arguments)
                clearTimeout(timer)
                timer = null
            }, delay)
        }
    }
}


function throttle(fn, delay) {
    if (typeof fn !== 'function') return

    let timer
    return function () {
        if (timer) {
            return
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            clearTimeout(timer)
            timer = null
        }, delay)
    }
}