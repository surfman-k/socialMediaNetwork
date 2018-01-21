var line = "\n";

var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};


function addId(){
  for(var inde in data){
    data[inde].id = inde;
  }
}
addId();

function addFollowers(){
  for(var key in data){
    data[key].followers = [];
  }
  for(var index in data){
      var path = data[index].follows;
    for (var i = 0; i < path.length; i++){
      data[path[i]].followers.push(index);
    }
  }
}
addFollowers();

function addOldFollowers(){
  for(var inde in data){
    data[inde].followersOver30 = [];
  }
  for(var key in data){
    var path = data[key].followers; 

  for (var i = 0; i < path.length; i++){
    if(data[path[i]].age > 30)
      data[key].followersOver30.push(data[path[i]].id);
  }
  }
}
addOldFollowers();

function addOldFollows(){
  for(var inde in data){
    data[inde].followsOver30 = [];
  }
  for(var key in data){
    var path = data[key].follows; 

  for (var i = 0; i < path.length; i++){
    if(data[path[i]].age > 30)
      data[key].followsOver30.push(data[path[i]].id);
   }
  }
}
addOldFollows();

function listEveryone(){
  addFollowers();
  for(var key in data){
    var path = data[data[key].follows] ;
    var thatfollows = [];
    var thatfollowed = [];
    for (i = 0; i < data[key].follows.length; i++){
      thatfollows.push(data[data[key].follows[i]].name);
    }
    for (j = 0; j < data[key].followers.length; j++){
      thatfollowed.push(data[data[key].followers[j]].name);
  }
   console.log(data[key].name + " follows " + thatfollows.join(", ") + " and is followed by " + thatfollowed.join(", ") + "\n");
  }
}
listEveryone();

function followsMost(){
  var arr = [];
  var topfollower = 0;
  var output = "";
  for(var key in data){
    arr.push(data[key].follows.length);
  }
  for(var i = 0; i < arr.length-1; i++){
    if(arr[i] > arr[i+1])
      topfollower = i;
  }
  if(topfollower <= 9) 
    output = "f0" + (topfollower + 1);
  else
    output = "f" + (topfollower + 1);

  console.log(data[output].name + " follows the most people. They follow " + data[output].follows.length + " people." + "\n");
}
followsMost();

function followedByMost(){
  var arr = [];
  var popular = 0;
  var output = "";
  for(var key in data){
    arr.push(data[key].followers.length);
  }
  for(var i = 0; i < arr.length; i++){
    if(arr[i]+1 > arr[i])
      popular = i;
  }
  if(popular <= 9) 
    output = "f0" + (popular + 1);
  else
    output = "f" + (popular + 1);

  console.log(data[output].name + " is followed by the most people. They are followed by " + data[output].followers.length + " people." + "\n");
}
followedByMost();

function followedByMostOlder(){
  
   var arr = [];
   var popularOld = 0;
   var outputOld = "";

    for(var key in data){
     arr.push(data[key].followersOver30.length);
    }
   
    for(var i = 0; i < arr.length; i++){
    if(arr[i]+1 > arr[i])
      popularOld = i;
    }


    if(popularOld <= 9) 
      outputOld = "f0" + (popularOld + 1);
    else
      outputOld = "f" + (popularOld + 1);
    
    
    console.log(data[outputOld].name + " has the most people over 30 following them with " + data[outputOld].followersOver30.length + " people." + "\n");
}
followedByMostOlder();

function followedMostOlder(){
  
   var arr = [];
   var followsOld = 0;
   var outputOld = "";

    for(var key in data){
     arr.push(data[key].followsOver30.length);
    }
   
    for(var i = 0; i < arr.length; i++){
    if(arr[i] > arr[i]+1)
      followsOld = i;
    }


    if(followsOld <= 9) 
      outputOld = "f0" + (followsOld + 1);
    else
      outputOld = "f" + (followsOld + 1);
    
    
    console.log(data[outputOld].name + " follows the most people over 30 with " + data[outputOld].followsOver30.length + " people." + "\n");
}
followedMostOlder();

















//console.log(data);




