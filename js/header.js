const headerShrinkWidth = 1319;
const miniTitle = document.getElementById('title-mini');
header = document.getElementsByTagName('header')[0];

const miniLogo = document.getElementById('logo');
const title = document.getElementById('title-mini');


function shrinkHeader() {
    
    if (document.documentElement.scrollTop > 50 || document.body.clientWidth <= headerShrinkWidth) {
        header.className = 'shrink'; 
       
       
    } else {
        header.className = '';
        
       
        
    }
}








// Shrink header on mobile and resized window
body.onload = () => {
    if (body.clientWidth <= headerShrinkWidth) {
        header.className = 'shrink';
    } else {
        header.className = '';
    }
    swapMiniTitle();
};
body.onresize = () => {
    if (body.clientWidth <= headerShrinkWidth) {
        header.className = 'shrink';
    } else {
        header.className = '';
    }

    if (body.clientWidth > headerShrinkWidth) {
        if (nav.className == 'open') {
                body.style.overflow = null;
        }
    } else {
        if (nav.className == 'open') {
            body.style.overflow = 'hidden';
        }
    }
    swapMiniTitle();
};

function swapMiniTitle() {
    if (window.innerWidth < 432) {
        miniTitle.textContent = '1418';
       
   
    } else if (window.innerWidth < 1319) {
        miniTitle.textContent = 'TEAM 1418';
       
    
    }
    
    
}
document.addEventListener('scroll', shrinkHeader);

const navNew = document.getElementById("ohioskullemoji");
if(navNew){
    navNew.style.cursor = "pointer";
}
navNew.style.position = "absolute";
const robotnavText = document.getElementById("robotnavtext");

window.addEventListener('load', function(){
    const navID = document.getElementById("navid");
    navID.style.display = "none";
    
    let save = 1;

    navNew.addEventListener('click', function(){
        if (save===1){
        navID.style.display = "flex";  
      //  
        }  
        if (save===-1){
        navID.style.display = "none";  
            }  
        save=save*-1;
    })
    
    window.addEventListener('resize', function(){
        if(this.window.innerWidth>1100){
            navID.style.display = "none";   
            save=1;
        }
    })

    

})

window.addEventListener('resize', function(){
   if(this.window.innerWidth<1100){
       
   }
});


window.addEventListener('load', function(){
   if(this.window.innerWidth<1100){
       console.log("hi");
   }
})


