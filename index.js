//TODO select all the drum elements and add event listener
//add animation whwn button is clicked
//play music()

var audio_volume = 0.6;


const animate = (key)=>{

    const currentKey = document.querySelector(`.${key}`);
    currentKey.classList.add('pressed');
    setTimeout(()=>{

        currentKey.classList.remove('pressed');
         
    } , 250)

}


  const playMusic = (path)=>{

     const audio  = new Audio(path);
     audio.volume = audio_volume;
     audio.play();
       
  }




//for pressing from keyboard and getting exact keyboard switch
  document.addEventListener("keypress" , (event) =>{

       const triggeredKey = event.key;
       makeSound(triggeredKey);
       animate(triggeredKey);
  })



//   implementing change theme button 

   //   theme_1
 
       const theme_1__background = "#A9461B";
       const theme_1__background_low = "rgba(9,25,33,0.8)";
       const theme_1__text = "#00fff1";





   // theme_2

   const theme_2__background = "seagreen";
   const theme_2__background_low = "rgba(267,195,64,0.85)";
   const theme_2__text = "#2d2d2d";

   const change_theme = (theme) =>{

       let root = document.documentElement;
       if(theme == "theme_1"){

          root.style.setProperty('--background', theme_1__background);
          root.style.setProperty('--background_low', theme_1__background_low);
          root.style.setProperty('--text', theme_1__text);

       }

       else{

         root.style.setProperty('--background' , theme_2__background);
         root.style.setProperty('--background_low', theme_2__background_low);
         root.style.setProperty('--text' , theme_2__text); 

       }

   }

   var current_theme = "theme_1";
   const theme_changer = document.getElementById("util__button-theme");
   theme_changer.addEventListener("click",(e) =>{

       theme_changer.classList.add("change_theme__pressed");

       setTimeout(() => {
          
         theme_changer.classList.remove("change_theme__pressed");

       }, 250);

         if(current_theme == "theme_1"){

               change_theme("theme_2");
               current_theme = "theme_2";

         }

         else{

            change_theme("theme_1");
            current_theme = "theme_1";

      }

   })









//   implementing auto music button 

   var auto_music_id;
   var auto_music_on = false;

   const slider = document.getElementById("volume__slider");
  slider.oninput = (event) =>{

      audio_volume = event.target.value / 100 ;    

  }



  const start_auto_music = ()=>{

     const letters = ["w","a","s","d","j","k","l"];
     
    auto_music_id = setInterval(() => {
        
      const current_Key = letters[Math.floor(Math.random() * letters.length)];
     makeSound(current_Key);
     animate(current_Key);

     }, 250);

  }

   const auto_music_button = document.getElementById("util__button-auto");
   auto_music_button.addEventListener("click",()=>{

       if(auto_music_on){
             
            clearInterval(auto_music_id);
            auto_music_on = false;
            auto_music_button.innerText = "Start Auto Music";
            auto_music_button.classList.remove("auto_music_on");
       }

        else{
         start_auto_music();
         auto_music_on = true;
         auto_music_button.innerText = "Stop Auto Music";
         auto_music_button.classList.add("auto_music_on");
        }
   })


 const makeSound = (key) =>{

    switch(key){

         case "w":
             playMusic("sounds/sound-1.mp3");
             break;

        case "a":
            playMusic("sounds/sound-2.mp3");
            break;

        case "r":
             playMusic("sounds/sound-3.mp3");
             break;

         case "s":
             playMusic("sounds/sound-4.mp3");
             break;

          case "e":
             playMusic("sounds/sound-5.mp3");
             break;

          case "l":
             playMusic("sounds/sound-6.mp3");
             break;

          case "m":
             playMusic("sounds/sound-7.mp3");
             break;

             default:
                     console.log("wrong button!");

             
    }    
  


 }


 const handleDrumsClick = (event)=>{

    var innerHTML = event.target.innerHTML;
    console.log(innerHTML);
    animate(innerHTML);
    makeSound(innerHTML);

 }


//this returns all the elements that have class "drum" 
var drums = document.querySelectorAll(".drum");
for(let i = 0; i < drums.length; i++){

      drums[i].addEventListener("click", handleDrumsClick)
}

