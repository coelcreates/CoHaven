
function handleClick() {
    fetch('http://localhost:3001/event')
        .then(response => response.json())
        .then(json => {
            console.log(json);
        });
}

const HomePage = () => {

    return (
        <div>
            <h1>This is the homepage</h1>
            <button onClick={handleClick}>Get Data</button>
        </div>
    );
}

export default HomePage;