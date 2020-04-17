<script>
  let searchIcon = "graphics/icons-search.svg";
</script>

<style>
  .search {
    position: relative;
    height: 400px;
    width: 100%;
    margin-bottom: 48px;
    overflow: hidden;
  }

  .search-container {
    background-image: url("images/searchbackground.jpg");
    background-color: #d1d1d1; /* used if the image does not show */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    padding: 82px 42px 24px 42px;
  }

  .search-container h1,
  .search-container h4 {
    color: white;
  }

  .search-bar-container img {
    position: absolute;
    left: 0;
    padding: 9px 8px 9px 42px;
    margin: 24px 0 0 18px;
  }

  input {
    padding: 24px 62px 24px 42px;
    border: 1px solid #333;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
    width: 95%;
  }
</style>

<div class="search">
  <div class="search-container">
    <h4>Alle oppskrifter</h4>
    <h1>Finn enkelt oppskriften du leter etter</h1>
    <form>
      <div class="search-bar-container">
        <img src={searchIcon} alt="search icon" />
        <input type="text" placeholder="Søk etter oppskrifter" />
      </div>
    </form>
  </div>
</div>
