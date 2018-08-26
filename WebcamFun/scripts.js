const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

async function getVideo () {
    try {
        const localMediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false});
        video.src = window.URL.createObjectURL(localMediaStream);
        video.play(); // emits the canplay event
    } catch (error) {
        console.error( error);
    }
}

// take a frame from video stream and paint to canvas
function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    // paint to canvas every 16ms
    // return interval to allow clearInterval()
    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        // take pixels out - massive array of colour values
        let pixels = ctx.getImageData(0, 0, width, height);

        // add an effect to the pixels
        // pixels = redEffect(pixels);
        // pixels = rgbSplit(pixels);
        pixels = greenScreen(pixels);
        
        // ghosting effect
        ctx.globalAlpha = 0.8;

        // put pixels back in
        ctx.putImageData(pixels, 0, 0);
    }, 16);
}

function takePhoto() {
    // play sound
    snap.currentTime = 0;
    snap.play();

    // take the data out of the canvas
    const data = canvas.toDataURL('image/jpeg'); //base64
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'hermoso');
    link.innerHTML = `<img src="${data}" alt="user image">`;
    strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
    // loop over every single pixel
    // +=4 to represent rgba values
    for (let i = 0; i < pixels.data.length; i+=4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 100; // Red
        pixels.data[i + 1] = pixels.data[i + 1] - 45; // Green
        pixels.data[i + 2] = pixels.data[i + 2] * 0.45; // Blue
        
    }
    return pixels;
}

function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4) {
        pixels.data[i - 150] = pixels.data[i + 0]; // Red
        pixels.data[i + 500] = pixels.data[i + 1]; // Green
        pixels.data[i + 550] = pixels.data[i + 2]; // Blue
    }
    return pixels;
}

function greenScreen(pixels) {
    const levels = {};

    document.querySelectorAll('.rgb input').forEach(input => {
        levels[input.name] = input.value;
    });

    for(i = 0; i < pixels.data.length; i+=4) {
        // get the rgba values
        red = pixels.data[i + 0];
        green = pixels.data[i + 1];
        blue = pixels.data[i + 2];
        alplha = pixels.data[i + 3];

        // if rgb colours are between min and max values
        // take them out as 4th pixel is the transparency value (alpha)
        if (red >= levels.rmin &&
            green >= levels.gmin &&
            blue >= levels.bmin &&
            green <= levels.gmax &&
            red <= levels.rmax &&
            blue <= levels.bmax) {
                // setting to 0 to make 100% transparent
                pixels.data[i + 3] = 0;
        }
    }

    return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);