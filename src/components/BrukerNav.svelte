<script>
  export let segment;
</script>

<style>
  .wrapper {
    margin-top: 32px;
  }
  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
    padding: 8px 0;
    font-weight: 600;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: #333;
    display: block;
    bottom: -1px;
  }

  @media only screen and (max-width: 1024px) {
    .bruker-nav-small {
      display: none;
    }
  }
</style>

<ul class="wrapper bruker-nav-small">
  <li>
    <a
      aria-current={segment === 'minbruker' ? 'page' : undefined}
      href="minbruker">
      Min bruker
    </a>
  </li>
  <li>
    <a
      aria-current={segment === 'favoritter' ? 'page' : undefined}
      href="favoritter">
      Mine favoritter
    </a>
  </li>
</ul>
