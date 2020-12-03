 var mylink=document.querySelectorAll(".Links li a");
var navi=document.querySelector(".nav-bar");


window.onscroll=function()
{
    if(pageYOffset>300)
    {
      navi.style.width="100%"
      navi.style.marginLeft="0";
    }
    else
    {  
        navi.style.width="1140px"
        navi.style.marginLeft="190px";

    }
}

mylink.forEach(function(link)
{
    
link.onclick=function()
{
   
for(var i=0;i<mylink.length;i++)
{

    mylink[i].classList.remove('active');
}

link.classList.add('active');
}


});