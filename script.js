var doba = 0.25;

document.body.style.animation = document.body.style.webkitAnimation = "zmizet " + doba + "s ease-in reverse";
function plynuleSkryt(el, delka) {
    document.body.style.animation = document.body.style.webkitAnimation = "";
    setTimeout(function() {
        document.body.style.animation = document.body.style.webkitAnimation = "zmizet " + delka + "s ease-in forwards";
    }, 20)
    setTimeout(
        function() {
          window.location = el.href;  
        },
        delka * 1000);
}

var odkazy = document.links;
for (var i = odkazy.length; i--; ) {
    odkazy[i].onclick = function() {
        plynuleSkryt(this, doba);
        return false;
    };
}