document.getElementById('PhysiologicalmetricForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const data = {
    'heart-rate': document.getElementById('heartRate').value,
    weight: document.getElementById('weight').value,
    // Add more parameters here
  };

  try {
    localStorage.setItem('physiologicalmetrics', JSON.stringify(data));
    window.location.href = document.getElementById('physiologicalmetricForm').action;
  } catch (error) {
    console.error('Error saving data:', error);
    // Handle the error, e.g., display an error message to the user
  }
});

  