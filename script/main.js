'use strict';

const features= document.querySelector("#features");
const company= document.querySelector("#company"),
overlayF=document.querySelector("#overlay_f"),
overlayC=document.querySelector("#overlay_c"),
gambur=document.querySelector(".nav_menu_btn"),
overlay=document.querySelector(".overlay"),
overlayClose=document.querySelector(".overlay_close_link"),
featuresOption=document.querySelector(".features"),
featuresArrow=document.querySelector(".arrow-down-f"),
companyOption=document.querySelector(".company"),
companyArrow=document.querySelector(".arrow-down-c"),
OfeaturesOption=document.querySelector(".overlay_features"),
OfeaturesArrow=document.querySelector(".arrow-down-overlay-f"),
OcompanyOption=document.querySelector(".overlay_company"),
OcompanyArrow=document.querySelector(".arrow-down-overlay-c");


let clickNum=0;

function dropDown(selected,arrow){
    if(clickNum==0){
        selected.style.display="block";
        arrow.style.transform="rotate(180deg)";
        arrow.style.transition=".5s";
        clickNum=1;
    }
    else{
        selected.style.display="none";
        arrow.style.transform="rotate(360deg)";
        arrow.style.transition=".5s";
        clickNum=0;
    }
}
let clickNumC=0;
function dropDownCompany(selected,arrow){
    if(clickNumC==0){
        selected.style.display="block";
        arrow.style.transform="rotate(180deg)";
        arrow.style.transition=".5s";
        clickNumC=1;
    }
    else{
        selected.style.display="none";
        arrow.style.transform="rotate(360deg)";
        arrow.style.transition=".5s";
        clickNumC=0;
    }
}


gambur.addEventListener("click",()=>{
    overlay.style.width="100%";
    overlay.style.transition=".5s";
})
overlayClose.addEventListener("click",()=>{
    overlay.style.width="0%";
    overlay.style.transition=".5s";
})

features.addEventListener("click",()=>{dropDown(featuresOption,featuresArrow)});
company.addEventListener("click",()=>{ dropDownCompany(companyOption,companyArrow)});
overlayF.addEventListener("click",()=>{ dropDown(OfeaturesOption,OfeaturesArrow);});
overlayC.addEventListener("click",()=>{ dropDownCompany(OcompanyOption,OcompanyArrow)});