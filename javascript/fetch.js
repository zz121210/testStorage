function fth(file){
    fetch(file).then(function(response){
        response.text().then(function(text){
            document.querySelector('#spot').innerHTML=text;
        })
    })
}

    

