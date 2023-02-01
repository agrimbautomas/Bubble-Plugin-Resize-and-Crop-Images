function(instance, properties, context) {
    const ASPECT_RATIO_WIDTH = properties.aspect_ratio_width;
    const ASPECT_RATIO_HEIGHT = properties.aspect_ratio_height;
    BleapCropper.setOptions(ASPECT_RATIO_WIDTH, ASPECT_RATIO_HEIGHT);
}