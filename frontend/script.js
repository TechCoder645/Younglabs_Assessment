document.getElementById('greetButton').addEventListener('click', getGreeting);

function getGreeting() {
    const name = document.getElementById('nameInput').value;
    if (!name) {
        alert("Name is required.");
        return;
    }

    fetch(`http://localhost:5000/api/greet?name=${name}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('greetingMessage').innerText = data.error;
            } else {
                document.getElementById('greetingMessage').innerText = data.message;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('greetingMessage').innerText = 'Unable to fetch greeting';
        });
}