/**
 * Footer component
 * Contains contact information, links, and social media
 */
export class Footer {
  private container: HTMLElement

  constructor(container: HTMLElement) {
    this.container = container
    this.render()
    this.setupEventListeners()
  }

  /**
   * Render the footer component
   */
  private render(): void {
    this.container.innerHTML = `
      <div class="footer-container">
        <div class="footer-content">
          <!-- Company Info -->
          <div class="footer-section">
            <div class="footer-logo">
              <svg class="footer-logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="footer-logo-text">NT Price</span>
            </div>
            <p class="footer-description">
              Greitas ir patikimas nekilnojamojo turto kainų įvertinimas. 
              Naudojame pažangius algoritmus tiksliausiems rezultatams.
            </p>
            <div class="footer-social">
              <a href="#" class="social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="footer-section">
            <h3 class="footer-section-title">Nuorodos</h3>
            <ul class="footer-links">
              <li><a href="#hero" class="footer-link">Pradžia</a></li>
              <li><a href="#real-estate-form" class="footer-link">Kainų tikrinimas</a></li>
              <li><a href="#features" class="footer-link">Apie mus</a></li>
              <li><a href="#" class="footer-link">DUK</a></li>
              <li><a href="#" class="footer-link">Kontaktai</a></li>
            </ul>
          </div>

          <!-- Services -->
          <div class="footer-section">
            <h3 class="footer-section-title">Paslaugos</h3>
            <ul class="footer-links">
              <li><a href="#" class="footer-link">Turto įvertinimas</a></li>
              <li><a href="#" class="footer-link">Rinkos analizė</a></li>
              <li><a href="#" class="footer-link">Investicijų konsultacijos</a></li>
              <li><a href="#" class="footer-link">API dokumentacija</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div class="footer-section">
            <h3 class="footer-section-title">Kontaktai</h3>
            <div class="footer-contact">
              <div class="contact-item">
                <svg class="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <a href="mailto:info@ntprice.lt" class="contact-link">info@ntprice.lt</a>
              </div>
              <div class="contact-item">
                <svg class="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22 20.52 21.5 21.02 20.92 21.02C9.39 21.02 0 11.63 0 0.0799999C0 -0.52 0.48 -1 1.08 -1H4.08C4.68 -1 5.18 -0.52 5.18 0.0799999C5.18 3.23 5.78 6.29 6.9 9.08C7.03 9.34 6.99 9.65 6.79 9.87L5.25 11.41C6.93 15.05 9.94 18.06 13.58 19.74L15.12 18.2C15.34 18 15.65 17.96 15.91 18.09C18.7 19.21 21.76 19.81 24.91 19.81C25.52 19.81 26 20.29 26 20.89V23.89C26 24.49 25.52 24.97 24.92 24.97C24.01 24.97 23.09 24.93 22.16 24.85" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <a href="tel:+37067812345" class="contact-link">+370 678 12345</a>
              </div>
              <div class="contact-item">
                <svg class="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" stroke-width="2"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" stroke-width="2"/>
                </svg>
                <span class="contact-text">Vilnius, Lietuva</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <div class="footer-copyright">
              <p>&copy; ${new Date().getFullYear()} NT Price. Visos teisės saugomos.</p>
            </div>
            <div class="footer-legal">
              <a href="#" class="legal-link">Privatumo politika</a>
              <a href="#" class="legal-link">Naudojimo sąlygos</a>
              <a href="#" class="legal-link">Slapukų politika</a>
            </div>
          </div>
        </div>
      </div>
    `
  }

  /**
   * Setup event listeners for footer
   */
  private setupEventListeners(): void {
    // Handle footer link clicks for smooth scrolling
    const footerLinks = this.container.querySelectorAll('.footer-link[href^="#"]')
    
    footerLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const targetId = link.getAttribute('href')?.substring(1)
        const targetElement = document.getElementById(targetId || '')
        
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
      })
    })

    // Add hover effects to social links
    this.setupSocialLinkEffects()
  }

  /**
   * Setup social link hover effects
   */
  private setupSocialLinkEffects(): void {
    const socialLinks = this.container.querySelectorAll('.social-link')
    
    socialLinks.forEach(link => {
      const linkElement = link as HTMLElement
      
      link.addEventListener('mouseenter', () => {
        linkElement.style.transform = 'translateY(-2px)'
      })
      
      link.addEventListener('mouseleave', () => {
        linkElement.style.transform = 'translateY(0)'
      })
    })
  }
}
