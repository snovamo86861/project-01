


///function

key ="YX7AqB8m3C8As3mPU2OpZWGifXMvQ2h1";

actor = "Robin Williams";
actorNameSplit = actor.split(" ");

actorName = "";
for (var i=0; i < actorNameSplit.length; i++) {
    if (i>0) {
    actorName += "+" + actorNameSplit;
    }
}

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ actorName + "&api-key=" + key;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    for (i=0; i<5;i++) {
    console.log(response.response.docs[i].abstract);
    $("#nyt-col").append(JSON.stringify(response.response.docs[i].abstract));  
    $("#nyt-col").append("<br>"); 
    $("#nyt-col").append("<br>"); 
    }
  });

  function MoviePull () {
    var title = $(".movieinput").val();
    console.log(title);
    var MovieQuery = "https://www.omdbapi.com/?t=" + title + "&apikey=d58d1281";
    console.log(MovieQuery);
    
    $.ajax({
      url: MovieQuery,
      method: "GET"
    }).then(function(response) {
        console.log(response);
        $("#movietitle").text(title);
        var ActorsList = JSON.stringify(response.Actors);
        ActorsList = ActorsList.replace(/"/g,'');
        ActorsList = ActorsList.split(",");
        
        if (ActorsList[0] != null){
            $("#actor1").css('visibility', 'visible');
            $("#actor1").text(ActorsList[0]);
            ActorButtons2()}
            else {}
        
        function ActorButtons2 () {
        if (ActorsList[1] != null){
            $("#actor2").css('visibility', 'visible');
            $("#actor2").text(ActorsList[1]);
            ActorButtons3()}
            else {}}

        function ActorButtons3 () {
        if (ActorsList[2] != null){
            $("#actor3").css('visibility', 'visible');
            $("#actor3").text(ActorsList[2]);
            ActorButtons4()}
            else {}}

        function ActorButtons4 () {
        if (ActorsList[3] != null){
            $("#actor4").css('visibility', 'visible');
            $("#actor4").text(ActorsList[3]);
            ActorButtons5()}
            else {}}

        function ActorButtons5 () {
        if (ActorsList[4] != null){
            $("#actor5").css('visibility', 'visible');
            $("#actor5").text(ActorsList[4]);}
        else {}
        };
    });
  };
  

$("#movie-search").click(function() {
  MoviePull();
});