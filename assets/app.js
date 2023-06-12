const btn = document.getElementsByTagName('button');

const colors = ['#5D5D81','#3B3355', '#2BF808', '#04C1DE', '#F3C23E', '#DB6E06', '#919820', '#ED66BB' /*color: white*/, '#C63D49', '#5D73B1', '#8230EC','#B25F17' ];

function changeColor(){
    btn.style.backgroundColor = colors[0];
    alert("Vous changez de couleur");
}

