const modStasis=[60,100,140,250,400,550,600,650,680,710],nomodStasis=[60,100,120,160,188,200,205,210,215,220];document.addEventListener("DOMContentLoaded",(function(){window.showBottomNotification=function(e,t=5e3){const o=document.getElementById("bottomNotification");document.getElementById("notificationMessage").textContent=e,o.style.display="block",setTimeout((function(){closeBottomNotification()}),t)},window.closeBottomNotification=function(){document.getElementById("bottomNotification").style.display="none"};const e=document.querySelector("form"),t=document.getElementById("resultField"),o=document.getElementById("txdropField"),n=document.getElementById("tmField"),d=document.getElementById("nbmField"),u=document.getElementById("nbpField"),l=document.getElementById("beField"),i=document.getElementById("moduleField"),m=document.getElementById("stasisField"),a=document.getElementById("ppField"),c=document.getElementById("ppfField"),s=document.getElementById("pactefield"),r=document.getElementById("showForm");let v=0,y=0,B=0,E=0;e.addEventListener("submit",(function(e){e.preventDefault();try{v=document.querySelector('input[name="selection"]:checked').value}catch(e){showBottomNotification("Tu as oublié de choisir un serveur. Pandora / Rubilax a été choisit par défaut. Tu peux le changer en haut à droite de ton écran"),document.getElementById("radio1").click()}"0"==i.value?y=nomodStasis[m.value-1]:"1"==i.value?y=modStasis[m.value-1]:t.value="ERR with stasis mult",0==n.value?B=1:1!=n.value&&2!=n.value||(B=Number(u.value)),E=1==v&&1==r.checked?50:0==v&&1==r.checked?25:0,a.value>200&&(a.value=200),o.value=o.value.replace(",",".");let g=(B+Number(l.value))*Number(d.value),f=(1-(1-Number(o.value)/100*(1+Number(a.value)/100)*(y/100)*(1+E/100+Number(c.value)/100+Number(s.value)/100))**g).toFixed(2);t.value=f}))}));
