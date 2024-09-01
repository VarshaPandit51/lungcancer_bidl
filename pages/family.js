function goToNextForm(nextFormId) {
    document.querySelectorAll('.form-container').forEach(form => {
        form.style.display = 'none';
    });
    document.getElementById(nextFormId).style.display = 'block';
}

// Calculate Pack-Years
document.getElementById('cigarettesPerDay').addEventListener('input', calculatePackYears);
document.getElementById('yearsSmoked').addEventListener('input', calculatePackYears);

function calculatePackYears() {
    const cigarettesPerDay = document.getElementById('cigarettesPerDay').value;
    const yearsSmoked = document.getElementById('yearsSmoked').value;
    const packYears = (cigarettesPerDay / 20) * yearsSmoked;
    document.getElementById('packYears').value = packYears.toFixed(2);
}