import{g as m,s as p,u as y,p as S}from"./showToast-CDWT58bj.js";m();const q=(u,r,l)=>{let n=m();const a=document.querySelector(`#card${r}`);let t=a.querySelector(".productQuantity").innerText,o=a.querySelector(".productPrice").innerText;o=o.replace("₹","");let d=n.find(c=>c.id===r);if(d&&t>1){t=Number(d.quantity)+Number(t),o=Number(o*t);let c={id:r,quantity:t,price:o};c=n.map(e=>e.id===r?c:e),console.log(c),localStorage.setItem("cartProductLS",JSON.stringify(c)),p("add",r)}if(d)return!1;o=Number(o*t),t=Number(t);let i={id:r,quantity:t,price:o};n.push(i),localStorage.setItem("cartProductLS",JSON.stringify(n)),y(n),p("add",r)},g=(u,r,l)=>{const a=document.querySelector(`#card${r}`).querySelector(".productQuantity");let t=parseInt(a.getAttribute("data-quantity"))||1;return u.target.className==="cartIncrement"&&(t<l?t+=1:t===l&&(t=l)),u.target.className==="cartDecrement"&&t>1&&(t-=1),a.innerText=t,a.setAttribute("data-quantity",t.toString()),t},C=document.querySelector("#productContainer"),f=document.querySelector("#productTemplate"),N=u=>{if(!u)return!1;u.forEach(r=>{const{brand:l,category:n,description:a,id:t,image:o,name:d,price:i,stock:c}=r,e=document.importNode(f.content,!0);e.querySelector("#cardValue").setAttribute("id",`card${t}`),e.querySelector(".category").textContent=n,e.querySelector(".productName").textContent=d,e.querySelector(".productImage").src=o,e.querySelector(".productImage").alt=d,e.querySelector(".productStock").textContent=c,e.querySelector(".productDescription").textContent=a,e.querySelector(".productPrice").textContent=`₹${i}`,e.querySelector(".productActualPrice").textContent=`₹${i*5}`,e.querySelector(".stockElement").addEventListener("click",s=>{g(s,t,c)}),e.querySelector(".add-to-cart-button").addEventListener("click",s=>{q(s,t)}),C.append(e)})};N(S);
