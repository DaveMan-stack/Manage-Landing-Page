const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const testimonialsContainer = document.getElementById('testimonials-container');
const testimonialsButtons = document.querySelectorAll('#testimonial-buttons span')

const testimonials = testimonialsContainer.querySelectorAll('.testimonial')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})


testimonialsButtons.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        counter = index;
        testimonials.forEach((testimonial, idx) => {
            if (index !== idx) {
                console.log(testimonial)
                testimonial.classList.add('show-hide')
            }

            else if (testimonial.classList.contains('show-hide')) {
                testimonial.classList.remove('show-hide')
            }
            

        })
            
            
    })
})

