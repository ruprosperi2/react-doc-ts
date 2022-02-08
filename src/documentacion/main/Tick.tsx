


const Tick = () => {
    return (
        <div>
            <h1>Hello World</h1>
            {
                setInterval(() => {
                    new Date().toLocaleTimeString()
                }, 1000)
            }
        </div>
    );
}


export default Tick

