// array of images
const images = [
    './mm4.jpg', // index 0 --> images[0]
    'mm3.jpg', // index 1 --> images[1]
    'mm2.jpg', // index 2 --> images[2]
    'mm1.jpg', // index 3 --> images[3]
    'mm5.jpg' // index 4 --> images[4]
];
const firstImage = 0;
const lastImage = images.length - 1;
let currentImage = 0;
// next
const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', () => {

    // get image tag
    const imageTag = document.getElementById('image');
    currentImage++; // 1
    if (currentImage >= lastImage) {
        currentImage = 4;
    }
    imageTag.src = images[currentImage];
    document.getElementById('info').innerHTML = (currentImage + 1) + '/5';

});
// prev
const preBtn = document.getElementById('prev');
preBtn.addEventListener('click', () => {

    // get image tag
    const imageTag = document.getElementById('image');
    currentImage--; // 1
    if (currentImage <= firstImage) {
        currentImage = 0;
    }
    imageTag.src = images[currentImage];
    document.getElementById('info').innerHTML = (currentImage + 1) + '/5';

});