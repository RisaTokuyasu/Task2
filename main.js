 $(document).ready(function () {
     
    let ThouSec = 0;
    let HundSec = 0;
    let TenSec = 0;
    let OneSec = 0;
    
    let timer;
    
 
      
     //スタートボタン
    $("#start").click(function () {
        
     
        $("#clock").html("0:0:0:0");
        timer = setInterval(countup, 100);
      
        
       // ボタンを無効化
        $(this).prop('disabled', true);
        $("#stop,#reset").prop("disabled", false);
        
        
        
    });

     //ストップボタン
     $("#stop").click(function () {
         clearInterval(timer);
         
         $(this).prop("disabled" ,true);
         $("#start,#reset").prop("desabled", false);
         
     });
     
     
      function countup(){
        
      //カウントアップ
        OneSec++;
        
        if(OneSec / 10 == 0){
            TenSec++;
            OneSec = 0;
            
        }
        
         if(TenSec / 10 == 0){
            HundSec++;
            TenSec = 0;
            
        }
         if(HundSec / 10 == 0){
            ThouSec++;
            HundSec = 0;
            
        }
         if(ThouSec / 10 == 0){
            ThouSec = 0;
            
        }
        
        
        
        
        };
     
     
     
     
     
     $('#clock').html(ThouSec + ':' +  HundSec  + ':' + TenSec + ":" + OneSec);
  
     
     
 });

