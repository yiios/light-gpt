import Head from 'next/head';

const HeadMeatSetup = () => {
    return (
        <Head>
            <title>ChatGPT 镜像站 - ai.yiios.com</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            />
            <meta
                name="description"
                content="一个体验超级好的ChatGPT镜像网站，免费使用"
            />

            <meta name="keywords" content="Next.js,ChatGPT,GPT,AI" />

            {/** 支持webAPP(苹果添加到主页书签访问) */}
            <meta content="yes" name="apple-mobile-web-app-capable" />
            <link rel="apple-touch-icon" href="/favicon.ico" />
            <link
                rel="apple-touch-icon"
                sizes="72x72"
                href="/apple-touch-icon.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
        </Head>
    );
};

export default HeadMeatSetup;
