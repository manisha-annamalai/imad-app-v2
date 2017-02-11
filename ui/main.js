//counter code
var button = document.getElemnetById('counter');
button.onclick = function(){
    //create a req. object
    var request = new XMLHttpRequest();
    //capture the res and store it in a variable
    request.onreadyStatechange= function (){
        if(request.readystate === XMLHttpRequest.DONE){
            //take some action
            if(request.Status ===200){
                var counter = request.responseText;
                var span = document.getElemnetById('count');
                span.innerHTML = counter.toString();
            }
    }
    //not done yet
};
//make the request
request.open('GET', 'http://manisha-annamalai.imad.hausura-app.io/counter', true);
request.send(null);
};