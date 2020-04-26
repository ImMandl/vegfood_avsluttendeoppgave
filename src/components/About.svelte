<script>
  let aboutImage = "./images/aboutvegan.jpg";
  let aboutImageTo = "./images/aboutvegan2.jpg";
</script>

<style>
  h2 {
    font-size: 32px;
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
    max-width: 1000px;
    display: block;
    margin: 0 auto;
    margin-bottom: 32px;
  }

  .om-tekst-bilde {
    max-height: 300px;
    object-fit: contain;
    overflow: hidden;
    margin-bottom: 24px;
  }

  .om-tekst img {
    width: 100%;
  }

  .om-block {
    margin-bottom: 32px;
  }

  @media only screen and (max-width: 768px) {
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
  }
</style>

<div class="about">
  <h2 class="om-title">
    "Vi ønsker å inspirere folk til å prøve nye ting og hjelpe til å kutte ned
    på kjøttinntaket. Vi mener ikke at du absolutt må slutte å spise kjøtt, men
    at du ikke har vondt av noen måltider uten." - CEO
  </h2>
  <div class="om-tekst">
    <div class="om-block">
      <div class="om-tekst-bilde">
        <img src={aboutImage} alt="" />
      </div>
      <h3>Vår historie</h3>
      <p>
        VegFood er en side for å finne oppskrifter som enten er vegetariske
        eller veganske. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Morbi vitae sodales ligula, vitae vehicula lorem. Praesent mollis
        convallis augue, vitae molestie mi luctus at. Vestibulum fermentum
        lectus id felis pretium euismod. Sed eu sagittis nibh. Vestibulum id
        ante et massa consequat vulputate. Vestibulum id vehicula elit. Praesent
        venenatis mi nec semper varius. Phasellus ut ornare mauris. Duis quis
        rhoncus leo.
      </p>
    </div>
    <div class="om-block">
      <div class="om-tekst-bilde">
        <img src={aboutImageTo} alt="" />
      </div>
      <h3>Hva som driver oss</h3>
      <p>
        Morbi elit mi, viverra id ligula sed, interdum cursus tellus. Aenean
        molestie nunc id lorem feugiat facilisis at vel augue. Sed bibendum nisi
        eu eros feugiat eleifend. In hac habitasse platea dictumst. Quisque
        cursus erat ut neque semper, sit amet dignissim dolor ultricies. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Cras nec mollis tellus. Quisque elementum elementum
        lectus, in posuere leo. Donec quis elit nec ipsum ornare cursus non eget
        lacus. Donec quis nunc urna. Suspendisse elit mi, congue nec odio vel,
        eleifend accum
      </p>
    </div>
  </div>
</div>
