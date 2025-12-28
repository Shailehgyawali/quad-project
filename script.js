document.body.style.margin='0';
document.body.style.padding='0';
document.body.style.height='100vh';
document.body.style.backgroundColor='darkgrey';
document.body.style.boxSizing='border-box';
document.body.style.overflow='hidden';

const container = document.getElementsByClassName("container")[0];
container.style.display='grid';
container.style.gridTemplateColumns='1fr 1fr';
container.style.gridTemplateRows='1fr 1fr';
container.style.height='100vh';
container.style.width='100vw';
container.style.gap='10px';
container.style.boxSizing='border-box';
container.style.padding='10px';


const quad=document.getElementsByClassName("quad");
const quad1=document.getElementById("quad1");
const quad2=document.getElementById("quad2");
const quad3=document.getElementById("quad3");
const quad4=document.getElementById("quad4");


for (let i=0;i<quad.length;i++){
    quad[i].style.backgroundColor='white';
quad[i].style.transition='all 0.3s ease-in-out';
quad[i].style.userSelect='none';
quad[i].style.boxSizing='border-box';
quad[i].style.display='flex';
quad[i].style.justifyContent='center';
quad[i].style.alignItems='center';
quad[i].style.color='transparent';
quad[i].style.borderRadius='10px';
quad[i].style.fontSize='34px';
quad[i].style.fontFamily='Arial, sans-serif';
quad[i].style.fontWeight='bold';}



quad1.addEventListener('mouseenter',()=>{
    quad1.style.backgroundColor='#f7eb0fff';
    quad1.style.color='black';
    quad1.style.cursor='pointer';
    quad1.textContent="quad-1";
    quad1.style.boxShadow='5px 5px 20px #0b0c0cff';
    quad1.style.transition='all 0.3s ease-in-out' 
    quad1.style.zIndex = '10';
    
});
quad1.addEventListener('mouseleave',()=>{
    quad1.style.backgroundColor='white';
    quad1.style.color='transparent';
    quad1.style.boxShadow='none';
    quad1.style.zIndex = '0';
    
})


quad2.addEventListener('mouseenter',()=>{
    quad2.style.backgroundColor='#ef2435ff';
    quad2.style.color='black';
    quad2.style.cursor='grab';
    quad2.textContent="quad-2";
    quad2.style.boxShadow='-5px 5px 20px #070504ff';
    quad2.style.transition='all 0.3s ease-in-out'
    quad2.style.zIndex = '10';
    
});
quad2.addEventListener('mouseleave',()=>{
    quad2.style.backgroundColor='white';
    quad2.style.color='transparent';
    quad2.style.boxShadow='none';
    quad2.style.zIndex = '0';

})

quad3.addEventListener('mouseenter',()=>{
    quad3.style.backgroundColor='#6e0ef5ff';
    quad3.style.color='black';
    quad3.style.cursor='crosshair';
    quad3.textContent="quad-3";
    quad3.style.boxShadow='5px -5px 20px #0f130fff';
    quad3.style.transition='all 0.3s ease-in-out'
    quad3.style.zIndex = '10';
});
quad3.addEventListener('mouseleave',()=>{
    quad3.style.backgroundColor='white';
    quad3.style.color='transparent';
    quad3.style.boxShadow='none';
    quad3.style.zIndex = '0';

})

quad4.addEventListener('mouseenter',()=>{
    quad4.style.backgroundColor='#0fe942ff';
    quad4.style.color='black';
    quad4.style.cursor='resize';
    quad4.textContent="quad-4";
    quad4.style.boxShadow='-5px -5px 20px #070706ff';
    quad4.style.transition='all 0.3s ease-in-out'
    quad4.style.zIndex = '10';
});
quad4.addEventListener('mouseleave',()=>{
    quad4.style.backgroundColor='white';
    quad4.style.color='transparent';
    quad4.style.boxShadow='none';
    quad4.style.zIndex = '0';

})