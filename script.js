const togglePopup=()=>{document.getElementById("popupOverlay").classList.add("show"),document.documentElement.style.getPropertyValue("--scroll-");let e=document.body;e.style.height="100vh",e.style.overflow="hidden"},closeDialog=()=>{let e=document.body,t=e.style.top;e.style.position="",e.style.top="",e.style.height="",e.style.overflow="",window.scrollTo(0,-1*parseInt(t||"0")),document.getElementById("popupOverlay").classList.remove("show")};function FirstImg(){document.getElementById("img5").src="/icons/img6.jpg"}function SecImg(){document.getElementById("img5").src="/icons/image.png"}function ThirdImg(){document.getElementById("img5").src="/icons/img7.jpg"}window.addEventListener("scroll",()=>{document.documentElement.style.setProperty("--scroll-y",`${window.scroll}px`)});