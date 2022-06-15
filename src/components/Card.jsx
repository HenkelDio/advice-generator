const Card = () => {


        function Number(){
        fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(advices =>{
                
        var id = advices.slip.id
        var advice = advices.slip.advice

        console.log(id)
        console.log(advice)

        var numberAdvice = document.querySelector('.header-card h3 span')
        var contentAdvice = document.querySelector('.content-card p')

        numberAdvice.innerHTML = id
        contentAdvice.innerHTML = advice

        
            
        })
    
    }

    return (
        <div className="card">

            <div className="card-wrapper">
                
                <div className="header-card">
                    <h3>ADVICE #<span>117</span></h3>
                </div>
                <div className="content-card">
                    <p>
                        It's easy to sit up and take notice, what's
                        difficult is getting up and taking action
                    </p>
                </div>
            </div>
            <div className="divider-desktop">
                <img src="./content/images/pattern-divider-desktop.svg"></img>
            </div>
            <div className="dice" onClick={Number}>
                <img src='./content/images/icon-dice.svg'></img>
            </div>

        </div>
    )
}

export default Card