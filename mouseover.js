/*
Simple Image Trail script- By JavaScriptKit.com
Visit http://www.javascriptkit.com for this script and more
This notice must stay intact

OK So you want your fucking notice but that doesn't change the fact
that this script sucks. I'm never using anyone elses javascript again.
*/

var offsetfrommouse=[15,15];

var curwidth = 100;
var curheight = 100;

if (document.getElementById || document.all) {
    document.write('<div id="trailimageid" style="position:absolute;visibility:hidden;left:0px;top:0px;z-index:1000;"></div>');
}

function gettrailobj() {
    if (document.getElementById)
        return document.getElementById("trailimageid").style;
    else if (document.all)
        return document.all.trailimageid.style;
}

function gettrailobjnostyle() {
    if (document.getElementById)
        return document.getElementById("trailimageid");
    else if (document.all)
        return document.all.trailimageid;
}

function truebody() {
    return (!window.opera && document.compatMode &&
            document.compatMode!="BackCompat") ?
        document.documentElement : document.body
}

function showtrail(imagename,title,description,width,height) {
    document.onmousemove=followmouse;

    if (width > 0) curwidth = width;
    if (height > 0) curheight = height;

    newHTML = '<div style="padding: 5px; background-color: #FFF; border: 1px solid #888;">';

    if (title != '') newHTML = newHTML + '<b>' + title + '</b><div></div>';
    if (description != '') newHTML = newHTML + 'Follow the link for more information.<br/>';

    newHTML = newHTML + '<div align="center"><img src="' +
              imagename + '" width="' + width + '" height="' +
              height + '" border="1"></div>';

    newHTML = newHTML + '</div>';

    gettrailobjnostyle().innerHTML = newHTML;
    
    //    gettrailobjnostyle().innerHTML = 'hello HELLO';

    gettrailobj().visibility="visible";
}


function hidetrail(){
    gettrailobj().visibility="hidden";
    document.onmousemove="";
    gettrailobj().left="-1000px";
    gettrailobj().top="-1000px";
}

function followmouse(e){
    var xcoord=offsetfrommouse[0];
    var ycoord=offsetfrommouse[1];

    var docwidth = truebody().scrollLeft + truebody().clientWidth;
    var docheight = truebody().scrollTop + truebody().clientHeight;

    var top = -1000;
    var left = -1000;
    var x = 0;
    var y = 0;

    if (typeof e != "undefined") {
        x = e.pageX; y = e.pageY;
    } else if (typeof window.event != "undefined") {
        x = event.clientX + truebody().scrollLeft; y = event.clientY + truebody().scrollTop;
    } else {
        return;
    }

    var width = gettrailobjnostyle().clientWidth;
    var height = gettrailobjnostyle().clientHeight;

    if ((docwidth - x - xcoord) < (width)) {
        left = x - 5 - width;
        //left = docwidth - curwidth - 25;
    } else { left = x + xcoord; }
    
    //    top = y - height - ycoord/* - 15*/;

    if ((docheight - y - ycoord) < (height)) {
        top = y - 5 - height;
        //        top = docheight - curheight - 25;
    } else { top = y + ycoord; }

    gettrailobj().top = top + "px";
    gettrailobj().left = left + "px";
}


