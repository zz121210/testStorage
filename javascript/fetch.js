function fth(file){
    fetch(file).then(function(response){
        response.text().then(function(text){
            document.querySelector('#spot').innerHTML=text;
            alpa=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            count = 0;
            window.scrollTo(0,0);
        })
    })
}

    

