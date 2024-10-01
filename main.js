/* fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => {
    console.error(error);
  }); */

  async function fetchData() {
    try {
      const pikachuName = document
        .getElementById("pikachuName")
        .value.toLowerCase();
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pikachuName}`
      );
      if (!response.ok) {
        throw new Error("there something wrong");
      }
      const data = await response.json();
      const img = document.getElementById("pikachuSprite");
      img.src = data.sprites.front_default;
      img.style.display = "block";
    } catch {
      (error) => console.error(error);
    }
  }
  
  async function f11() {
    let url =
      "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";
    let response = await fetch(url);
  
    let commits = await response.json(); // read response body and parse as JSON
  
    /* alert(commits[0].author.login);
     */
  }
  f11();
  
  let head = document.getElementById("head");
  head.onclick = function () {
    head.classList.toggle("color");
  };
  let open = document.getElementById("open");
  let close = document.getElementById("close");
  let nav = document.querySelector(".nav");
  
  open.onclick = function () {
    nav.classList.remove("hide");
    close.classList.remove("hide");
    open.classList.add("hide");
  };
  close.onclick = function () {
    nav.classList.add("hide");
    close.classList.add("hide");
    open.classList.remove("hide");
  };
  let ul = document.querySelector(".ul1");
  let p = document.getElementById("p11");
  p.onclick = function () {
    ul.classList.toggle("hide");
  };
  
  document.querySelector(".menu").onclick = function (event) {
    if (event.target.nodeName != "A") return;
  
    let href = event.target.getAttribute("href");
    /* alert(href); */
  };
  
  let btn1 = document.getElementById("btn1");
  let btn2= document.getElementById("btn2");
  window.onscroll = function () {
    if (scrollY > 400) {
      btn1.style.display = "block";
    } else {
      btn1.style.display='none';
    }
  };
  /* window.onscroll = function () {
      if (scrollX > 100) {
        btn2.style.display = "block";
      } else {
        btn2.style.display='none';
      }
    };
    */ 
  btn1.onclick = function () {
      scroll({
          top:0,
          left:0,
          behavior:"smooth"
  
      })
  };
  
  /* btn2.onclick = function () {
      scroll({
          top:0,
          left:0,
          behavior:"smooth"
  
      })
  };
   */
  if(sessionStorage.length>0){
      document.querySelector('.colorDiv').style.backgroundColor=sessionStorage.color;
  }
  
  function getColo(color){
      sessionStorage.setItem('color',color)
      document.querySelector('.colorDiv').style.backgroundColor = color;
  
  }
  
  sessionStorage.setItem('name','mariam');
  console.log(sessionStorage.name);
  //the same of above is :
  console.log(sessionStorage.getItem('name'));
  
  /* sessionStorage.clear();
   */
  
  let txt=document.getElementById('txt');
  if(sessionStorage.length>0){
      txt.value=sessionStorage.getItem('txt');
  }
  txt.onkeyup=function(){
      sessionStorage.setItem('txt',txt.value);
  }