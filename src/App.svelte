<script>
  import Marquee from "./lib/Marquee.svelte";

  import Article from './lib/Article.svelte'

  let text = 'Input text into the text box!';
</script>

<!--<Marquee text="{'THE CULTURE OF CODING!'}" />-->

<main>
  <Article/>
  <input bind:value={text}>
  <Marquee text="{text}" pos=2000 />
</main>

<style>
  main {
    padding-top: 32px;
  }

  input {
    position: absolute;
    top: 1950px;
    left: 10px;
    right: 10px;
    
    width: calc(100% - 20px);
    height: 30px;
  }
</style>