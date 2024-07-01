const TemplateExpressions = () => {
    const name = "Mateus"
    const data = {
        age: 27,
        job: "Programador",
    };

    return (
        <div>
            <h2>Olá {name}, tudo bem?</h2>
            <p>Você trabalha como: {data.job}</p>
            <p>{console.log("JSX React")}</p>
            
        </div>
    );
};

export default TemplateExpressions;