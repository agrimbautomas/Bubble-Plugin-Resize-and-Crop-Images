function(instance, properties) {
    runMain();
    setStyles();

    function runMain() {
        instance.canvas.append('<label id="bleap-file-upload">Resize and crop uploader</label><span id="crop-img-btn" data-method="getCroppedCanvas"></span>');
    }


    function setStyles() {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '#bleap-file-upload {     position: absolute; cursor: pointer; border: solid 1px #bdbdbd; border-radius: 5px; background: whitesmoke; color: #3a4d8f; font-size: 14px; height: calc(100% - 2px); width: calc(100% - 2px); display: grid; justify-content: center; align-items: center; text-align: center;}';
        document.getElementsByTagName('head')[0].appendChild(style);
    }
}