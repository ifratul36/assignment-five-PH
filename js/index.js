let totalAmount = 55000;
let donationHistory = [];

function handleDonation(inputId, donationAmountId, modalId) {
    const inputField = document.getElementById(inputId);
    const donationAmountDisplay = document.getElementById(donationAmountId);
    const modal = document.getElementById(modalId);

    let donationValue = inputField.value;

    // Check if the input is a valid number
    if (isNaN(donationValue) || donationValue.trim() === "") {
        alert("Please enter a valid number.");
        return;
    }

    // Convert to a number
    donationValue = parseFloat(donationValue);

    // Update donation amount displayed
    let currentDonation = parseFloat(donationAmountDisplay.textContent);
    currentDonation += donationValue;
    donationAmountDisplay.textContent = currentDonation;

    // Decrease total amount
    totalAmount -= donationValue;
    document.getElementById("total_amount_value").textContent = totalAmount;

    // Show modal
    modal.showModal();

    // Add to donation history
    const donationDate = new Date().toLocaleString();
    donationHistory.push({
        amount: donationValue,
        date: donationDate,
    });

    // Clear input field
    inputField.value = '';
}

// Function to display history when the history button is clicked
function displayHistory() {
    const historyContainer = document.getElementById('history-container');
    historyContainer.innerHTML = "";  // Clear previous history

    donationHistory.forEach((entry, index) => {
        const historyItem = document.createElement('p');
        historyItem.textContent = `Donation - ${index + 1} : ${entry.amount} BDT on ${entry.date} ;`;
        historyContainer.appendChild(historyItem);
    });

   
}

