let box =   [
        [0,1,2,3,4,5],
        ['blue','green','yellow', 'red', 'lila', 'black'],
        ['Kazachstan','Uzbekistan', 'Pakistan', 'Kirgistan','Tibet'],
        ['Demokritos', 'Plato', 'Sokrates', 'Aristoteles', 'Sara <3'],
        ['jan', 'feb', 'mar'],
        [],
        [1,22]
        ];

function search() {
    let lbl;
    
    let text= box[document.getElementById('x').value][document.getElementById('y').value];
    
    if (text == null) {
        text= 'Number too high!'        
        document.getElementById('output').innerHTML= text;
    }else{
        document.getElementById('output').innerHTML= text;
    }
}

document.getElementById('programcek').addEventListener('click', function(){
    let krabica = document.getElementById('xcko').value
    for (let i = 1; i<=krabica; i++){
        document.getElementById('output1').innerHTML += i + ' ';
    }

});
