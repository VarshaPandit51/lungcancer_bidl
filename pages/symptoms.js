document.getElementById('nextButton').addEventListener('click', function() {
    // Get selected symptoms
    const symptomsForm = document.getElementById('symptomsForm');
    const selectedSymptoms = Array.from(symptomsForm.elements.symptoms)
                                  .filter(checkbox => checkbox.checked)
                                  .map(checkbox => checkbox.value);
    
    // Here you can store the selected symptoms, send them to a server, or handle them as needed
    console.log('Selected Symptoms:', selectedSymptoms);

    // Redirect to the next page
    window.location.href = document.getElementById('labs-imaging-form').action;
});
