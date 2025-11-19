import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AOS from 'aos'

gsap.registerPlugin(ScrollTrigger)

AOS.init({
  duration: 1000,
  easing: 'ease-out-cubic',
  once: true,
  offset: 100,
})

window.addEventListener('load', () => {
  const loader = document.getElementById('loader')
  if (loader) {
    setTimeout(() => {
      gsap.to(loader, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          loader.classList.add('hidden')
        }
      })
    }, 1000)
  }
})

const mobileMenuBtn = document.getElementById('mobile-menu-btn')
const mobileMenu = document.getElementById('mobile-menu')

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
    
    if (!mobileMenu.classList.contains('hidden')) {
      const menuItems = mobileMenu.querySelectorAll('li')
      gsap.from(menuItems, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        stagger: 0.1,
        ease: 'power2.out'
      })
    }
  })

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden')
    })
  })
}

const navbar = document.getElementById('navbar')
let lastScroll = 0

if (navbar) {
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset

    if (currentScroll > 100) {
      navbar.classList.add('navbar-scrolled')
    } else {
      navbar.classList.remove('navbar-scrolled')
    }

    if (currentScroll > lastScroll && currentScroll > 500) {
      gsap.to(navbar, { y: -100, duration: 0.3 })
    } else {
      gsap.to(navbar, { y: 0, duration: 0.3 })
    }

    lastScroll = currentScroll
  })
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href')
    if (href !== '#') {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  })
})

gsap.from('.hero-title', {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.5,
  ease: 'power3.out'
})

const shapes = document.querySelectorAll('.floating-shapes > div')
shapes.forEach((shape, index) => {
  gsap.to(shape, {
    y: '+=30',
    x: '+=20',
    rotation: 360,
    duration: 20 + index * 5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  })
})

const magneticButtons = document.querySelectorAll('.btn-primary, .btn-secondary')
magneticButtons.forEach(button => {
  button.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    gsap.to(this, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: 'power2.out'
    })
  })
  
  button.addEventListener('mouseleave', function() {
    gsap.to(this, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: 'power2.out'
    })
  })
})

const contactForm = document.getElementById('contactForm')
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    
    const submitBtn = contactForm.querySelector('button[type="submit"]')
    const originalText = submitBtn.textContent
    
    submitBtn.textContent = 'Sending...'
    submitBtn.disabled = true
    
    const formData = new FormData(contactForm)
    const data = Object.fromEntries(formData)
    
    console.log('Form data:', data)
    
    setTimeout(() => {
      gsap.to(contactForm, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        onComplete: () => {
          contactForm.innerHTML = `
            <div class="text-center py-12">
              <div class="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 class="text-3xl font-bold text-white mb-4">Thank You!</h3>
              <p class="text-gray-400 mb-8">Your message has been sent successfully. I'll get back to you soon!</p>
              <a href="/" class="btn-primary inline-block">Back to Home</a>
            </div>
          `
          gsap.from(contactForm.children[0], {
            opacity: 0,
            y: 20,
            duration: 0.5
          })
        }
      })
    }, 2000)
  })
}

console.log('%c Welcome to Rukky\'s Portfolio!', 'color: #00ff88; font-size: 24px; font-weight: bold;')
console.log('%cLike what you see? Let\'s work together!', 'color: #00ccff; font-size: 16px;')