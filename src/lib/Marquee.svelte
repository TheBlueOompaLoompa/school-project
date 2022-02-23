<script>
    export let text;
</script>

<div>
    <mq><h2>{text}</h2><h2>{text}</h2><h2>{text}</h2><h2>{text}</h2></mq>
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
        top: 0px;
        left: 0px;
        right: 0px;
        height: 32px;

        border: none;
        overflow: hidden;
    }

    div mq {
        font-family: 'Courier New', Courier, monospace;
        color: white;

        -webkit-animation: Marquee 5s linear infinite;
        -moz-animation: Marquee 5s linear infinite;
        animation: Marquee 5s linear infinite;

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
            transform: translate(-25%, 0);
        }
    }
    @-moz-keyframes Marquee {
        0% {
            transform: translate(0%, 0);
        }
        100% {
            transform: translate(-25%, 0);
        }
    }
    @keyframes Marquee {
        0% {
            transform: translate(0%, 0);
        }
        100% {
            transform: translate(-25%, 0);
        }
    }
</style>