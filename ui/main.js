console.log('Loaded!');
//change the text of the main content
var element= document.getElementById('main text');
element.innerHTML='keep smiling';
// move the image
var img=document.getElementById('image');
img.onclick = function()
{ img.style.marginLeft= '100px';
};