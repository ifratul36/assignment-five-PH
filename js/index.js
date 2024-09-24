let totalAmount = 55000; 
let donationHistory = []; 

function handleDonation(inputId, donationAmountId, modalId, sectionTitle) {
    const inputField = document.getElementById(inputId);
    const donationAmountDisplay = document.getElementById(donationAmountId);
    const modal = document.getElementById(modalId);

    let donationValue = inputField.value;

    // Check if the input is a valid number and greater than zero
    if (isNaN(donationValue) || donationValue.trim() === "" || donationValue <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    // Convert to a number
    donationValue = parseFloat(donationValue);

    // Check if the total amount exceeds 55,000
    if (totalAmount - donationValue < 0) {
        alert("Your donation exceeds the total amount of BDT 55,000.");
        return;
    }

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
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    donationHistory.push({
        section: sectionTitle, // Include section title
        amount: donationValue,
        date: donationDate,
        timeZone: timeZone // Include time zone
    });

    // Clear input field
    inputField.value = '';
}


function displayHistory() {
    const historyContainer = document.getElementById("history-container");
    historyContainer.innerHTML = ""; // Clear previous history

    donationHistory.forEach(donation => {
        const historyEntry = document.createElement("div");
        historyEntry.classList.add("mb-4","border","rounded-xl","p-4","shadow-xl"); // Add some spacing between history entries

        // Create a div for the section title and amount
        const titleLine = document.createElement("div");
        titleLine.textContent = `${donation.section}: BDT ${donation.amount}`;
        titleLine.classList.add("font-semibold"); // Optional: Add a class for styling

        // Create a div for the date and time zone
        const dateLine = document.createElement("div");
        dateLine.textContent = `on ${donation.date} (${donation.timeZone})`;
        dateLine.classList.add("bg-gray-200","p-2","mt-2","rounded-xl"); // Optional: Add a class for styling



        // Append both to the history entry
        historyEntry.appendChild(titleLine);
        historyEntry.appendChild(dateLine);

        // Append the history entry to the container
        historyContainer.appendChild(historyEntry);
    });

    historyContainer.classList.remove("hidden"); // Show the history container
}


