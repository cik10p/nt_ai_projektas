/**
 * Features component
 * Displays information about the web app and its capabilities
 */
export class Features {
  private container: HTMLElement

  constructor(container: HTMLElement) {
    this.container = container
    this.render()
    this.setupEventListeners()
  }

  /**
   * Render the features component
   */
  private render(): void {
    this.container.innerHTML = `
      <div class="features-container">
        <div class="features-header">
          <h2 class="features-title">Kodėl pasirinkti NT Price?</h2>
          <p class="features-subtitle">
            Mūsų platforma naudoja pažangius algoritmus ir aktualius rinkos duomenis, 
            kad suteiktų jums patikimiausią nekilnojamojo turto vertės įvertinimą.
          </p>
        </div>

        <div class="features-grid">
          <!-- Feature 1: Speed -->
          <div class="feature-card" data-aos="fade-up" data-aos-delay="0">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="feature-title">Greitas rezultatas</h3>
            <p class="feature-description">
              Gaukite nekilnojamojo turto įvertinimą per kelias minutes. 
              Mūsų algoritmas analizuoja duomenis realiu laiku.
            </p>
          </div>

          <!-- Feature 2: Accuracy -->
          <div class="feature-card" data-aos="fade-up" data-aos-delay="100">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3 class="feature-title">Aukštas tikslumas</h3>
            <p class="feature-description">
              95% tikslumo lygis, pagrįstas tūkstančiais rinkos sandorių 
              ir nuolat atnaujinamais duomenimis.
            </p>
          </div>

          <!-- Feature 3: Easy to use -->
          <div class="feature-card" data-aos="fade-up" data-aos-delay="200">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 7H17V17H7V7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 5C3 3.89543 3.89543 3 5 3H7V7H3V5Z" stroke="currentColor" stroke-width="2"/>
                <path d="M17 3H19C20.1046 3 21 3.89543 21 5V7H17V3Z" stroke="currentColor" stroke-width="2"/>
                <path d="M21 17V19C21 20.1046 20.1046 21 19 21H17V17H21Z" stroke="currentColor" stroke-width="2"/>
                <path d="M7 21H5C3.89543 21 3 20.1046 3 19V17H7V21Z" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3 class="feature-title">Paprasta naudoti</h3>
            <p class="feature-description">
              Intuityvus dizainas ir paprastas procesas. 
              Jokių sudėtingų formų ar registracijų.
            </p>
          </div>

          <!-- Feature 4: Free -->
          <div class="feature-card" data-aos="fade-up" data-aos-delay="300">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1V23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17 5H9.5C8.11929 5 7 6.11929 7 7.5S8.11929 10 9.5 10H14.5C15.8807 10 17 11.1193 17 12.5S15.8807 15 14.5 15H7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="feature-title">Nemokama</h3>
            <p class="feature-description">
              Bazinis turto įvertinimas yra visiškai nemokamas. 
              Nėra jokių paslėptų mokesčių.
            </p>
          </div>

          <!-- Feature 5: Data Security -->
          <div class="feature-card" data-aos="fade-up" data-aos-delay="400">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 22S20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3 class="feature-title">Duomenų apsauga</h3>
            <p class="feature-description">
              Jūsų duomenys yra saugūs ir niekada nėra perduodami 
              trečiosioms šalims be jūsų sutikimo.
            </p>
          </div>

          <!-- Feature 6: Mobile Friendly -->
          <div class="feature-card" data-aos="fade-up" data-aos-delay="500">
            <div class="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
                <path d="M12 18H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="feature-title">Mobilus dizainas</h3>
            <p class="feature-description">
              Puikiai veikia visuose įrenginiuose - kompiuteryje, 
              planšetėje ar telefone.
            </p>
          </div>
        </div>

        <!-- How it works section -->
        <div class="how-it-works">
          <h3 class="how-it-works-title">Kaip tai veikia?</h3>
          <div class="steps-container">
            <div class="step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4 class="step-title">Aprašykite turtą</h4>
                <p class="step-description">
                  Pateikite pagrindinę informaciją apie savo nekilnojamąjį turtą
                </p>
              </div>
            </div>
            
            <div class="step-connector"></div>
            
            <div class="step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4 class="step-title">AI analizė</h4>
                <p class="step-description">
                  Mūsų algoritmas analizuoja rinkos duomenis ir panašius objektus
                </p>
              </div>
            </div>
            
            <div class="step-connector"></div>
            
            <div class="step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4 class="step-title">Gaukite rezultatą</h4>
                <p class="step-description">
                  Per kelias minutes gaukite patikimą kainų įvertinimą
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="features-cta">
          <h3 class="cta-title">Pasiruošę sužinoti savo turto vertę?</h3>
          <p class="cta-description">
            Pradėkite dabar ir gaukite nemokamą turto įvertinimą per kelias minutes.
          </p>
          <button class="btn btn-primary btn-large" id="featuresCta">
            Tikrinti kainą dabar
          </button>
        </div>
      </div>
    `
  }

  /**
   * Setup event listeners for features section
   */
  private setupEventListeners(): void {
    const ctaButton = this.container.querySelector('#featuresCta') as HTMLButtonElement

    // CTA button - scroll to form
    ctaButton?.addEventListener('click', () => {
      const formSection = document.getElementById('real-estate-form')
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' })
      }
    })

    // Setup intersection observer for animations
    this.setupScrollAnimations()
  }

  /**
   * Setup scroll-based animations
   */
  private setupScrollAnimations(): void {
    if (typeof IntersectionObserver === 'undefined') return

    const cards = this.container.querySelectorAll('.feature-card')
    const steps = this.container.querySelectorAll('.step')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    cards.forEach(card => observer.observe(card))
    steps.forEach(step => observer.observe(step))
  }
}
