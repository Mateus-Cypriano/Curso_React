const Challenge = () => {
    const a = 10;
    const b = 10;
    const sum_Numbers = () => {
        console.log(a + b);
    }

    const renderNumber = (x) => {
        if(x) {
            return <h2>{a} + {b}</h2>
        }
        
    }

    return (
        <div>
            {renderNumber(true)}
            <button onClick = {sum_Numbers}>Some os Números</button>
        </div>
    )
};

export default Challenge;