<div>
    <mq><slot/></mq>
</div>

<style>
    div {
        background: linear-gradient(
            270deg,
            #ff00ff,
            #00dbff,
            #ff00ff,
            hsl(188, 100%, 50%)
        );
        background-size: 300% 400%;

        -webkit-animation: BackgroundGradient 3s linear infinite;
        -moz-animation: BackgroundGradient 3s linear infinite;
        animation: BackgroundGradient 3s linear infinite;

        width: 100%;
        height: 32px;

        border-radius: 16px;
        overflow: hidden;
    }

    div mq {
        font-family: 'Courier New', Courier, monospace;
        color: white;

        -webkit-animation: Marquee 5s linear infinite;
        -moz-animation: Marquee 5s linear infinite;
        animation: Marquee 5s linear infinite;

        display: flex;
        align-items: center;
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
            padding-left: 0px;
        }
        100% {
            padding-left: 100%; 
        }
    }
    @-moz-keyframes Marquee {
        0% {
            padding-left: 0px;
        }
        100% {
            padding-left: 100%; 
        }
    }
    @keyframes Marquee {
        0% {
            padding-left: 0px;
        }
        100% {
            padding-left: 100%; 
        }
    }
</style>