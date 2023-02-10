import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'

function App() {
    return (
        <div>
            <div>
                <Button success rounded outline>
                    < GoBell />
                    Hello
                    </Button>
            </div>
            <div>
                <Button danger outline>
                    < GoCloudDownload />
                    Test Me
                    </Button>
            </div>
            <div>
                <Button warning >
                    < GoDatabase />
                    Buy Now
                    </Button>
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