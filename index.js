// ***---*** VARIABLES ***---*** \\

const mediaQuery = window.matchMedia(`(min-width: 650px )`)
const slider = document.querySelector('.slider')
const discount = document.querySelector(".yearly-discount")
const pageViews = document.getElementById('pageviews')
const amountOfMoney = document.getElementById('cost-element')
const periodOfTime = document.getElementById('cost-period')
const btnStartTrial = document.querySelector('.btn')
const intervalSwitch = document.getElementById('interval-switch')
const swithcer = document.querySelector('.slider')
const errorDiv = document.querySelector('.error-container')

// ***---*** RESET ***---***\\
slider.value = 0;
pageViews.innerHTML = "100K";
amountOfMoney.innerHTML = 16.00.toFixed(2)


// Slider input start
function handleSliderChange(price, int, pViews){
    if(int === 'monthly'){
        let ipcPrice = price
        amountOfMoney.innerHTML = ipcPrice.toFixed(2);
        pageViews.innerHTML = pViews;
        errorDiv.setAttribute('data-is-active', 'false');

        
    } else if (int === 'yearly'){
        let ipcPrice = ((price * 12) * 0.75).toFixed(2)
        amountOfMoney.innerHTML = ipcPrice;
        pageViews.innerHTML = pViews;
        errorDiv.setAttribute('data-is-active', 'false')
    } else if (int === 'false'){
        errorDiv.setAttribute('data-is-active', 'true');
        slider.value = 0;
        pageViews.innerHTML = '100K'
        amountOfMoney.innerHTML = 16.00.toFixed(2)

        
    }
}

slider.addEventListener('input', ()=> {
    let intervalData = intervalSwitch.getAttribute('data-is-checked')
    if(intervalData === 'false'){
    }
    switch(slider.value){
        case "-2":{
            let pageViews = "10K"
            handleSliderChange(8, intervalData, pageViews)
            break;
        }
        case '-1':{
            let pageViews = "50K"
            handleSliderChange(12, intervalData, pageViews)    
            break;
        }
        case '0':{
            let pageViews = "100K"
            handleSliderChange(16, intervalData, pageViews)
            break;
        }
        case '1':{
            let pageViews = '500K'
            handleSliderChange(24, intervalData, pageViews)
            break;
        }
        case '2':{
            let pageViews = "1M"
            handleSliderChange(36, intervalData, pageViews)
            pageViews
            break;
        }
    }

})
function handlePeriodBilling() {
    let intervalData = intervalSwitch.getAttribute('data-is-checked');
    
    switch(intervalData){
        case 'false':
            intervalSwitch.setAttribute('data-is-checked', 'monthly');
            break
        case 'monthly': 
            intervalSwitch.setAttribute('data-is-checked', 'yearly');
            slider.disabled = false
            break
        case 'yearly': 
            intervalSwitch.setAttribute('data-is-checked', 'false');
            slider.disabled = false
            break;

        } 
}

intervalSwitch.addEventListener('click', handlePeriodBilling)

slider.oninput = function() {
    let value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ' + value + '%, hsl(224, 65%, 95%) ' + value + '%, hsl(224, 65%, 95%) 100%)'
};
// slider end



// media query
function handleTabletChange(e) {
    if(e.matches) {
        discount.innerHTML = "25% discount"
     }
     else {
        discount.innerHTML = "-25%"
     }
}
mediaQuery.addEventListener('change', handleTabletChange)

handleTabletChange(mediaQuery)
// media query end