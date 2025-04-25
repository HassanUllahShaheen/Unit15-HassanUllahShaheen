        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Deactivate all nav buttons
            document.querySelectorAll('.nav-button').forEach(button => {
                button.classList.remove('active');
            });
            
            // Show selected page
            document.getElementById(pageId).classList.add('active');
            
            // Activate clicked button
            event.currentTarget.classList.add('active');
            
            // Scroll to top
            window.scrollTo(0, 0);
        }

        // Membership form handling
        document.getElementById('membership-form').addEventListener('submit', function(e) {
            e.preventDefault();
            document.getElementById('confirmation').style.display = 'block';
            this.reset();
            
            setTimeout(() => {
                document.getElementById('confirmation').style.display = 'none';
            }, 5000);
        });
