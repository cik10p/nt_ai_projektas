/**
 * Hero component
 * Main landing section with title, subtitle, and primary call-to-action
 */
export class Hero {
  private container: HTMLElement

  constructor(container: HTMLElement) {
    this.container = container
    this.render()
    this.setupEventListeners()
  }

  /**
   * Render the hero component
   */
  private render(): void {
    this.container.innerHTML = `
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              Greitas nekilnojamojo turto <span class="hero-highlight">kainų tikrinimas</span>
            </h1>
            <p class="hero-subtitle">
              Sužinokite savo nekilnojamojo turto vertę per kelias minutes. 
              Mūsų pažangus algoritmas analizuoja rinkos duomenis ir pateikia tikslų kainų įvertinimą.
            </p>
            <div class="hero-buttons">
              <button class="btn btn-primary hero-cta" data-action="scroll-to-form">
                Tikrinti kainą dabar
              </button>
              <button class="btn btn-secondary" data-action="learn-more">
                Sužinoti daugiau
              </button>
            </div>
          </div>
          
          <div class="hero-visual">
            <div class="hero-illustration">
              <svg viewBox="0 0 400 300" class="illustration-svg">
                <!-- House illustration -->
                <g class="house-group">
                  <!-- House base -->
                  <rect x="120" y="160" width="160" height="100" fill="#4F46E5" rx="8"/>
                  <!-- Roof -->
                  <path d="M100 160 L200 80 L300 160 Z" fill="#312E81"/>
                  <!-- Door -->
                  <rect x="180" y="200" width="40" height="60" fill="#1E293B" rx="4"/>
                  <!-- Windows -->
                  <rect x="140" y="180" width="25" height="25" fill="#FEF3C7" rx="2"/>
                  <rect x="235" y="180" width="25" height="25" fill="#FEF3C7" rx="2"/>
                  <!-- Door handle -->
                  <circle cx="210" cy="230" r="2" fill="#FCD34D"/>
                </g>
                
                <!-- Price tag -->
                <g class="price-tag" transform="translate(320, 120)">
                  <rect x="0" y="0" width="60" height="30" fill="#10B981" rx="4"/>
                  <text x="30" y="20" text-anchor="middle" fill="white" font-size="12" font-weight="bold">€</text>
                </g>
                
                <!-- Floating elements -->
                <circle cx="80" cy="100" r="3" fill="#8B5CF6" opacity="0.6" class="floating-dot"/>
                <circle cx="340" cy="80" r="2" fill="#F59E0B" opacity="0.7" class="floating-dot"/>
                <circle cx="60" cy="200" r="2.5" fill="#EF4444" opacity="0.5" class="floating-dot"/>
              </svg>
            </div>
          </div>
        </div>
        
        <!-- Statistics -->
        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-number">1000+</div>
            <div class="stat-label">Įvertintų objektų</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">95%</div>
            <div class="stat-label">Tikslumo lygis</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">< 2min</div>
            <div class="stat-label">Rezultato gavimas</div>
          </div>
        </div>
      </div>
    `
  }

  /**
   * Setup event listeners for hero section
   */
  private setupEventListeners(): void {
    const ctaButton = this.container.querySelector('[data-action="scroll-to-form"]') as HTMLButtonElement
    const learnMoreButton = this.container.querySelector('[data-action="learn-more"]') as HTMLButtonElement

    // Main CTA button - scroll to form
    ctaButton?.addEventListener('click', () => {
      const formSection = document.getElementById('real-estate-form')
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' })
      }
    })

    // Learn more button - scroll to features
    learnMoreButton?.addEventListener('click', () => {
      const featuresSection = document.getElementById('features')
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' })
      }
    })

    // Add floating animation to dots
    this.animateFloatingElements()
  }

  /**
   * Animate floating elements in the hero illustration
   */
  private animateFloatingElements(): void {
    const floatingDots = this.container.querySelectorAll('.floating-dot')
    
    floatingDots.forEach((dot, index) => {
      const element = dot as SVGElement
      const delay = index * 0.5
      const duration = 3 + (index * 0.5)
      
      element.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`
    })
  }
}
