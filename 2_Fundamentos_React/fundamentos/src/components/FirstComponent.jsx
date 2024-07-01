import MyComponent from "./MyComponent";

const FirstComponent = () => {
    return (
        <div>
            {/*As tags em React devem ficar envoltas de uma tag, no caso o div */}
            <h1>Meu primeiro componente</h1>
            <p className="teste">Meu texto</p>
            <MyComponent/>
        </div>
    );
};

export default FirstComponent;