var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function() {
        if(request.readystate=== XMLHttpRequest.Done) {
            if(request.status===200){
            var counter =request.responseText;
            var span =document.getElementById('count');
            span.innerHTML=counter.toString();
        }
    }
};
request.open('GET','http://u14311a05t4.imad.hasura-app.io/counter',true);
request.send(null);
};