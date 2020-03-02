var model;
var tokenizer;

function classifySentiment(){
    var sentence = document.getElementById("sentence");
    var answer = document.getElementById("answer");

    
    answer.getElementsByTagName("p")[0].innerHTML = "You wrote: "+ sentence.value;
    answer.getElementsByTagName("p")[1].innerHTML = "Sentiment: positive";

}

async function loadModel(){
    
    await $.getJSON("script/word_index.json", function(json) {
    tokenizer = json;
});
    
    
    console.log(tokenizer['deafening'])

    model = await tf.loadLayersModel("scripts/model.json");
    console.log(model.summary());
}
