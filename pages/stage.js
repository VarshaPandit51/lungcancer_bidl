document.getElementById('lung-cancer-stage-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const cancerStage = document.getElementById('cancer-stage').value;

    if (cancerStage) {
        alert(`Selected Cancer Stage: ${cancerStage}`);
    } else {
        alert('Please select a cancer stage.');
    }
});


