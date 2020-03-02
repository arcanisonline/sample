function classifySentiment(){
    var sentence = document.getElementById("sentence");
    var answer = document.getElementById("answer");

    
    answer.getElementsByTagName("p")[0].innerHTML = "You wrote: "+ sentence.value;
    answer.getElementsByTagName("p")[1].innerHTML = "Sentiment: positive";

}

async function loadModel(){
    
    const handler = "https://github.com/arcanisonline/sample/blob/master/model.json";
    const model = await tf.loadLayersModel(handler)
    console.log("LOADED");
}
