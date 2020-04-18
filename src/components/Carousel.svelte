<script>
  import { onMount } from "svelte";
  import { ChevronLeftIcon, ChevronRightIcon } from "svelte-feather-icons";
  import Carousel from "@beyonk/svelte-carousel";
</script>

<style>
  .wrapper {
    height: 360px;
    max-width: 1140px;
  }

  .slide-content {
    height: 360px;
  }

  .slide-content img {
    width: 100%;
  }

  @media only screen and (max-width: 580px) {
    .wrapper {
      height: 240px;
    }

    .slide-content {
      height: 240px;
    }
  }
</style>

<div class="wrapper">
  <Carousel draggable={false} perPage={1} autoplay={20000} duration={1000}>
    <span class="control" slot="left-control">
      <ChevronLeftIcon />
    </span>
    <div class="slide-content">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/CarouselPhotos%2Fbrooke-lark-V4MBq8kue3U-unsplash.jpg?alt=media&token=1858aff9-42c6-4e53-afe6-47e4cd407b54"
        alt="" />
    </div>
    <div class="slide-content">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/CarouselPhotos%2Frachel-park-hrlvr2ZlUNk-unsplash.jpg?alt=media&token=261a72ed-dcff-4869-aad6-cdc0cfb4cd91"
        alt="" />
    </div>
    <div class="slide-content">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/vegfood-database.appspot.com/o/CarouselPhotos%2Ftaylor-kiser-EvoIiaIVRzU-unsplash.jpg?alt=media&token=006c95f3-399e-49ba-bb82-2f8234f569ea"
        alt="" />
    </div>
    <span class="control" slot="right-control">
      <ChevronRightIcon />
    </span>
  </Carousel>
</div>
