const fullPath = document.location.pathname;
let filenameWithoutExtension = fullPath.substring(fullPath.lastIndexOf('/') + 1).split('.')[0];
filenameWithoutExtension = filenameWithoutExtension == 'train' ? 'kereta' : filenameWithoutExtension;
console.log(filenameWithoutExtension);

function changeImage(newImage) {
    const targetElements = document.getElementsByClassName('image-timeline-div');

    for (const targetElement of targetElements) {
        const imgElement = targetElement.querySelector('.image-timeline');
        console.log(newImage.replace("-"," "));
        
        imgElement.style.opacity = 0; // Set opacity ke 0 (transparan) sebelum pergantian gambar
        
        setTimeout(function() {
            imgElement.src = `/assets/edukatif/${filenameWithoutExtension}/${newImage}`;
            imgElement.title = newImage.substring(newImage.lastIndexOf('/') + 1).split('.')[0].replace("-"," ");
            imgElement.title = imgElement.title.charAt(0).toUpperCase() + imgElement.title.slice(1);
            console.log(imgElement);
            imgElement.classList.add('active');
            imgElement.style.opacity = 1; // Set opacity kembali ke 1 (normal) setelah pergantian gambar
        }, 200);
    }
}