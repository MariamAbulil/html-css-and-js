/* fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => {
    console.error(error);
  }); */

  const fetchData =async()=> {
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
  
  const f11=async  ()=> {
    const url =
      "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";
    const response = await fetch(url);
  
    const commits = await response.json(); // read response body and parse as JSON
  
    /* alert(commits[0].author.login);
     */
  }
  f11();
  
  const head = document.getElementById("head");
  head.onclick =  ()=> {
    head.classList.toggle("color");
  };
  const open = document.getElementById("open");
  const close = document.getElementById("close");
  const nav = document.querySelector(".nav");
  
  open.onclick =  () => {
    nav.classList.remove("hide");
    close.classList.remove("hide");
    open.classList.add("hide");
  };
  close.onclick =  ()=> {
    nav.classList.add("hide");
    close.classList.add("hide");
    open.classList.remove("hide");
  };
  const ul = document.querySelector(".ul1");
  const p = document.getElementById("p11");
  p.onclick =  ()=> {
    ul.classList.toggle("hide");
  };
  
  document.querySelector(".menu").onclick = event=> {
    if (event.target.nodeName != "A") return;
  
    const href = event.target.getAttribute("href");
    /* alert(href); */
  };
  
  const btn1 = document.getElementById("btn1");
  /* btn1='mariam'; cause an error because its a const variable */
  const btn2= document.getElementById("btn2");
  window.onscroll = ()=> {
    if (scrollY > 400) {
      btn1.style.display = "block";
    } else {
      btn1.style.display='none';
    }
  };
  /* window.onscroll =  ()=> {
      if (scrollX > 100) {
        btn2.style.display = "block";
      } else {
        btn2.style.display='none';
      }
    };
    */ 
  btn1.onclick =  ()=> {
      scroll({
          top:0,
          left:0,
          behavior:"smooth"
  
      })
  };
  
  /* btn2.onclick =  ()=> {
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
  
 const getColo = color=>{
      sessionStorage.setItem('color',color)
      document.querySelector('.colorDiv').style.backgroundColor = color;
  
  }
  
  sessionStorage.setItem('name','mariam');
  console.log(sessionStorage.name);
  //the same of above is :
  console.log(sessionStorage.getItem('name'));
  
  /* sessionStorage.clear();
   */
  
  const txt=document.getElementById('txt');
  if(sessionStorage.length>0){
      txt.value=sessionStorage.getItem('txt');
  }
  txt.onkeyup=()=>{
      sessionStorage.setItem('txt',txt.value);
  }
  document.cookie = "color=red; expires=Wed, 02 Oct 2024 13:43:41 GMT;";
  //to delete it : 1-delete the value // 2-put date in past  
  document.cookie = "color=red; expires=Wed, 02 Feb 2024 13:43:41 GMT;";
  //with path to access ot from this path
  document.cookie = "color=red; expires=Wed, 10 Oct 2024 13:43:41 GMT; path=/";
  console.log(document.cookie);