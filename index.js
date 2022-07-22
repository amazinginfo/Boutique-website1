let a = document.links;
Array.from(a).forEach(function(element) {

    if (String(element).includes("instagram")) {
        console.log(element.href);

    }
})