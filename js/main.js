

function onload(){
        document.getElementById('home').style.display = "block";
        document.getElementById('sales').style.display = "none";
        document.getElementById('contact').style.display = "none";
        document.getElementById('about').style.display = "none";
}
onload();

function showController(pageName){
    if(pageName == 'home'){
        document.getElementById('home').style.display = "block";
        document.getElementById('sales').style.display = "none";
        document.getElementById('contact').style.display = "none";
        document.getElementById('about').style.display = "none";
    }else if(pageName == 'about'){
        document.getElementById('home').style.display = "none";
        document.getElementById('sales').style.display = "none";
        document.getElementById('contact').style.display = "none";
        document.getElementById('about').style.display = "block";
    }else if(pageName == 'sales'){
        document.getElementById('home').style.display = "none";
        document.getElementById('sales').style.display = "block";
        document.getElementById('contact').style.display = "none";
        document.getElementById('about').style.display = "none";
    }else if(pageName == 'contact'){
        document.getElementById('home').style.display = "none";
        document.getElementById('sales').style.display = "none";
        document.getElementById('contact').style.display = "block";
        document.getElementById('about').style.display = "none";
    }
}
