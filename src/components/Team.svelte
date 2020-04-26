<script>
  let teamBildeEn = "./images/amund-port-2.jpg";
  let teamBildeTo = "./images/amund-port-4.jpg";
  let teamBildeTre = "./images/amund-port-6.jpg";
</script>

<style>
  .team-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    justify-content: space-evenly;
    gap: 24px;
  }

  .team-member img {
    width: 100%;
    margin-bottom: 16px;
  }

  .team-member h4 {
    font-size: 18px;
    color: #3da839;
  }

  .team-member h3 {
    font-size: 24px;
  }

  .team-member p {
    margin-bottom: 8px;
  }

  @media only screen and (max-width: 1024px) {
    .team-member img {
      width: 100%;
      object-fit: cover;
      height: 300px;
    }
  }

  @media only screen and (max-width: 768px) {
    .team-content {
      grid-template-columns: 1fr;
    }
    .team-member img {
      width: 100%;
      height: 400px;
    }
  }
</style>

<div class="team">
  <h2>Teamet</h2>
  <div class="team-content">
    <div class="team-member">
      <img src={teamBildeEn} alt="" />
      <h3>Amund</h3>
      <h4>Founder og matentusiast</h4>
      <p>
        Maecenas quis metus sit amet diam vestibulum consectetur dignissim vitae
        sem. Pellentesque ac egestas ligula.
      </p>
      <a href="mailto:mail@vegfood.no">mail@vegfood.no</a>
    </div>
    <div class="team-member">
      <img src={teamBildeTo} alt="" />
      <h3>Mandel</h3>
      <h4>UX-designer</h4>
      <p>
        Maecenas quis metus sit amet diam vestibulum consectetur dignissim vitae
        sem. Pellentesque ac egestas ligula.
      </p>
      <a href="mailto:mail@vegfood.no">mail@vegfood.no</a>
    </div>
    <div class="team-member">
      <img src={teamBildeTre} alt="" />
      <h3>Bjørnstad</h3>
      <h4>Front-end utvikler</h4>
      <p>
        Maecenas quis metus sit amet diam vestibulum consectetur dignissim vitae
        sem. Pellentesque ac egestas ligula.
      </p>
      <a href="mailto:mail@vegfood.no">mail@vegfood.no</a>
    </div>
  </div>
</div>
