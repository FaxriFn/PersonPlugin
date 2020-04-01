$(function () {
    

    $.fn.sliderFN=function (option) {
      
       let lent=this;
       let defaultsetting={
           transition:false
       }
       let setting=$.extend({},defaultsetting,option)
       getSlider()
       getSetTime()
       function getSlider() {
        let elementImg=lent.find('img');
        let elementLent=lent.find('div');
        lent.css({
         width: `${elementImg.lemgth*100}vw`,
         position: 'relative',
         display:"flex",
         right:0
        })
       
         elementLent.css({
             width:'100vw'
         })
         if (setting.transition) {
             lent.css('transition','.9s')
         }
       
         elementImg.css({
             width:'100vw',
             height:'50vh',
             objectFit:'cover',
          
         })
       }
    
       function getSetTime() {
        let elementImg=lent.find('img');
            let position=0;
           setInterval(() => {
            position +=100;
            if (position>=elementImg.length*100) {
                position=0
            }
               lent.css({
                   right:`${position}vw`,
                 
               })
           }, 3000);
       }
    }
})