console.log("Theme previewer is now available")
if(!window.location.href.includes("https://media.stanleyw.xyz/web/index.html#!/mypreferencesdisplay.html")){
    //
}
function previewtheme(d, theme){
    let links = d.getElementsByTagName("link"); for(var i = 0; i < links.length; i++){if(links[i].href.includes('web/themes')){links[i].href = "dead"}}//delete old theme
    let ksfj = d.createElement('link')
    ksfj.rel = 'stylesheet'
    ksfj.type = 'text/css'
    ksfj.href = 'https://media.stanleyw.xyz/web/themes/'+theme+'/theme.css'
    d.getElementsByTagName('HEAD')[0].appendChild(ksfj)
}
function getthemeselector(){
    let ste = document.getElementById('selectTheme');
    if(ste==null){
        setTimeout(getthemeselector, 500)
    }else{
        ste.addEventListener('change', function(){previewtheme(document, ste.value)})
        console.log("ste HAS BEEN FOUNDu")
    }
}
getthemeselector()