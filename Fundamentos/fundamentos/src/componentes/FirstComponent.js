import MyComponent from "./MyComponent";
import Events from "./Events";

const FirstComponent = () => {
    return (
        <div>
            <h1>Meu componente</h1>
            <p className="teste">Meu texto</p>
            <MyComponent/>
            <Events/>
        </div>
    )
}
export default FirstComponent;
