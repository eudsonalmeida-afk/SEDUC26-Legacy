(function(){
var installBtn=document.getElementById("installBtn"),dialog=document.getElementById("installDialog"),title=document.getElementById("installTitle"),text=document.getElementById("installText"),help=document.getElementById("installHelp"),action=document.getElementById("installAction");
if(action)action.hidden=true;
if("serviceWorker" in navigator&&location.protocol==="https:")window.addEventListener("load",function(){navigator.serviceWorker.register("./service-worker.js").then(function(r){if(r.update)r.update();},function(){});});
function openInstall(){if(title)title.textContent="Instalar no iPad Mini 2";if(text)text.textContent="No Safari, toque em Compartilhar e depois em “Adicionar à Tela de Início”.";if(help)help.textContent="Abra pelo novo ícone e entre na mesma conta da nuvem usada no celular.";if(dialog&&dialog.showModal)dialog.showModal();else if(dialog){dialog.setAttribute("open","");dialog.style.display="block";}}
if(installBtn)installBtn.onclick=openInstall;
var close=document.getElementById("closeInstallDialog");if(close)close.onclick=function(){if(dialog&&dialog.close)dialog.close();else if(dialog){dialog.removeAttribute("open");dialog.style.display="none";}};
})();