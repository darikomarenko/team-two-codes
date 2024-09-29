import '../assets/styles/trustReliable.scss'


export default function renderTrustReliable() {
    const trustReliable = document.getElementById('trusted');

    trustReliable.innerHTML = /*html*/`
  <img src="../../public/images/trustReliable/Architecture.svg" class='trustReliable__architecture' alt="Architecture img">
    <div class='trustReliable__block'>
    <p class='trustReliable__block-teame'><span class='trustReliable__span'>—</span> Our Company Status</p>
    <h2 class='trustReliable__block-title'>Trusted & Reliable</h2>
    <div class='trustReliable__block-advantages'>
      <div class='trustReliable__block-border'>
            <h4 class='trustReliable__block-numbers'>110+</h4>
            <p class='trustReliable__block-description'>Completed projects</p>
      </div>
      <div class='trustReliable__block-border'>
        <h4 class='trustReliable__block-numbers'>280+</h4>
        <p class='trustReliable__block-description'>Team Member</p>
      </div>
      <div class='trustReliable__block-border'>
        <h4 class='trustReliable__block-numbers'>100%+</h4>
        <p class='trustReliable__block-description'>Client Satisfaction</p>
      </div>
      <div class='trustReliable__block-border'>
        <h4 class='trustReliable__block-numbers'>30+</h4>
        <p class='trustReliable__block-description'>Running Project</p>
      </div>
    </div>
    </div>
  `
}
