const video = document.getElementById('video');
const btn = document.getElementById('btn');

const selectMediaStream = async () => { 
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = mediaStream;
        video.onloadedmetadata = () => {
            video.play();
        }
    } catch (err) {
        console.log("Error: ", err);
    }
}

btn.addEventListener('click', async () => {
    btn.disabled = true;

    await video.requestPictureInPicture();

    btn.disabled = false;
});

selectMediaStream()