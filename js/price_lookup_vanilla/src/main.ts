import './style.css'
import { RealEstateForm } from './components/RealEstateForm'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Footer } from './components/Footer'

/**
 * Main application initialization
 * Sets up the complete website structure and initializes all components
 */
class App {
  private container: HTMLElement

  constructor(container: HTMLElement) {
    this.container = container
    this.init()
  }

  /**
   * Initialize the application
   */
  private init(): void {
    this.render()
    this.setupEventListeners()
  }

  /**
   * Render the main application structure
   */
  private render(): void {
    this.container.innerHTML = `
      <div class="app">
        <!-- Navigation -->
        <nav id="navigation"></nav>
        
        <!-- Main Content -->
        <main class="main-content">
          <!-- Hero Section -->
          <section id="hero"></section>
          
          <!-- Real Estate Form -->
          <section id="real-estate-form" class="form-section"></section>
          
          <!-- Features Section -->
          <section id="features"></section>
        </main>
        
        <!-- Footer -->
        <footer id="footer"></footer>
      </div>
    `

    // Initialize components
    this.initializeComponents()
  }

  /**
   * Initialize all components
   */
  private initializeComponents(): void {
    // Initialize navigation
    const navElement = this.container.querySelector('#navigation') as HTMLElement
    new Navigation(navElement)

    // Initialize hero section
    const heroElement = this.container.querySelector('#hero') as HTMLElement
    new Hero(heroElement)

    // Initialize real estate form
    const formElement = this.container.querySelector('#real-estate-form') as HTMLElement
    new RealEstateForm(formElement)

    // Initialize features section
    const featuresElement = this.container.querySelector('#features') as HTMLElement
    new Features(featuresElement)

    // Initialize footer
    const footerElement = this.container.querySelector('#footer') as HTMLElement
    new Footer(footerElement)
  }

  /**
   * Setup global event listeners
   */
  private setupEventListeners(): void {
    // Smooth scrolling for anchor links
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const targetId = target.getAttribute('href')?.substring(1)
        const targetElement = document.getElementById(targetId || '')
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
      }
    })
  }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.querySelector<HTMLDivElement>('#app')!
  new App(appContainer)
})
