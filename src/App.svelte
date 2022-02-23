<script>
  import Marquee from "./lib/Marquee.svelte";

  let funny = 'Hello, world';
</script>

<Marquee text="{'BREAKING NEWS! '}{funny}!"/>

<main>
  <input type="text" bind:value={funny}>
</main>

<style>
  main {
    padding-top: 32px;
  }
</style>