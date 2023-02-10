import Button from "./Button";

function App() {
    return (
        <div>
            <div>
                <Button success rounded outline>Hello</Button>
            </div>
            <div>
                <Button danger outline>Test Me</Button>
            </div>
            <div>
                <Button warning >Buy Now</Button>
            </div>
            <div>
                <Button secondary outline>CLICK HERE</Button>
            </div>
            <div>
                <Button primary rounded>Search</Button>
            </div>
        </div>
    )
};

export default App;