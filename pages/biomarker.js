const biomarkersData = {
    EGFR: ["Erlotinib", "Gefitinib", "Afatinib", "Osimertinib"],
    ALK: ["Crizotinib", "Ceritinib", "Alectinib", "Brigatinib"],
    ROS1: ["Crizotinib", "Ceritinib", "Entrectinib"],
    BRAF_V600E: ["Dabrafenib", "Trametinib"],
    MET: ["Crizotinib", "Capmatinib", "Tepotinib"],
    RET: ["Cabozantinib", "Vandetanib", "Selpercatinib"],
    NTRK: ["Larotrectinib", "Entrectinib"]
};

function showInhibitors() {
    const biomarker = document.getElementById("biomarker").value;
    const inhibitorsDiv = document.getElementById("inhibitors");

    if (biomarker) {
        const inhibitors = biomarkersData[biomarker];
        let htmlContent = `<h2>${biomarker} Inhibitors</h2><ul>`;
        inhibitors.forEach(inhibitor => {
            htmlContent += `<li>${inhibitor}</li>`;
        });
        htmlContent += `</ul>`;
        inhibitorsDiv.innerHTML = htmlContent;
    } else {
        inhibitorsDiv.innerHTML = "";
    }
}
