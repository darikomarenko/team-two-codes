import '../assets/styles/members.scss';

export function renderMembers() {
    const members = document.getElementById('members');
    members.innerHTML = `
    <div class="team-container">
    <div class="team">
  <div class="team__info">

  <h5 class="team__h5">
        <img src="../public/images/Reviews/Line.png" alt="line" class="team__line">
        Our Team Members
      </h5>
      <h2 class="team__h2">Our Dedicated Team
      Members.</h2>

    <p class="team__desc">In today’s world, we’re bombarded with choices. From streaming services to meal kits, it can be overwhelming to find the best option.</p>
    <a href="#" class="team__cta">See All Member</a>
  </div>

  <div class="team__photo">
    <img src="../public/images/Members/person1.avif" alt="Team Photo" class="team__photo-img" id="team-photo">
  </div>

  <div class="team__list">
    <ul class="team__ul">
      <li class="team__item team__item--active" data-photo="../public/images/Members/person1.avif">Wade Warren<span>Architect</span></li>
      <li class="team__item" data-photo="../public/images/Members/person2.avif">Brooklyn Simmons<span>Architect Designer</span></li>
      <li class="team__item" data-photo="../public/images/Members/person3.avif">Jonson Duoing<span>Architect</span></li>
      <li class="team__item" data-photo="../public/images/Members/person4.jpg">Esther Howard<span>Architect</span></li>
    </ul>
  </div>
  
</div>
<div class="team__aside">
            <img class="team__img" src="../public/images/Video-block/Architecture.png" alt="Architecture">
        </div> </div>
    `;

    const teamItems = document.querySelectorAll('.team__item');
    const photoElement = document.getElementById('team-photo');
  
    teamItems.forEach(item => {
      item.addEventListener('click', () => {
        const photo = item.getAttribute('data-photo');
        photoElement.src = photo;
        teamItems.forEach(i => i.classList.remove('team__item--active'));
        item.classList.add('team__item--active');
      });
    });
        
    
}
