document.addEventListener("DOMContentLoaded", function() {
    var tabs = document.getElementsByClassName("tab");
    var contents = document.getElementsByClassName("content");

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", function(event) {
            event.preventDefault();
            var target = this.getAttribute("href").substr(1);
            showContent(target);
        });
    }

    function showContent(contentId) {
        for (var i = 0; i < contents.length; i++) {
            contents[i].classList.remove("show");
        }

        var selectedContent = document.getElementById(contentId);
        selectedContent.classList.add("show");
    }
});
