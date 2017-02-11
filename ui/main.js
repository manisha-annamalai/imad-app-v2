console.log('Loaded!');
//change the text of the main content
var element= document.getElementById('main text');
element.innerHTML='keep smiling';
// move the image
var img=document.getElementById('image');
var marginLeft=0;
function moveright()
{
    marginLeft=marginLeft+2;
    img.style.marginLeft=marginLeft+px;
}
img.onclick = function()
{ var interval = setInterval(moveright, 20);
};