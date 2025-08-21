/**
 * Real Estate Form component
 * Handles the main form for property description and detailed search
 */
export class RealEstateForm {
  private container: HTMLElement

  constructor(container: HTMLElement) {
    this.container = container
    this.render()
    this.setupEventListeners()
  }

  /**
   * Render the real estate form component
   */
  private render(): void {
    this.container.innerHTML = `
      <div class="form-container">
        <div class="form-header">
          <h2 class="form-title">Sužinokite savo turto vertę</h2>
          <p class="form-description">
            Aprašykite savo nekilnojamąjį turtą ir gaukite tikslų kainų įvertinimą
          </p>
        </div>

        <form class="real-estate-form" id="realEstateForm">
          <!-- Basic Description -->
          <div class="form-group">
            <label for="propertyDescription" class="form-label">
              Aprašykite savo nekilnojamą turtą *
            </label>
            <textarea 
              id="propertyDescription" 
              name="propertyDescription"
              class="form-control form-textarea"
              placeholder="Pvz.: Dviejų kambarių butas Vilniaus centre, 50 kv.m, po remonto..."
              rows="4"
              required
              minlength="20"
              maxlength="1000"
            ></textarea>
            <div class="form-help">
              <span class="char-counter">
                <span id="charCount">0</span>/1000 simbolių
              </span>
              <span class="form-error" id="descriptionError"></span>
            </div>
          </div>

          <!-- Detailed Search Toggle -->
          <div class="form-group">
            <label class="checkbox-container">
              <input type="checkbox" id="detailedSearch" name="detailedSearch">
              <span class="checkmark"></span>
              Detalesné paieška
            </label>
            <p class="checkbox-help">Pateikite papildomą informaciją tikslesniam įvertinimui</p>
          </div>

          <!-- Detailed Search Fields -->
          <div class="detailed-fields" id="detailedFields" style="display: none;">
            <div class="form-row">
              <div class="form-group">
                <label for="address" class="form-label">Adresas</label>
                <input 
                  type="text" 
                  id="address" 
                  name="address"
                  class="form-control"
                  placeholder="Pvz.: Gedimino pr. 1, Vilnius"
                  maxlength="50"
                >
              </div>
              
              <div class="form-group">
                <label for="area" class="form-label">Plotas (kv.m)</label>
                <input 
                  type="number" 
                  id="area" 
                  name="area"
                  class="form-control"
                  placeholder="50"
                  min="1"
                  max="9999"
                >
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="propertyType" class="form-label">Tipas</label>
                <select id="propertyType" name="propertyType" class="form-control">
                  <option value="">Pasirinkite tipą</option>
                  <option value="namas">Namas</option>
                  <option value="butas">Butas</option>
                  <option value="kotedzas">Kotedžas</option>
                  <option value="sklypas">Sklypas be namo</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="rooms" class="form-label">Kambarių skaičius</label>
                <input 
                  type="number" 
                  id="rooms" 
                  name="rooms"
                  class="form-control"
                  placeholder="2"
                  min="1"
                  max="20"
                >
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="condition" class="form-label">Būklė</label>
                <select id="condition" name="condition" class="form-control">
                  <option value="">Pasirinkite būklę</option>
                  <option value="naujai-renovuotas">Naujai renovuotas</option>
                  <option value="1">Neseniai renovuotas</option>
                  <option value="5">Renovuota prieš 5 metus</option>
                  <option value="10">Renovuota prieš 10 metų</option>
                  <option value="15">Renovuota prieš 15 metų</option>
                  <option value="20">Renovuota prieš 20 metų</option>
                  <option value="nerenavuotas">Nerenovuotas</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="constructionYear" class="form-label">Statybos metai</label>
                <input 
                  type="number" 
                  id="constructionYear" 
                  name="constructionYear"
                  class="form-control"
                  placeholder="2000"
                  min="1800"
                  max="${new Date().getFullYear()}"
                >
              </div>
            </div>

            <div class="form-group">
              <label for="heating" class="form-label">Šildymas</label>
              <select id="heating" name="heating" class="form-control">
                <option value="">Pasirinkite šildymo tipą</option>
                <option value="granulinis">Granulinis</option>
                <option value="dujos">Dujos</option>
                <option value="malkos">Malkos</option>
                <option value="oras-vanduo">Oras-vanduo</option>
                <option value="oras-oras">Oras-oras</option>
                <option value="geoterminis">Geoterminis</option>
                <option value="nera">Nėra</option>
              </select>
            </div>

            <div class="form-group">
              <label for="detailedDescription" class="form-label">Papildomas aprašymas</label>
              <textarea 
                id="detailedDescription" 
                name="detailedDescription"
                class="form-control form-textarea"
                placeholder="Papildoma informacija apie objektą..."
                rows="3"
                maxlength="500"
              ></textarea>
              <div class="form-help">
                <span class="char-counter">
                  <span id="detailedCharCount">0</span>/500 simbolių
                </span>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="form-actions">
            <button type="submit" class="btn btn-primary btn-large" id="submitBtn">
              <span class="btn-text">Gauti kainų įvertinimą</span>
              <span class="btn-loader" style="display: none;">
                <svg class="spinner" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" opacity="0.3"/>
                  <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"/>
                </svg>
                Analizuojama...
              </span>
            </button>
          </div>
        </form>

        <!-- Results Section -->
        <div class="results-section" id="resultsSection" style="display: none;">
          <div class="results-content">
            <h3 class="results-title">Įvertinimo rezultatai</h3>
            <div class="price-estimate">
              <div class="price-main">
                <span class="price-value" id="priceValue">€ 120,000</span>
                <span class="price-label">Įvertinta vertė</span>
              </div>
              <div class="price-range">
                <span class="price-range-text">Tikėtinas diapazonas: </span>
                <span id="priceRange">€ 110,000 - € 130,000</span>
              </div>
            </div>
            <div class="results-actions">
              <button class="btn btn-secondary" id="newSearchBtn">Nauja paieška</button>
              <button class="btn btn-outline" id="shareResultsBtn">Dalintis rezultatais</button>
            </div>
          </div>
        </div>
      </div>
    `
  }

  /**
   * Setup event listeners for the form
   */
  private setupEventListeners(): void {
    const form = this.container.querySelector('#realEstateForm') as HTMLFormElement
    const detailedSearchCheckbox = this.container.querySelector('#detailedSearch') as HTMLInputElement
    const descriptionTextarea = this.container.querySelector('#propertyDescription') as HTMLTextAreaElement
    const detailedDescriptionTextarea = this.container.querySelector('#detailedDescription') as HTMLTextAreaElement
    const newSearchBtn = this.container.querySelector('#newSearchBtn') as HTMLButtonElement

    // Toggle detailed search fields
    detailedSearchCheckbox?.addEventListener('change', () => {
      this.toggleDetailedSearch(detailedSearchCheckbox.checked)
    })

    // Character counters
    this.setupCharacterCounter(descriptionTextarea, 'charCount', 1000)
    this.setupCharacterCounter(detailedDescriptionTextarea, 'detailedCharCount', 500)

    // Form validation
    this.setupFormValidation()

    // Form submission
    form?.addEventListener('submit', (e) => {
      e.preventDefault()
      this.handleFormSubmit()
    })

    // New search button
    newSearchBtn?.addEventListener('click', () => {
      this.resetForm()
    })
  }

  /**
   * Toggle detailed search fields visibility
   */
  private toggleDetailedSearch(show: boolean): void {
    const detailedFields = this.container.querySelector('#detailedFields') as HTMLElement

    if (show) {
      detailedFields.style.display = 'block'
      // Animate in
      requestAnimationFrame(() => {
        detailedFields.style.opacity = '0'
        detailedFields.style.transform = 'translateY(-10px)'
        detailedFields.style.transition = 'all 0.3s ease'
        requestAnimationFrame(() => {
          detailedFields.style.opacity = '1'
          detailedFields.style.transform = 'translateY(0)'
        })
      })
    } else {
      detailedFields.style.transition = 'all 0.3s ease'
      detailedFields.style.opacity = '0'
      detailedFields.style.transform = 'translateY(-10px)'
      setTimeout(() => {
        detailedFields.style.display = 'none'
      }, 300)
    }
  }

  /**
   * Setup character counter for textarea
   */
  private setupCharacterCounter(textarea: HTMLTextAreaElement | null, counterId: string, maxLength: number): void {
    if (!textarea) return

    const counter = this.container.querySelector(`#${counterId}`) as HTMLElement
    
    textarea.addEventListener('input', () => {
      const length = textarea.value.length
      if (counter) {
        counter.textContent = length.toString()
        
        // Color coding for character count
        const percentage = (length / maxLength) * 100
        if (percentage > 90) {
          counter.style.color = '#EF4444' // Red
        } else if (percentage > 75) {
          counter.style.color = '#F59E0B' // Amber
        } else {
          counter.style.color = '#6B7280' // Gray
        }
      }
    })
  }

  /**
   * Setup form validation
   */
  private setupFormValidation(): void {
    const descriptionTextarea = this.container.querySelector('#propertyDescription') as HTMLTextAreaElement
    const errorElement = this.container.querySelector('#descriptionError') as HTMLElement

    descriptionTextarea?.addEventListener('blur', () => {
      this.validateDescription(descriptionTextarea.value, errorElement)
    })

    descriptionTextarea?.addEventListener('input', () => {
      // Clear error on input
      if (errorElement) {
        errorElement.textContent = ''
        errorElement.style.display = 'none'
      }
    })
  }

  /**
   * Validate property description
   */
  private validateDescription(value: string, errorElement: HTMLElement): boolean {
    if (value.length < 20) {
      this.showError(errorElement, 'Aprašymas turi būti bent 20 simbolių')
      return false
    }
    
    if (value.length > 1000) {
      this.showError(errorElement, 'Aprašymas negali viršyti 1000 simbolių')
      return false
    }

    this.hideError(errorElement)
    return true
  }

  /**
   * Show error message
   */
  private showError(errorElement: HTMLElement, message: string): void {
    if (errorElement) {
      errorElement.textContent = message
      errorElement.style.display = 'block'
    }
  }

  /**
   * Hide error message
   */
  private hideError(errorElement: HTMLElement): void {
    if (errorElement) {
      errorElement.textContent = ''
      errorElement.style.display = 'none'
    }
  }

  /**
   * Handle form submission
   */
  private async handleFormSubmit(): Promise<void> {
    const form = this.container.querySelector('#realEstateForm') as HTMLFormElement
    const submitBtn = this.container.querySelector('#submitBtn') as HTMLButtonElement
    const btnText = submitBtn.querySelector('.btn-text') as HTMLElement
    const btnLoader = submitBtn.querySelector('.btn-loader') as HTMLElement

    // Get form data
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    // Validate required fields
    const description = data.propertyDescription as string
    const errorElement = this.container.querySelector('#descriptionError') as HTMLElement

    if (!this.validateDescription(description, errorElement)) {
      return
    }

    // Show loading state
    btnText.style.display = 'none'
    btnLoader.style.display = 'flex'
    submitBtn.disabled = true

    try {
      // Simulate API call
      await this.simulateApiCall(data)
      
      // Show results
      this.showResults()
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Įvyko klaida. Bandykite dar kartą.')
    } finally {
      // Reset button state
      btnText.style.display = 'block'
      btnLoader.style.display = 'none'
      submitBtn.disabled = false
    }
  }

  /**
   * Simulate API call for price estimation
   */
  private async simulateApiCall(data: any): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate price calculation based on data
        const basePrice = 100000
        const area = parseInt(data.area) || 50
        const pricePerSqm = basePrice / area
        
        // Store mock result
        this.mockPriceEstimation = {
          price: Math.round(pricePerSqm * area),
          minPrice: Math.round(pricePerSqm * area * 0.9),
          maxPrice: Math.round(pricePerSqm * area * 1.1)
        }
        
        resolve()
      }, 2000)
    })
  }

  private mockPriceEstimation = { price: 120000, minPrice: 110000, maxPrice: 130000 }

  /**
   * Show estimation results
   */
  private showResults(): void {
    const formSection = this.container.querySelector('.real-estate-form') as HTMLElement
    const resultsSection = this.container.querySelector('#resultsSection') as HTMLElement
    const priceValue = this.container.querySelector('#priceValue') as HTMLElement
    const priceRange = this.container.querySelector('#priceRange') as HTMLElement

    // Hide form and show results
    formSection.style.display = 'none'
    resultsSection.style.display = 'block'

    // Update price values
    if (priceValue) {
      priceValue.textContent = `€ ${this.mockPriceEstimation.price.toLocaleString()}`
    }
    if (priceRange) {
      priceRange.textContent = `€ ${this.mockPriceEstimation.minPrice.toLocaleString()} - € ${this.mockPriceEstimation.maxPrice.toLocaleString()}`
    }

    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth' })
  }

  /**
   * Reset form to initial state
   */
  private resetForm(): void {
    const form = this.container.querySelector('#realEstateForm') as HTMLFormElement
    const resultsSection = this.container.querySelector('#resultsSection') as HTMLElement
    const formSection = this.container.querySelector('.real-estate-form') as HTMLElement
    const detailedSearchCheckbox = this.container.querySelector('#detailedSearch') as HTMLInputElement

    // Reset form
    form.reset()
    
    // Hide results and show form
    resultsSection.style.display = 'none'
    formSection.style.display = 'block'

    // Reset detailed search
    if (detailedSearchCheckbox) {
      detailedSearchCheckbox.checked = false
      this.toggleDetailedSearch(false)
    }

    // Reset character counters
    const charCount = this.container.querySelector('#charCount') as HTMLElement
    const detailedCharCount = this.container.querySelector('#detailedCharCount') as HTMLElement
    
    if (charCount) charCount.textContent = '0'
    if (detailedCharCount) detailedCharCount.textContent = '0'

    // Scroll back to form
    this.container.scrollIntoView({ behavior: 'smooth' })
  }
}
