/**
 * Navigation component
 * Handles the main navigation bar with logo and menu items
 */
export class Navigation {
  private container: HTMLElement

  constructor(container: HTMLElement) {
    this.container = container
    this.render()
    this.setupEventListeners()
  }

  /**
   * Render the navigation component
   */
  private render(): void {
    this.container.innerHTML = `
      <div class="nav-container">
        <div class="nav-content">
          <!-- Logo -->
          <div class="nav-logo">
            <a href="#" class="logo-link">
              <svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="logo-text">NT Price</span>
            </a>
          </div>

          <!-- Navigation Menu -->
          <nav class="nav-menu">
            <ul class="nav-list">
              <li class="nav-item">
                <a href="#hero" class="nav-link active">Pradžia</a>
              </li>
              <li class="nav-item">
                <a href="#real-estate-form" class="nav-link">Kainų tikrinimas</a>
              </li>
              <li class="nav-item">
                <a href="#features" class="nav-link">Apie</a>
              </li>
            </ul>
          </nav>

          <!-- Mobile Menu Button -->
          <button class="mobile-menu-btn" aria-label="Atidaryti meniu">
            <span class="hamburger"></span>
            <span class="hamburger"></span>
            <span class="hamburger"></span>
          </button>
        </div>
      </div>
    `
  }

  /**
   * Setup event listeners for navigation
   */
  private setupEventListeners(): void {
    const mobileMenuBtn = this.container.querySelector('.mobile-menu-btn') as HTMLButtonElement
    const navMenu = this.container.querySelector('.nav-menu') as HTMLElement

    // Mobile menu toggle
    mobileMenuBtn?.addEventListener('click', () => {
      navMenu.classList.toggle('nav-menu--open')
      mobileMenuBtn.classList.toggle('mobile-menu-btn--open')
    })

    // Close mobile menu when clicking on nav links
    const navLinks = this.container.querySelectorAll('.nav-link')
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('nav-menu--open')
        mobileMenuBtn.classList.remove('mobile-menu-btn--open')
        
        // Update active link
        navLinks.forEach(l => l.classList.remove('active'))
        link.classList.add('active')
      })
    })

    // Handle scroll to update active navigation
    window.addEventListener('scroll', () => {
      this.updateActiveNavigation()
    })
  }

  /**
   * Update active navigation based on scroll position
   */
  private updateActiveNavigation(): void {
    const sections = ['hero', 'real-estate-form', 'features']
    const navLinks = this.container.querySelectorAll('.nav-link')
    
    let currentSection = ''
    
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId)
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = sectionId
        }
      }
    })

    navLinks.forEach(link => {
      link.classList.remove('active')
      const href = link.getAttribute('href')
      if (href === `#${currentSection}`) {
        link.classList.add('active')
      }
    })
  }
}
