//counter code
var button = document.getElementById('counter');
button.onclick = function(){
    //create a req. object
    var request = new XMLHttpRequest();
    //capture the res and store it in a variable
    request.onreadystatechange= function (){
        if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.Status ===200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
    }
    //not done yet
};
//make the request
request.open('GET', 'http://manisha-annamalai.imad.hasura-app.io/counter', true);
request.send(null);
};