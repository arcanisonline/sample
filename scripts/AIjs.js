var model;
var tokenizer;

function classifySentiment(){
    var sentence = document.getElementById("sentence");
    var answer = document.getElementById("answer");

    
    answer.getElementsByTagName("p")[0].innerHTML = "You wrote: "+ sentence.value;
    answer.getElementsByTagName("p")[1].innerHTML = "Sentiment: positive";
    var sequence = convert_word(phrase);
    
    var prediction = model.predict(sequence.reshape([1,120]));
    alert(prediction.print());

}

async function loadModel(){
    
    await $.getJSON("scripts/word_index.json", function(json) {
    tokenizer = json;
});
    
    
    console.log(tokenizer['deafening'])

    model = await tf.loadLayersModel("scripts/model.json");
    console.log(model.summary());
    
    var phrase = "I'm very happy about this movie";
    
    var sequence = convert_word(phrase);
    
    var prediction = model.predict(sequence.reshape([1,120]));
    console.log(prediction.print());
    
    
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

