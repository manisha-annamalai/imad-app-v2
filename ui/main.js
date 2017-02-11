console.log('Loaded!');
//change the text of the main content
var element= document.getElementById('main text');
element.innerHTML='keep smiling';
// move the image
var img=document.getElementById('image');
var marginleft=0;
function moveright()
{
    marginleft=marginleft+10;
    img.style.marginleft=marginleft+px;
}
img.onclick = function()
{ var interval =setInterval(moveright, 100);
};