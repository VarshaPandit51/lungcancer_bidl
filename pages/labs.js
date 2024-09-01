document.getElementById('labs-imaging-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const selectedTests = [];
    document.querySelectorAll('input[name="test"]:checked').forEach((checkbox) => {
        selectedTests.push(checkbox.value);
    });
    
    if (selectedTests.length === 0) {
        displayMessage('Please select at least one test.', 'error');
    } else {
        displayMessage('Tests submitted successfully: ' + selectedTests.join(', '), 'success');
    }
});


