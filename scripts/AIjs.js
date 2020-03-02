function classifySentiment(){
    var sentence = document.getElementById("sentence");
    var answer = document.getElementById("answer");

    
    answer.getElementsByTagName("p")[0].innerHTML = "You wrote: "+ sentence.value;
    answer.getElementsByTagName("p")[1].innerHTML = "Sentiment: positive";

}

function async loadModel(){
    
    alert("LOADING 3");

    const model = await tf.loadLayersModel("scripts/model.json");
    console.log(model.summary);
}
                
                
 function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', '../scripts/model.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }
