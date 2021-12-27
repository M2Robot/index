
    //Disable select-text script (IE4+, NS6+)  
    //visit https://www.html-code-generator.com  
    
    function disableselect(e) { 
      return false;
    } 
    
    function reEnable() { 
      return true;
    } 
    //if IE4+  
    document.onselectstart = new Function("return false");
    //if NS6  
    if (window.sidebar) { 
      document.onmousedown = disableselect;
      document.onclick = reEnable;
    }  

    window.ondragstart = function() {
     return false; 
     } 

    function disableselect(e){  
       return false  
    }  
  
    function reEnable(){  
       return true  
    }  
  
  //if IE4+  
     document.oncontextmenu=new Function ("return false")  
  //if NS6  
    if (window.sidebar){  
       document.onmousedown=disableselect  
       document.onclick=reEnable  
  }  
   
          // disable right click
          document.addEventListener('contextmenu', event => event.preventDefault());
 
          document.onkeydown = function (e) {
         
              // disable F12 key
              if(e.keyCode == 123) {
                  return false;
              }
         
              // disable I key
              if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
                  return false;
              }
         
              // disable J key
              if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
                  return false;
              }
         
              // disable U key
              if(e.ctrlKey && e.keyCode == 85) {
                  return false;
              }
          }
         
               // rm ctrl+S
              document.addEventListener("keydown", function (event) {
                if (event.ctrlKey && event.code === 'KeyS') {
                 event.preventDefault();
                     }   
                    });

                    // Setup ctrl+Key
                    window.addEventListener('keydown', function (event) {
                      if (event.ctrlKey && event.code === 'KeyX') {
                        window.location.href = 'index-back/index.html';
                      }
                    });
