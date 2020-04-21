<script>
  let logo = "graphics/horizontal-logo.svg";
  let fb = "graphics/fb-icon.svg";
  let instagram = "graphics/instagram-icon.svg";
  let twitter = "graphics/twitter-icon.svg";
  let yt = "graphics/yt-icon.svg";
  let mail = "graphics/icons-email.svg";

  export let segment;
</script>

<style>
  footer {
    background-color: #fafafa;
    padding: 62px 0 16px 0;
  }

  hr {
    border: 0.5px solid #d1d1d1;
  }

  .row {
    display: flex;
    flex-direction: row;
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  .wrapper {
    max-width: 1440px;
    padding: 0 64px;
    margin: 0 auto;
  }

  p {
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-block-start: 0;
    padding-block-end: 0;
    padding-inline-start: 0;
    padding-inline-end: 0;
  }

  /* top part of footer */

  .footer-top {
    display: grid;
    grid-template-columns: 3fr 1fr;
  }

  .nyhetsbrev {
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;
  }

  .nyhetsbrev p {
    align-self: center;
  }

  .nyhetsbrev-form {
    display: flex;
    flex-direction: row;
  }

  .nyhetsbrev-form input {
    padding: 8px 20px 8px 42px;
    margin: 0px 8px;
    border: 1px solid #d1d1d1;
    border-radius: 6px;
    box-sizing: border-box;
    font-size: 16px;
    min-width: 300px;
    max-width: 100%;
  }

  button {
    background-color: #d1d1d1;
    border: none;
    border-radius: 18px;
    padding: 8px 20px;
    box-sizing: border-box;
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    width: 100%;
  }

  button:hover {
    cursor: pointer;
    background-color: #c5c5c5;
  }

  .social {
    justify-self: end;
  }

  .social p {
    margin-right: 16px;
    align-self: center;
  }

  .social a {
    margin-right: 16px;
    align-self: center;
  }

  @media only screen and (max-width: 1250px) {
    .footer-top {
      grid-template-columns: 1fr;
    }

    .social {
      justify-self: start;
      margin-top: 16px;
    }

    .social p {
      align-self: flex-start;
    }

    .nyhetsbrev p {
      align-self: flex-start;
    }
  }

  @media only screen and (max-width: 1024px) {
    .wrapper {
      padding: 0 32px;
    }
  }

  @media only screen and (max-width: 840px) {
    .nyhetsbrev {
      flex-direction: column;
    }

    .nyhetsbrev-form {
      margin-top: 8px;
    }

    .nyhetsbrev-form input {
      margin-left: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    .wrapper {
      padding: 0 16px;
    }
  }

  @media only screen and (max-width: 650px) {
    .nyhetsbrev-form {
      flex-direction: column;
    }

    button {
      margin-top: 8px;
    }

    .nyhetsbrev-form input {
      width: 100%;
      min-width: 100px;
    }
  }

  @media only screen and (max-width: 375px) {
    .wrapper {
      padding: 0 16px;
    }
  }

  /* bottom part of fotter */
  .footer-bottom {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin: 0 auto;
    gap: 16px;
    padding-top: 48px;
  }

  .footer-bottom h4 {
    margin: 16px 0 16px 0;
    font-weight: 600;
  }

  .footer-bottom a {
    color: #3969a8;
    margin-bottom: 4px;
  }

  .footer-bottom a:hover {
    color: #1d4374;
  }

  .footer-bottom p {
    margin-bottom: 4px;
  }

  .kontakt img {
    align-self: flex-start;
    margin-top: 8px;
    height: 34px;
  }

  .main-input-container {
    position: relative;
  }

  .main-input-container img {
    position: absolute;
    left: 0;
    padding: 9px 8px 9px 16px;
  }
</style>

<footer>
  <div class="wrapper">
    <div class="footer-top row">
      <div class="nyhetsbrev">
        <p>Meld deg på nyhetsbrevet</p>
        <form class="nyhetsbrev-form row">
          <div class="main-input-container">
            <img src={mail} alt="mail icon" />
            <input type="text" placeholder="Din mail adresse her" />
          </div>
          <button>Ja, meld meg på nyhetsbrevet</button>
        </form>
      </div>
      <div class="social row">
        <p>Følg oss på:</p>
        <a href="https://www.facebook.com/" target="_blank">
          <img src={fb} alt="facebook ikon" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src={instagram} alt="instagram ikon" />
        </a>
        <a href="https://www.twitter.com/" target="_blank">
          <img src={twitter} alt="twitter ikon" />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <img src={yt} alt="youtube ikon" />
        </a>
      </div>
    </div>
    <hr />
    <div class="footer-bottom">
      <div class="kontakt column">
        <h4>Kontakt oss</h4>
        <p>+47 112 22 334</p>
        <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
          kontakt@mail.no
        </a>
        <img src={logo} alt="VegFood logo" />
      </div>
      <div class="snarveier column">
        <h4>Snarveier</h4>
        <a aria-current={segment === undefined ? 'page' : undefined} href=".">
          Forside
        </a>
        <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
          Finn oppskrifter
        </a>
        <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
          Mine favoritter
        </a>
      </div>
      <div class="info column">
        <h4>Informasjon</h4>
        <a aria-current={segment === 'gdpr' ? 'page' : undefined} href="gdpr">
          Personopplysninger
        </a>
        <a aria-current={segment === 'faq' ? 'page' : undefined} href="faq">
          Spørsmål og svar
        </a>
        <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
          Samarbeidspartnere
        </a>
      </div>
      <div class="greit-aa-vite column">
        <h4>Greit å vite</h4>
        <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
          Kampanjer
        </a>
        <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
          Om oss
        </a>
      </div>
    </div>
  </div>
</footer>
