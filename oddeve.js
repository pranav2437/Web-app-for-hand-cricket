var s1button = document.getElementById("score1");
var s2button = document.getElementById("score2");
var s3button = document.getElementById("score3");
var s4button = document.getElementById("score4");
var yourscore = 0;
var compchoicedisplay = document.getElementById("compchoicedisplay");
var totalscoredisplay = document.getElementById("totalscoredisplay");
var yourchoicedisplay = document.getElementById("yourchoicedisplay");
var button = document.getElementsByTagName("button");
var title = document.getElementById("title");
var box = document.getElementById("box");

//button 1 click
s1button.addEventListener("click",function(){
    var cscore = Math.floor((Math.random() * 4) + 1);
    compchoicedisplay.textContent=cscore;
       
    if(cscore==1){
        
        s1button.disabled = true;   
        s2button.disabled = true;
        s3button.disabled = true;
        s4button.disabled = true;  
        yourchoicedisplay.textContent = 1;
        compchoicedisplay.textContent=cscore;
        alert("You are out! Try again");
        
        }
        else{           
                yourscore++;
                yourchoicedisplay.textContent = 1;
                totalscoredisplay.textContent = yourscore;                
        }

    if(yourscore>=15){
        alert("You won");
        s1button.disabled = true;   
        s2button.disabled = true;
        s3button.disabled = true;
         s4button.disabled = true; 
    }   
    
    });
//button 2 click
s2button.addEventListener("click",function(){
    var cscore = Math.floor((Math.random() * 4) + 1);
    compchoicedisplay.textContent=cscore;
    
    if(cscore==2){
        s1button.disabled = true;   
        s2button.disabled = true;
        s3button.disabled = true;
        s4button.disabled = true;  
        yourchoicedisplay.textContent = 2;
        compchoicedisplay.textContent=cscore;
        alert("You are out! Try again");
        
        }
        else{            
            if(yourscore<15){
                yourscore+=2;
                yourchoicedisplay.textContent = 2;
                totalscoredisplay.textContent = yourscore;                
        }
        }
    if(yourscore>=15){
        alert("You won");
        s1button.disabled = true;   
        s2button.disabled = true;
        s3button.disabled = true;
         s4button.disabled = true; 
    } 
    });
//button 3 click
s3button.addEventListener("click",function(){
    var cscore = Math.floor((Math.random() * 4) + 1);
    compchoicedisplay.textContent=cscore;
    
    if(cscore==3){
        s1button.disabled = true;   
        s2button.disabled = true;
        s3button.disabled = true;
        s4button.disabled = true;  
        yourchoicedisplay.textContent = 3;
        compchoicedisplay.textContent=cscore;
        alert("You are out! Try again");
        
        }
        else{            
            if(yourscore<15){
                yourscore+=3;
                yourchoicedisplay.textContent = 3;
                totalscoredisplay.textContent = yourscore;                
        }
    }
    if(yourscore>=15){
        alert("You won");
        s1button.disabled = true;   
        s2button.disabled = true;
        s3button.disabled = true;
         s4button.disabled = true; 
    } 
    });
//button 4 click
s4button.addEventListener("click",function(){
    var cscore = Math.floor((Math.random() * 4) + 1);
    compchoicedisplay.textContent=cscore;
    
    if(cscore==4){
        s1button.disabled = true;   
        s2button.disabled = true;
        s3button.disabled = true;
        s4button.disabled = true;  
        yourchoicedisplay.textContent = 4;
        compchoicedisplay.textContent=cscore;
        alert("You are out! Try again");
        
        }
        else{            
            if(yourscore<15){
                yourscore+=4;
                yourchoicedisplay.textContent = 4;
                totalscoredisplay.textContent = yourscore;                
        }
    }
    if(yourscore>=15){
        alert("You won");
        s1button.disabled = true;   
        s2button.disabled = true;
        s3button.disabled = true;
        s4button.disabled = true; 
    } 
    });