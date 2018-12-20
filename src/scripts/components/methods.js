// Methods
function resetClass(el, state) {
    if (el.length === undefined) {
        el.classList.remove(state);
    } else {
        el.forEach(function (el) {
            el.classList.remove(state);
        });
    }
}

function toggleDisplay(el, value) {
    if (el.length === undefined) {
        el.style.display = value
    } else {
        el.forEach(function (el) {
            el.style.display = value
        })
    }
}

function fadeIn(el, display, style) {
    toggleDisplay(el, display);
    setTimeout(function () {
        if (el.length === undefined) {
            el.classList.add(style);
        } else {
            el.forEach(function (el) {
                el.classList.add(style);
            });
        }
    }, 100)
}

function fadeOut(el, style, time) {
    if (el.length === undefined) {
        el.classList.remove(style);
    } else {
        el.forEach(function (el) {
            el.classList.remove(style);
        });
    }
    setTimeout(function () {
        toggleDisplay(el, 'none');
    }, time)
}

function outsideClick(el, callback) {
    document.addEventListener("click", function (e) {
        var target = e.target;
        if (target.closest(el)) return;
        callback();
    });
}