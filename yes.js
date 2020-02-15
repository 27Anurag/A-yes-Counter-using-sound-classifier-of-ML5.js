let classifier;
const options = {
  probabilityThreshold: 0.8
};
let label;
let v;
let count=0;

function preload() {
  classifier = ml5.soundClassifier('SpeechCommands18w', options);
}
function setup() {
  label = createDiv('Label:');
  classifier.classify(gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log("kuch gadbad hai");
  }

  label.html('Label:' + results[0].label)
  
  v=results[0].label

  
  if (v=="yes"){
    count+=1
    console.log(int(count)) 
    }
  
}
