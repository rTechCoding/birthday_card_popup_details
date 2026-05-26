 // --- Generate Floating Bubbles Dynamically ---
        const container = document.getElementById('bubbleContainer');
        const bubbleCount = 20;

        for (let i = 0; i < bubbleCount; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            
            const size = Math.random() * 40 + 10; 
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${Math.random() * 100}%`;
            bubble.style.animationDelay = `${Math.random() * 8}s`;
            bubble.style.animationDuration = `${Math.random() * 5 + 5}s`; 
            
            container.appendChild(bubble);
        }

        // --- Function to trigger Modal Popup Dynamically ---
        const modalElement = document.getElementById('birthdayModal');
        const myModal = new bootstrap.Modal(modalElement);
        
        function openBirthdayModal(title, message) {
            document.getElementById('modalTitle').innerText = title;
            document.getElementById('modalMessage').innerText = message;
            myModal.show();
        }
