<script>
    import { onMount } from "svelte";
    import {marked} from 'marked';

    let content = 'Loading...'

    onMount(async () => {
        const res = await fetch('/article.md');
        const text = await res.text();

        content = marked.parse(text);
    })
</script>

<article>
{@html content}
</article>

<style>
    article {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>