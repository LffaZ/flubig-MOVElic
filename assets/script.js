const fullPath = document.location.pathname;
let filenameWithoutExtension = fullPath.substring(fullPath.lastIndexOf('/') + 1).split('.')[0];
filenameWithoutExtension = filenameWithoutExtension == 'train' ? 'kereta' : filenameWithoutExtension;
// console.log(filenameWithoutExtension); output = angkot / bus / kereta

function capitalizeEachWord(inputString) {
    // Split the input string into words
    var words = inputString.split(' ');
  
    // Capitalize the first letter of each word
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
  
    // Join the words back together
    var capitalizedString = words.join(' ');
  
    return capitalizedString;
  }

function changeImage(newImage) {
    const targetElements = document.getElementsByClassName('image-timeline-div');

    for (const targetElement of targetElements) {
        const imgElement = targetElement.querySelector('.image-timeline');
        console.log(newImage.replace("-"," "));
        
        imgElement.style.opacity = 0; // Set opacity ke 0 (transparan) sebelum pergantian gambar
        
        setTimeout(function() {
            // Changing image
            imgElement.src = `/assets/edukatif/${filenameWithoutExtension}/${newImage}`;
            // imgElement.title = newImage.substring(newImage.lastIndexOf('/') + 1).split('.')[0].replace("-"," ");
            // imgElement.title = imgElement.title.charAt(0).toUpperCase() + imgElement.title.slice(1);
            // console.log(imgElement);
            imgElement.classList.add('active');
            imgElement.style.opacity = 1; // Set opacity kembali ke 1 (normal) setelah pergantian gambar

            // Changing active year
            let nameImage = newImage.replace(".jpg", "").replace(".png", "")
            const lineElements = document.getElementById(nameImage);
            var activeYear = lineElements.querySelector('.line-year');
            activeYear.classList.add("active");
            console.log(activeYear);

            // Changing text content
            const nameElements = document.querySelector('.nama-model-timeline');
            nameElements.textContent = capitalizeEachWord(newImage.replace("-"," ").replace(".jpg", "").replace(".png", ""));
            console.log(nameElements.textContent)
        }, 200);
    }
}