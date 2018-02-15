var containerImg= $('#img-container');
const api= 'https://swapi.co/api/';
const people= 'people/';
const apipol= api+people;


$('#character').click(function(){
  containerImg.empty();
  console.log(api+people);
  $.getJSON(apipol, function(data){
    for(i in data.results){
      console.log(data.results[i]);
      containerImg.append(data.results[].name);
    }
  })
})
