document.getElementById('patientDetailsForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the form from being submitted in the traditional way

    // Collecting data from the form fields
    const data = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        id: document.getElementById('id').value,
        age: document.getElementById('age').value,
        sex: document.getElementById('sex').value
    };

    // Saving data to local storage so it can be accessed in the next steps
    localStorage.setItem('patientDetails', JSON.stringify(data));

    // Redirecting the user to the next page (Physiological Parameters)
    window.location.href = document.getElementById('patientDetailsForm').action;
});
