function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0K3eALFru/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("label").innerHTML = 'I can hear:' + results[0].label;

        img = document.getElementById("cat.png");
        img1 = document.getElementById("dog.png");
        img2 = document.getElementById("lion.png");
        img3 = document.getElementById("african-grey-parrot.png");
        if (results[0].label == "lion") {
            img.src = 'lion.gif';
            img1.src = 'dog.png';
            img2.src = 'cat.png';
            img3.src = 'african-grey-parrot.png';


        } else if (results[0].label == "parrot") {

            img.src = 'lion.png';
            img1.src = 'dog.png';
            img2.src = 'cat.png';
            img3.src = 'parrot.gif';

        } else if (results[0].label == "Background noise") {
            img.src = 'lion.png';
            img1.src = 'dog.png';
            img2.src = 'Background noise.gif';
            img3.src = 'african-grey-parrot.png';


        } else if (results[0].label == "dog") {
            img.src = 'lion.png';
            img1.src = 'dog.gif';
            img2.src = 'cat.png';
            img3.src = 'african-grey-parrot.png';


        }



    }

}
