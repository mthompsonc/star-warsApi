var containerImg= $('#img-container');
const api= 'https://swapi.co/api/';
const people= 'people/';
const apipol= api+people;
const planet = 'planets/';
const apiplanet = api+planet;
const starship = 'starships/';
const apistarship = api+starship;

$('#character').click(function(){
  containerImg.empty();
  console.log(api+people);
  $.getJSON(apipol, function(data){
    for(i in data.results){
      console.log(data.results[i]);
      containerImg.append(data.results[i].name);
    }
  })
})

$('#starship').click(function(){
  containerImg.empty();
  console.log(api+starship);
  $.getJSON(apistarship, function(data){
    for(i in data.results){
      console.log(data.results[i]);
      containerImg.append(data.results[i].name);
    }
  })
})

$('#planet').click(function(){
  containerImg.empty();
  console.log(api+planet);
  $.getJSON(apiplanet, function(data){
    for(i in data.results){
      console.log(data.results[i]);
      containerImg.append(data.results[i].name);
    }
  })
})


