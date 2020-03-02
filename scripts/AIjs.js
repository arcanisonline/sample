var model;
var tokenizer;

function classifySentiment(){
    var sentence = document.getElementById("sentence");
    var answer = document.getElementById("answer");

    
    answer.getElementsByTagName("p")[0].innerHTML = "You wrote: "+ sentence.value;
    var sequence = convert_word(sentence.value.toLowerCase());
    
    var prediction = model.predict(sequence.reshape([1,120]));
    if(prediction.arraySync()[0]>=0.5){
        answer.getElementsByTagName("p")[1].innerHTML = "Sentiment: positive";
    }
    else{
        answer.getElementsByTagName("p")[1].innerHTML = "Sentiment: negative";
    }


}

async function loadModel(){
    
    await $.getJSON("scripts/word_index.json", function(json) {
    tokenizer = json;
});
    
    
    console.log(tokenizer['deafening'])

    model = await tf.loadLayersModel("scripts/model.json");
    
    
}

function convert_word(phrase){
    var words = phrase.split(" ");
    var tokenized = [];
    for(var i = 0; i<words.length; i+=1){
        
        tokenized.push(tokenizer[words[i]]);
    }
    
    for(var i = words.length; i<120;i++){
        
        tokenized.push(0);
    }
    
    return tf.tensor1d(tokenized);
}

