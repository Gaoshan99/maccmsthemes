var timeout= 500;
var closetimer= 0;
var ddmenuitem= 0;
function mopen(id)
{
    mcancelclosetime();
    if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
    ddmenuitem = document.getElementById(id);
    ddmenuitem.style.visibility = 'visible';
}
function mclose()
{
    if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}
function mclosetime()
{
    closetimer = window.setTimeout(mclose, timeout);
}
function mcancelclosetime()
{
    if(closetimer)
    {
        window.clearTimeout(closetimer);
        closetimer = null;
    }
}
document.onclick = mclose;