
function shareblock(){
    let share = document.getElementById("share")
    let btn = document.getElementById('btn')
    if(share.style.display === 'block'){
        share.style.display = 'none'
        btn.style.backgroundColor = 'hsl(210, 46%, 95%)'

    }else{
        share.style.display = 'block'
        btn.style.backgroundColor = 'hsl(217, 19%, 35%)'
    }

    console.log("ji")
}

