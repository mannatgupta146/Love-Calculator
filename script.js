function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    const result = document.getElementById("result");
    const button = document.querySelector("button");

    // Clear previous result and show loading message
    result.innerHTML = `<div class="loading">Calculating...</div>`;
    button.disabled = true;

    // Validation to ensure both names are entered
    setTimeout(() => {
        if (name1 === "" || name2 === "") {
            result.innerHTML = "Please enter both names.";
        } else {
            const lovePercentage = Math.floor(Math.random() * 101);
            result.innerHTML = `${name1} and ${name2}'s Love Percentage: ${lovePercentage}%`;

            if (lovePercentage >= 0 && lovePercentage < 25) {
                result.innerHTML += "<br> Not a Great Match. Keep Looking!";
            } else if (lovePercentage >= 25 && lovePercentage < 50) {
                result.innerHTML += "<br> A bit of potential, but work is needed!";
            } else if (lovePercentage >= 50 && lovePercentage < 75) {
                result.innerHTML += "<br> There's a good chance! Give it a try!";
            } else if (lovePercentage >= 75 && lovePercentage < 100) {
                result.innerHTML += "<br> Great Match! Love is in the Air!";
            } else {
                result.innerHTML += "<br> Perfect Match! Soulmates!";
            }
        }
        button.disabled = false;
    }, 1000); // Simulate delay for calculation
}
