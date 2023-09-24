var navelement = document.querySelectorAll('.navbar a');
for (var i = 0; i < navelement.length; i++) {
    navelement[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetname = this.textContent.trim().toLowerCase();
        var targetsection = document.getElementById(targetname);
        var dist = targetsection.getBoundingClientRect();
        var target = dist.y;
        if (targetname == "home" || targetname == "about") {
            target = target - 18;
        }
        var curr = 0;
        var interval = setInterval(function () {
            if (curr >= target) {
                clearInterval(interval);
                return;
            }
            curr += 20;
            window.scrollBy(0, 20);
        }, 5);

    });
}
var progressbars = document.querySelectorAll('.show-progress div');
var skillsection = document.getElementById('skillcontainer');
window.addEventListener('scroll', checkscroll);
var animationdone = false;

function fillprogress() {
    for (let bar of progressbars) {
        let targetwidth = bar.getAttribute('fillcolor');
        let currentwidth = 0;
        let interval = setInterval(function () {
            if (currentwidth > targetwidth) {
                clearInterval(interval);
                return;
            }
            currentwidth++;
            bar.style.width = currentwidth + '%';
        }, 10);
    }
}

function checkscroll() {
    var cordinates = skillsection.getBoundingClientRect();
    if (!animationdone && cordinates.top < window.innerHeight) {
        animationdone = true;
        fillprogress();
    }
}
