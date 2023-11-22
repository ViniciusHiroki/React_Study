const TemplateExpressions = () => {
    const data = {
        name: "Jáiro",
        age: 150,
    };

    return (
        <div>
            <h1>Olá {data.name}, tudo bem?</h1>
        </div>
    );
};

export default TemplateExpressions