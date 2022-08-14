function changeColor(){
    var head1 = document.getElementById("head1")
    var head2 = document.getElementById("head2")
    setInterval(function() {
        let c2;
        if(head1.style.color == "red"){
            var c1 = "blue"
        }
        else{
            c1 = "red";
        }

        if(head2.style.color == "green"){
            c2 = "red"
        }
        else{
            c2 = "green"
        }
        head1.style.color = c1;
        head2.style.color = c2;
    }, 1000);
}

