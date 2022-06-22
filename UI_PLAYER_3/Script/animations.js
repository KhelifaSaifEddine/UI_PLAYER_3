let array_elements = document.querySelectorAll(".status #status_fire")
var counter = -1
array_elements.forEach(element => {
  
  var animation3 = bodymovin.loadAnimation({
    container: element,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'Animations/Fire2.json',
  })
  setTimeout(function(){ animation3.play();  }, 1000);
  animation3.addEventListener('complete', function() {
  
    counter = counter + 1
    execute_other_animation(counter)
  })

});  



  function execute_other_animation(counter){

    let array_elements = document.querySelectorAll(".status #slide_profile")

            var animation4 = bodymovin.loadAnimation({
              container: array_elements[counter],
              renderer: 'svg',
              loop: false,
              autoplay: false,
              path: 'Animations/Slide_Profile_Animation.json',
            })
            animation4.play();
            setTimeout(function(){   }, 2000);
            animation4.addEventListener('complete', function() {
              setTimeout(function(){
                animation4.goToAndPlay(0);
              }, 2000);
            })
  
}
  