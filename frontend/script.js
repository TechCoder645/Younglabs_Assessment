document.getElementById('greetButton').addEventListener('click', async () => {
    const name = document.getElementById('nameInput').value;
    if (!name) {
        alert('Please enter your name');
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/api/greet?name=${name}`);
        const data = await response.json();
        if (response.ok) {
            document.getElementById('greetingMessage').textContent = data.message;
        } else {
            document.getElementById('greetingMessage').textContent = data.error;
        }
    } catch (error) {
        document.getElementById('greetingMessage').textContent = 'Error: Unable to fetch greeting';
    }
});