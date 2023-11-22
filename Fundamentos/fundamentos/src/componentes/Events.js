const Events = () => {
    const handleEvent = () => {
        console.log("clicou")
    }
    
    return(
        <div>
            <div>
                <button onClick={handleEvent}>Clique aqui</button>
            </div>
        </div>
    )
}

export default Events