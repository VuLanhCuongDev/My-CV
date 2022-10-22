var lstsubtitle = ["Programmer", "Developer","ASP.NET Core MVC"]
var index = 0
var dodaichuoi = 0
var solanlap = 0
function loadsubtitle() {
    document.getElementById("subtitle").innerHTML = lstsubtitle[index].substring(0, dodaichuoi)
    if(solanlap == 0)
    {
        dodaichuoi++
    }
    else
    {
        dodaichuoi--
    }
    if(dodaichuoi > lstsubtitle[index].length)
    {
        solanlap = 1
    }
    if (dodaichuoi == 0) {
        solanlap = 0
        index ++
    }
    if (index == lstsubtitle.length) {
        index = 0
    }
}
setInterval("loadsubtitle()", 100)