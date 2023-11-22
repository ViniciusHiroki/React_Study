const Numeros = () => {
    const n1 = 3;
    const n2 = 2;
    const soma = () => {
        console.log(n1+n2)
    }

    return(
        <div>
            <h1>{n1}</h1>
            <h1>{n2}</h1>
            <button onClick={soma}>button</button>
        </div>
    )
}

export default Numeros