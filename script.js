// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') 
        ? 'Light Mode' 
        : 'Dark Mode';
});

// 1. Event Listeners Demo
const interactiveBox = document.getElementById('interactiveBox');

// Mouse enter event
interactiveBox.addEventListener('mouseenter', () => {
    interactiveBox.textContent = 'Mouse entered!';
    interactiveBox.style.backgroundColor = '#e74c3c';
});

// Mouse leave event
interactiveBox.addEventListener('mouseleave', () => {
    interactiveBox.textContent = 'Hover or click me!';
    interactiveBox.style.backgroundColor = '#3498db';
});

// Click event
interactiveBox.addEventListener('click', () => {
    interactiveBox.textContent = 'Clicked!';
    interactiveBox.style.transform = 'scale(1.1)';
    setTimeout(() => {
        interactiveBox.style.transform = 'scale(1)';
    }, 300);
});

// Double click event
interactiveBox.addEventListener('dblclick', () => {
    interactiveBox.textContent = 'Double clicked!';
    interactiveBox.style.borderRadius = '50%';
    setTimeout(() => {
        interactiveBox.style.borderRadius = '8px';
    }, 1000);
});

// 2. Interactive Counter
let count = 0;
const counterValue = document.getElementById('counterValue');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');

function updateCounter() {
    counterValue.textContent = count;
    counterValue.style.color = count > 0 ? '#27ae60' : count < 0 ? '#e74c3c' : '#2c3e50';
}

incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

decrementBtn.addEventListener('click', () => {
    count--;
    updateCounter();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
});

// 3. Form Validation
const demoForm = document.getElementById('demoForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const ageInput = document.getElementById('age');
const validationResult = document.getElementById('validationResult');

demoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    
    // Name validation
    if (nameInput.value.trim().length < 3) {
        document.getElementById('nameError').style.display = 'block';
        nameInput.style.borderColor = '#e74c3c';
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
        nameInput.style.borderColor = '#ddd';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        document.getElementById('emailError').style.display = 'block';
        emailInput.style.borderColor = '#e74c3c';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
        emailInput.style.borderColor = '#ddd';
    }
    
    // Password validation
    if (passwordInput.value.length < 8) {
        document.getElementById('passwordError').style.display = 'block';
        passwordInput.style.borderColor = '#e74c3c';
        isValid = false;
    } else {
        document.getElementById('passwordError').style.display = 'none';
        passwordInput.style.borderColor = '#ddd';
    }
    
    // Age validation
    const age = parseInt(ageInput.value);
    if (isNaN(age) || age < 13 || age > 120) {
        document.getElementById('ageError').style.display = 'block';
        ageInput.style.borderColor = '#e74c3c';
        isValid = false;
    } else {
        document.getElementById('ageError').style.display = 'none';
        ageInput.style.borderColor = '#ddd';
    }
    
    // Show validation result
    if (isValid) {
        validationResult.textContent = 'Form submitted successfully!';
        validationResult.className = 'success';
        validationResult.style.display = 'block';
        
        // In a real app, you would submit the form here
        // For demo, we'll reset after 3 seconds
        setTimeout(() => {
            demoForm.reset();
            validationResult.style.display = 'none';
        }, 3000);
    } else {
        validationResult.textContent = 'Please fix the errors above.';
        validationResult.className = '';
        validationResult.style.display = 'block';
    }
});

// Add input event listeners to clear errors when typing
nameInput.addEventListener('input', () => {
    document.getElementById('nameError').style.display = 'none';
    nameInput.style.borderColor = '#ddd';
});

emailInput.addEventListener('input', () => {
    document.getElementById('emailError').style.display = 'none';
    emailInput.style.borderColor = '#ddd';
});

passwordInput.addEventListener('input', () => {
    document.getElementById('passwordError').style.display = 'none';
    passwordInput.style.borderColor = '#ddd';
});

ageInput.addEventListener('input', () => {
    document.getElementById('ageError').style.display = 'none';
    ageInput.style.borderColor = '#ddd';
});
