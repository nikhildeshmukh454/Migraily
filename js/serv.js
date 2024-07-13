document.getElementById('service-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const category = document.getElementById('category').value.trim().toLowerCase();

    if (category) {
        // Use the raw URL of the CSV file on GitHub
        readExcelFile('https://raw.githubusercontent.com/nikhildeshmukh454/Migraily/services_info.csv', category);
    }
});

function readExcelFile(filePath, category) {
    fetch(filePath) // Fetch the CSV file from GitHub
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.arrayBuffer();
        })
        .then(data => {
            const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);

            displayServiceInfo(jsonData, category);
        })
        .catch(error => {
            console.error('Error fetching the file:', error);
            displayErrorMessage('Error fetching the service information file. Please try again later.');
        });
}

function displayServiceInfo(data, category) {
    const serviceInfoDiv = document.getElementById('service-info');
    serviceInfoDiv.innerHTML = '';

    const filteredData = data.filter(item => item.Category.toLowerCase() === category);

    const messageContainer = document.getElementById('message-container');

    if (filteredData.length > 0) {
        // Display message in the message container
        messageContainer.innerHTML = `<p>Migraily found service names for you in the category: ${category}</p>`;

        filteredData.forEach(item => {
            const info = document.createElement('div');
            info.classList.add('service-item');
            info.innerHTML = `<h3>${item.Name}</h3>
                              <p><strong>Contact Info:</strong> <a href="tel:${item['Contact-info']}">${item['Contact-info']}</a></p>
                              <p><strong>Address:</strong> ${item.Address}</p>`;
            serviceInfoDiv.appendChild(info);
        });
        
    } else {
        messageContainer.innerHTML = `<p>No matching service information found for the category: ${category}.</p>`;
    }
}

function displayErrorMessage(message) {
    const messageContainer = document.getElementById('message-container');
    messageContainer.innerHTML = `<p>${message}</p>`;
}
