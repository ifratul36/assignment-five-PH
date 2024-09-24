document.getElementById('donation-history').addEventListener('click', function() {
    console.log("btn clicked show....");

    // Hide the main container and show the history container
    document.getElementById('main-container').classList.add('hidden');
    document.getElementById('history-container').classList.remove('hidden');

    // Toggle button background colors
    this.classList.add('bg-primary'); // Add bg-primary to the "History" button
    document.getElementById('donation-btn').classList.remove('bg-primary'); // Remove bg-primary from the "Donation" button
});

document.getElementById('donation-btn').addEventListener('click', function() {
    // Show the main container and hide the history container
    document.getElementById('main-container').classList.remove('hidden');
    document.getElementById('history-container').classList.add('hidden');

    // Toggle button background colors
    this.classList.add('bg-primary'); 
    document.getElementById('donation-history').classList.remove('bg-primary'); 
});







