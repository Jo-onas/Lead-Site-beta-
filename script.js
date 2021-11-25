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


