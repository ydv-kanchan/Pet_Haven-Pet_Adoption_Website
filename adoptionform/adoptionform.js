document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('adoptionForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        const petType = document.getElementById('petType').value;
        const reason = document.getElementById('reason').value.trim();
        const homeType = document.getElementById('homeType').value;
        const currentPets = document.getElementById('currentPets').value;
        const petExperience = document.getElementById('petExperience').value.trim();
        const previousPet = document.getElementById('previousPet').value.trim();
        const workSchedule = document.getElementById('workSchedule').value;
        const preferredDateTime = document.getElementById('preferredDateTime').value;

        let errors = [];


        if (!name) errors.push("Please enter your name.");
        if (!email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) errors.push("Please enter a valid email address.");
        if (!phone || phone.length < 10) errors.push("Please enter a valid 10-digit phone number.");
        if (!address) errors.push("Please enter your address.");
        if (!reason) errors.push("Please explain why you want to adopt a pet.");
        if (!preferredDateTime) errors.push("Please specify your preferred date and time for meeting the pet.");

        if (errors.length > 0) {
            alert("Please correct the following errors:\n" + errors.join("\n"));
        } else {
            
            const formData = {
                name,
                email,
                phone,
                address,
                petType,
                reason,
                homeType,
                currentPets,
                petExperience,
                previousPet,
                workSchedule,
                preferredDateTime
            };

            
            let submissions = JSON.parse(localStorage.getItem('adoptionFormSubmissions')) || [];
            submissions.push(formData);
            localStorage.setItem('adoptionFormSubmissions', JSON.stringify(submissions));

            alert("Application submitted successfully!");
            form.reset(); 
        }
    });
});
