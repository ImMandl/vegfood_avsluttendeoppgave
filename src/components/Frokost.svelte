<script>
  let frokostbilde = "images/frokostbilde.png";
</script>

<style>
  .curved {
    position: relative;
    background: #3da839;
    height: 50vh;
    border-bottom-left-radius: 50% 100%;
    border-bottom-right-radius: 50% 100%;
  }

  .heading {
    text-align: center;
    padding-top: 64px;
  }

  .heading h1 {
    font-size: 64px;
    color: white;
  }

  .heading h3 {
    color: white;
  }

  .bilde {
    position: absolute;
    bottom: -160px;
    left: 50%;
    margin-left: -150px;
    width: 300px;
  }

  .content {
    height: 100vh;
  }
</style>

<div class="curved">
  <div class="heading">
    <h1>Frokost oppskrifter</h1>
    <h3>
      Man sier at frokost er dagens viktigste måltid. Så hvorfor ikke gjøre den
      ordentlig?
    </h3>
  </div>
  <div class="bilde">
    <img src={frokostbilde} alt="" />
  </div>
</div>
<div class="content">
  <div />
</div>
