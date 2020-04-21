<script>
  let aboutImage = "./images/aboutvegan.jpg";
  let aboutImageTo = "./images/aboutvegan2.jpg";
  let teamBildeEn = "./images/amund-port-2.jpg";
  let teamBildeTo = "./images/amund-port-4.jpg";
  let teamBildeTre = "./images/amund-port-6.jpg";
</script>

<style>
  h2 {
    font-size: 32px;
  }

  .small {
    display: none;
  }

  /* ABOUT */
  .about {
    margin-bottom: 48px;
  }

  .about p {
    margin-bottom: 8px;
  }

  .om-title {
    width: 70%;
    margin: 16px auto 48px;
    text-align: center;
  }

  .om-tekst {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  .om-tekst-bilde {
    max-height: 300px;
    object-fit: contain;
    overflow: hidden;
    margin-bottom: 16px;
  }

  .om-tekst img {
    width: 100%;
  }

  .radius-bottom-right {
    border-bottom-right-radius: 120px;
  }

  .radius-bottom-left {
    border-bottom-left-radius: 120px;
  }

  /* TEAM */
  .about {
    margin-bottom: 42px;
  }

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
    .big {
      display: none;
    }

    .small {
      display: block;
    }

    .om-title {
      width: 100%;
    }
    .om-tekst {
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .om-tekst p {
      columns: 2;
    }

    .team-content {
      grid-template-columns: 1fr;
    }
    .team-member img {
      width: 100%;
      height: 400px;
    }
  }
</style>

<svelte:head>
  <title>Om oss</title>
</svelte:head>

<div>
  <div class="about">
    <h2 class="om-title">
      "Vi ønsker å inspirere folk til å prøve nye ting og hjelpe til å kutte ned
      på kjøttinntaket. Vi mener ikke at du absolutt må slutte å spise kjøtt,
      men at du ikke har vondt av noen måltider uten." - CEO
    </h2>
    <div class="om-tekst">
      <div>
        <div class="om-tekst-bilde radius-bottom-right">
          <img src={aboutImage} alt="" />
        </div>
        <h3>Vår historie</h3>
        <p>
          VegFood er en side for å finne oppskrifter som enten er vegetariske
          eller veganske. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Morbi vitae sodales ligula, vitae vehicula lorem. Praesent
          mollis convallis augue, vitae molestie mi luctus at. Vestibulum
          fermentum lectus id felis pretium euismod. Sed eu sagittis nibh.
          Vestibulum id ante et massa consequat vulputate. Vestibulum id
          vehicula elit. Praesent venenatis mi nec semper varius. Phasellus ut
          ornare mauris. Duis quis rhoncus leo.
        </p>
      </div>
      <div>
        <div class="om-tekst-bilde small radius-bottom-left">
          <img src={aboutImageTo} alt="" />
        </div>
        <h3>Hva som driver oss</h3>
        <p>
          Morbi elit mi, viverra id ligula sed, interdum cursus tellus. Aenean
          molestie nunc id lorem feugiat facilisis at vel augue. Sed bibendum
          nisi eu eros feugiat eleifend. In hac habitasse platea dictumst.
          Quisque cursus erat ut neque semper, sit amet dignissim dolor
          ultricies. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Cras nec mollis tellus. Quisque
          elementum elementum lectus, in posuere leo. Donec quis elit nec ipsum
          ornare cursus non eget lacus. Donec quis nunc urna. Suspendisse elit
          mi, congue nec odio vel, eleifend accum
        </p>
        <div class="om-tekst-bilde big radius-bottom-left">
          <img src={aboutImageTo} alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="team">
    <h2>Teamet</h2>
    <div class="team-content">
      <div class="team-member">
        <img src={teamBildeEn} alt="" />
        <h3>Amund</h3>
        <h4>Founder og matentusiast</h4>
        <p>
          Maecenas quis metus sit amet diam vestibulum consectetur dignissim
          vitae sem. Pellentesque ac egestas ligula. Proin fringilla venenatis
          massa, non porta ex venenatis id. Duis hendrerit nisl a aliquet
          interdum.
        </p>
        <a href="mailto:mail@vegfood.no">mail@vegfood.no</a>
      </div>
      <div class="team-member">
        <img src={teamBildeTo} alt="" />
        <h3>Mandel</h3>
        <h4>UX-designer</h4>
        <p>
          Maecenas quis metus sit amet diam vestibulum consectetur dignissim
          vitae sem. Pellentesque ac egestas ligula. Proin fringilla venenatis
          massa, non porta ex venenatis id. Duis hendrerit nisl a aliquet
          interdum.
        </p>
        <a href="mailto:mail@vegfood.no">mail@vegfood.no</a>
      </div>
      <div class="team-member">
        <img src={teamBildeTre} alt="" />
        <h3>Bjørnstad</h3>
        <h4>Front-end utvikler</h4>
        <p>
          Maecenas quis metus sit amet diam vestibulum consectetur dignissim
          vitae sem. Pellentesque ac egestas ligula. Proin fringilla venenatis
          massa, non porta ex venenatis id. Duis hendrerit nisl a aliquet
          interdum.
        </p>
        <a href="mailto:mail@vegfood.no">mail@vegfood.no</a>
      </div>
    </div>
  </div>
</div>
