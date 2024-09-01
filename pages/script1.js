document.getElementById('drug-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let drug1 = document.getElementById('drug1').value;
    let drug2 = document.getElementById('drug2').value;

    // Simulate a drug interaction check
    let result = checkDrugInteraction(drug1, drug2);

    document.getElementById('result').innerHTML = result;
});

function checkDrugInteraction(drug1, drug2) {
    // Simulate an API call or a database lookup
    // Here we use a simple static response for demonstration
    if (drug1.toLowerCase() === 'aspirin' && drug2.toLowerCase() === 'ibuprofen') {
        return 'Warning: Aspirin and Ibuprofen can cause serious gastrointestinal issues when taken together.';
    } else {
        return 'No known interactions between ' + drug1 + ' and ' + drug2 + '.';
    }
}
