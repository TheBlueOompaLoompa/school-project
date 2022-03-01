<script>
    export let text;
    export let pos = '0';
</script>

<div style="top: {pos}px;">
    <mq><h2>{text}</h2><h2>{text}</h2><h2>{text}</h2><h2>{text}</h2><h2>{text}</h2><h2>{text}</h2><h2>{text}</h2><h2>{text}</h2><h2>{text}</h2><h2>{text}</h2><h2>{text}</h2><h2>{text}</h2><h2>{text}</h2><h2>{text}</h2><h2>{text}</h2><h2>{text}</h2><h2>{text}</h2><h2>{text}</h2></mq>
</div>

<style>
    div {
        background: linear-gradient(
            270deg,
            #ff00ff,
            #00dbff,
            #ff00ff,
            #00ddff
        );
        background-size: 300% 400%;

        -webkit-animation: BackgroundGradient 10s linear infinite;
        -moz-animation: BackgroundGradient 10s linear infinite;
        animation: BackgroundGradient 10s linear infinite;

        display: flex;
        align-items: center;

        position: absolute;
        left: 0px;
        right: 0px;
        height: 32px;

        border: none;
        overflow: hidden;
    }
    
    div mq {
        font-family: 'Courier New', Courier, monospace;
        color: white;

        --perc: -5.555555555%;
        --speed: 2s;

        -webkit-animation: Marquee var(--speed) linear infinite;
        -moz-animation: Marquee var(--speed) linear infinite;
        animation: Marquee var(--speed) linear infinite;

        margin: 0 auto;
        white-space: nowrap;
        position: absolute;
    }

    h2 {
        display: inline-block;
        margin: 0px;
        margin-right: 20px;
    }

    @-webkit-keyframes BackgroundGradient {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: 50% 0%;
        }
    }
    @-moz-keyframes BackgroundGradient {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: 50% 0%;
        }
    }
    @keyframes BackgroundGradient {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: 100% 0%;
        }
    }
    
    @-webkit-keyframes Marquee {
        0% {
            transform: translate(0%, 0);
        }
        100% {
            transform: translate(var(--perc), 0);
        }
    }
    @-moz-keyframes Marquee {
        0% {
            transform: translate(0%, 0);
        }
        100% {
            transform: translate(var(--perc), 0);
        }
    }
    @keyframes Marquee {
        0% {
            transform: translate(0%, 0);
        }
        100% {
            transform: translate(var(--perc), 0);
        }
    }
</style>