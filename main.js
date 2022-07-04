 
     let clock = document.getElementById("clock");
     let start = document.getElementById("start");
     let stop = document.getElementById("stop");
     let reset = document.getElementById("reset");
     
     stop.disabled = true;
     reset.disabled = true;
     
     
    let ThouSec = 0;
    let HundSec = 0;
    let TenSec = 0;
    let OneSec = 0;
    
    let timer;
    
    

     
     
  function countup(){
        
      //カウントアップ
        OneSec++;
        
        if(OneSec / 10 == 1){
            TenSec++;
            OneSec = 0;
            
            if(TenSec / 10 == 1){
            HundSec++;
            TenSec = 0;
            
             if(HundSec / 10 == 1){
            ThouSec++;
            HundSec = 0;
            
        }
 
        }
        
        }
         
             
        clock.innerHTML=ThouSec + ':' +  HundSec  + ':' + TenSec + ":" + OneSec;
  
            
        }
 
  
 
 
   start.addEventListener("click",function(){
    timer = setInterval(countup,100)
    
    //表示非表示
    stop.disabled = false;
    reset.disabled = false;
    start.disabled = true;
   });
 
 
 stop.addEventListener("click",function(){
   clearInterval(timer);
   
   //表示非表示
   stop.disabled = true;
   start.disabled = false;
  
 });
 
 reset.addEventListener("click",function(){
  clearInterval(timer);
  clock.innerHTML = "0:0:0:0";
    
     ThouSec = 0;
     HundSec = 0;
     TenSec = 0;
     OneSec = 0;
    
  
  
  
   //表示非表示
    stop.disabled = true;
    reset.disabled = true;
    start.disabled = false;
  
 });
  
  
 