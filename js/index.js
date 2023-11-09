// for social icon delays 
(
    function(){
        let socials = document.querySelectorAll('.social div')

        socials.forEach((eksocial, ind)=>{
            eksocial.style.animation = `moveIn .6s ease-in-out forwards ${ind/5}s` 
        })






        let rocketPieces = document.querySelectorAll('.rocket-body span');
        console.log(rocketPieces);
        let rocket = document.querySelector('.rocket')
        
        let StartAni = window.innerHeight / 5 ;
        console.log(StartAni);

        let rocketOffsetTop =  rocket.offsetTop;
        console.log(rocketOffsetTop);


        let thirdOffset = rocketPieces[2].offsetTop;

        document.addEventListener('scroll', (e)=>{
            if(window.scrollY > (rocketOffsetTop - StartAni)){
                rocketPieces[0].classList.add('active')
                rocketPieces[1].classList.add('active')
            }
            else{
                rocketPieces[0].classList.remove('active')
                rocketPieces[1].classList.remove('active')
            }

            if(window.scrollY > (thirdOffset - StartAni)){
                rocketPieces[2].classList.add('active')
            }
            else{
                rocketPieces[2].classList.remove('active')
            }
        })

    }

)


()

