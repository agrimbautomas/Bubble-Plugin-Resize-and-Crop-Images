function(instance, context) {
    
	instance.canvas.append('<label id="bleap-file-upload"><input type="file" id="bleap-uploader"><img><span>Click to upload an image</span></label><span id="crop-img-btn" data-method="getCroppedCanvas"></span>');


    $(document).on('click', '#bleap-cropper-popup-save-button', function () {
        uploadCroppedImage()
    });

    function uploadCroppedImage(){
        let fileName = BleapCropper.getUploadedImageName();
        const imgInBase64 = BleapCropper.getImgInBase64();
        const tmp = imgInBase64.split(',')
        const data = tmp[1]

        context.uploadContent(fileName, data, uploadCallback);
    }

    function uploadCallback(err, url) {
        if (url)        
            instance.triggerEvent('cropping_finishes');
        else 
            console.log('callback error: ' + err)

    }
    
}