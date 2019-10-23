var cachedFile = undefined;
(function checkfile() {

    fetch('dev-clip.js').then((resp) => {
        return resp.text();
    }).then((text) => {
        if (cachedFile && cachedFile !== text) {
            document.location.reload(true);
        } else {
            cachedFile = text;
            setTimeout(checkfile, 1000);
        }
    });

})();