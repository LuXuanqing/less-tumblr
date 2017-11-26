console.log('lt-less tumblr loaded!')
function filterText() {
    reblogs = document.querySelectorAll('.reblog-content')
    function hide(el) {
        el.style.display = 'none'
    }
    function hasKeyWord(text) {
        if (text.search('QQ')>-1) {
            return true
        } else if (text.search('微信')>-1) {
            return true
        } else if (text.search('公众号')>-1) {
            return true
        } else {
            return true
        }
        
    }
    reblogs.forEach(element => {
        text = element.innerText
        if (text.length > 50 || hasKeyWord(text)) {
            element.innerText = '<-----filtered content---->'
            console.log('lt-filtered')
        }
    })
}
filterText()


function getScrollPercent() {
    var scrollTop = document.documentElement.scrollTop
    var scrollHeight = document.documentElement.scrollHeight
    return scrollTop/scrollHeight
}
function velocity() {
    var pre = 0
    function delta() {
        console.log('lt-pre-'+pre)
        var now = getScrollPercent()
        console.log('lt-now-'+now)
        delta = now - pre
        pre = now
        return delta
    }
    return delta
}
var delta = velocity()
document.onscroll = function () {
    result = delta()
    if (result < -0.1) {
        console.log('lt-more post loaded')
        filterText()
    }
}