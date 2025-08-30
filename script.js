// Function to show photo based on roll number
function showPhoto() {
    const rollNumber = document.getElementById('rollNumber').value.trim().toUpperCase();
    
    // Check if roll number is empty
    if (!rollNumber) {
        alert('Please enter roll number');
        return;
    }
    
    // Check for special case (only 25BLCS010HY)
    if (rollNumber === '25BLCS010HY') {
        showError();
        return;
    }
    
    // Validate roll number format (24BTCSXXXHY, 25BTCSXXXHY, or 25BLCSXXXHY)
    const rollPattern24 = /^24BTCS\d{3}HY$/;
    const rollPattern25BTCS = /^25BTCS\d{3}HY$/;
    const rollPattern25BLCS = /^25BLCS\d{3}HY$/;
    
    if (!rollPattern24.test(rollNumber) && !rollPattern25BTCS.test(rollNumber) && !rollPattern25BLCS.test(rollNumber)) {
        showInvalidRoll();
        return;
    }
    
    // Hide input section and show photo section
    document.getElementById('input-section').classList.add('hidden');
    document.getElementById('photo-section').classList.remove('hidden');
    
    // Show loader
    document.querySelector('.loader').classList.remove('hidden');
    document.getElementById('photo-content').classList.add('hidden');
    
    // Simulate loading time (3 seconds with better animation)
    setTimeout(() => {
        // Hide loader and show photo
        document.querySelector('.loader').classList.add('hidden');
        document.getElementById('photo-content').classList.remove('hidden');
        
        // Display the roll number above the photo
        document.getElementById('displayed-roll').textContent = `Roll Number: ${rollNumber}`;
        
        // Set the photo source
        document.getElementById('photo').src = 'https://as1.ftcdn.net/jpg/12/15/20/74/1000_F_1215207426_CyWsTkMt5vb7bwIv0NcsYBreMNEaBeAP.jpg';
    }, 3000);
}

// Function to show error for special roll numbers
function showError() {
    document.getElementById('input-section').classList.add('hidden');
    document.getElementById('error-section').classList.remove('hidden');
}

// Function to show invalid roll number message
function showInvalidRoll() {
    document.getElementById('input-section').classList.add('hidden');
    document.getElementById('invalid-roll-section').classList.remove('hidden');
}

// Function to go back to input section
function goBack() {
    document.getElementById('error-section').classList.add('hidden');
    document.getElementById('invalid-roll-section').classList.add('hidden');
    document.getElementById('photo-section').classList.add('hidden');
    document.getElementById('input-section').classList.remove('hidden');
    document.getElementById('rollNumber').value = '';
    document.getElementById('rollNumber').focus();
}

// Add event listener for Enter key
document.addEventListener('DOMContentLoaded', function() {
    const rollInput = document.getElementById('rollNumber');
    const submitBtn = document.getElementById('submitBtn');
    
    // Focus on input when page loads
    rollInput.focus();
    
    // Handle Enter key press
    rollInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            showPhoto();
        }
    });
    
    // Handle input changes to enable/disable submit button
    rollInput.addEventListener('input', function() {
        submitBtn.disabled = !this.value.trim();
    });
    
    // Initially disable submit button
    submitBtn.disabled = true;
});

// Add touch support for mobile devices
document.addEventListener('touchstart', function() {}, {passive: true});
