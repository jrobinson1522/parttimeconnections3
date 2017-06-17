window.onload=function(){ 

var pageCounter = 1;
var animalContainer = document.getElementById("animalinfo");
var btn = document.getElementById("btn");

btn.addEventListener('click', function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
           var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData); 
        } else {
            alert("connected to server but returned error");
        }
        
};
    
ourRequest.onerror = function() {
    alert('connection error');
};
    
ourRequest.send();
pageCounter++;
if (pageCounter > 3) {
    btn.classList.add("hide-me");
}
    
});
function renderHTML(data){
    var htmlString = "";
    
    for (i = 0; i < data.length; i++) {
        htmlString +=  "<p>" + data[i].name + " is a " + data[i].species +" ";  
        for (ii = 0; ii < data[i].foods.likes.length; ii++) {
            if (ii == 0) {
            htmlString += data[i].foods.likes[ii];    
            } else {
                htmlString += " and eats " + data[i].foods.likes[ii];
            }
        }
        htmlString += '</p>'
    }
    
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
    
};









/*
var thejobs = [{
    "name": "Substitute Teacher",
    "species": "Kenosha, WI",
    "favfood": {
        "likes": ["tuna", "catnip"],
        "dislikes": ["All Details", "Keywords"]
    }
},
               {
    "name": "Javascript Programmer",
    "species": "Madison, WI",
    "favfood": {
        "likes": ["tuna", "catnip"],
        "dislikes": ["All Details", "Keywords"]
    }
},
               {
    "name": "Cleaning Assistant",
    "species": "Milwaukee, WI",
    "favfood": {
        "likes": ["tuna", "catnip"],
        "dislikes": ["All Details", "Keywords"]
    }
}
]



alert(thejobs[1].favfood);
*/


