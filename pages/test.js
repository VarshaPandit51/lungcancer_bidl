document.getElementById('test-options-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    if (sampleType && testTechnology) {
        alert(`Sample Type: ${sampleType}\nTest Technology: ${testTechnology}`);
    } else {
        alert('Please select both sample type and test technology.');
    }
    window.location.href = document.getElementById('test-options-form').action;
});
