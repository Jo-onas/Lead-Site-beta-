    const sliders = document.querySelector('[data-id="sliders"]')

    let mySlidersValue = 0
    let idSlide = 0

    function handleSlide() {
        if(mySlidersValue == -300) {
          mySlidersValue = 0
        }
        sliders.style.marginLeft = `${mySlidersValue}vw`
    }

    setInterval(() => {
        mySlidersValue += -100
        handleSlide()
    }, 4000);


        const slider = document.querySelector(".slider2")

        let widthSlide = 0

        function passarSlide() {
            if(widthSlide == -500) {
            widthSlide = 0
            }
            slider.style.marginLeft = `${widthSlide}vw`
        }

        setInterval(() => {
            widthSlide += -100
            passarSlide()
        }, 4000);


