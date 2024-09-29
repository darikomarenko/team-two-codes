import '../assets/styles/theBestServices.scss'

export function renderTheBestServices() {
    const theBestServices = document.getElementById('theBestService');
    theBestServices.innerHTML = /*html*/`
    <div class='theBestServices__crane'>
    <img src="../../public/images/TheBestServices/crane.png" class='theBestServices__crane-img' alt="crane">
  </div>
  <div class='theBestServices__blocks'>
    <div class='theBestServices__blocks-block'>
      <div class='theBestServices__block'>
        <p class='theBestServices__block-name'><span class='theBestServices__spane'>—</span> Latest Services</p>
        <h2 class='theBestServices__block-title'>The Best Services For You.</h2>
        <p class='theBestServices__block-text'>In today's world, we're bombarded with choices. From streaming services to meal kits, it can be overwhelming to find the  best option.</p>
      </div>
      <div class='theBestServices__btn'>
        <button class='theBestServices__btn-text'>See All <img src="../../public/images/TheBestServices/Arrow.svg"
            class='theBestServices__btn-arrow' alt="arrow"></button>
        <img src="../../public/images/TheBestServices/Icon.png" class='theBestServices__btn-img' alt="man icon">
      </div>
    </div>
    <div class='theBestServices__blocks-slider sliderTheBestServices'></div>
  </div>
  `
}

