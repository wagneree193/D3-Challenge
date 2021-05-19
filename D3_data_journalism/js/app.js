// @TODO: YOUR CODE HERE!
d3.csv("data/data.csv").then(function(journalData){
    console.log(journalData);

    var state = journalData.map(data => data.state);

    console.log("state" , state);
})