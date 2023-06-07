<template>
    <div class=" bg-blue-700 flex flex-col lg:flex-row w-full mt-16 lg:mt-0 lg:ml-16">
        
        <!-- Headline desktop -->
        <div class="cover-headings hidden lg:flex ml-14 xl:ml-20 2xl:ml-24 absolute w-6/12 h-full z-20">
            <svg class=" w-full h-full" viewBox="0 0 627 323" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.834 173L42.256 75.005H68.249L109.671 173H80.759L73.67 155.625H36.14L29.19 173H0.834ZM44.063 134.636H65.886L55.044 106.975L44.063 134.636ZM119.112 173V75.7H144.271L184.303 127.13V75.7H210.991V173H187.361L145.8 119.624V173H119.112ZM228.249 173V75.7H253.408L293.44 127.13V75.7H320.128V173H296.498L254.937 119.624V173H228.249ZM381.171 174.807C353.51 174.807 336.135 160.768 336.135 130.327V75.7H363.518V129.771C363.518 143.81 370.607 150.482 381.449 150.482C392.291 150.482 399.38 144.088 399.38 130.466V75.7H426.763V129.632C426.763 161.046 408.832 174.807 381.171 174.807ZM431.001 173L472.423 75.005H498.416L539.838 173H510.926L503.837 155.625H466.307L459.357 173H431.001ZM474.23 134.636H496.053L485.211 106.975L474.23 134.636ZM549.279 173V75.7H576.245V149.37H623.366V173H549.279Z" fill="#FF7800"/>
            <path d="M8.618 301V203.7H54.627C69.5 203.7 79.786 207.592 86.319 214.264C92.018 219.824 94.937 227.33 94.937 236.921V237.199C94.937 252.072 87.014 261.941 74.921 267.084L98.134 301H66.998L47.399 271.532H35.584V301H8.618ZM35.584 250.404H53.376C62.55 250.404 67.832 245.956 67.832 238.867V238.589C67.832 230.944 62.272 227.052 53.237 227.052H35.584V250.404ZM108.524 301V203.7H186.781V226.635H135.212V241.369H181.916V262.636H135.212V278.065H187.476V301H108.524ZM201.236 301V203.7H242.936C267.539 203.7 283.385 216.349 283.385 237.894V238.172C283.385 261.107 265.732 273.2 241.546 273.2H228.202V301H201.236ZM228.202 252.072H240.99C250.581 252.072 256.419 247.068 256.419 239.423V239.145C256.419 230.805 250.581 226.357 240.851 226.357H228.202V252.072ZM343.691 302.946C313.667 302.946 291.427 280.567 291.427 252.628V252.35C291.427 224.411 313.945 201.754 343.969 201.754C373.993 201.754 396.233 224.133 396.233 252.072V252.35C396.233 280.289 373.715 302.946 343.691 302.946ZM343.969 278.621C358.842 278.621 368.711 266.667 368.711 252.628V252.35C368.711 238.311 358.564 226.079 343.691 226.079C328.957 226.079 319.088 238.033 319.088 252.072V252.35C319.088 266.389 329.235 278.621 343.969 278.621ZM410.279 301V203.7H456.288C471.161 203.7 481.447 207.592 487.98 214.264C493.679 219.824 496.598 227.33 496.598 236.921V237.199C496.598 252.072 488.675 261.941 476.582 267.084L499.795 301H468.659L449.06 271.532H437.245V301H410.279ZM437.245 250.404H455.037C464.211 250.404 469.493 245.956 469.493 238.867V238.589C469.493 230.944 463.933 227.052 454.898 227.052H437.245V250.404ZM533.954 301V227.33H504.764V203.7H590.11V227.33H560.92V301H533.954Z" fill="white"/>
            <path d="M5.42064 33V31.401L16.1216 21.725C20.8366 17.42 22.4766 14.96 22.4766 11.926C22.4766 8.195 19.4426 5.776 15.9986 5.776C12.3496 5.776 9.97164 7.662 7.59364 11.106L5.99464 10.04C8.49564 6.227 11.1606 3.89 16.2036 3.89C21.0826 3.89 24.7316 7.293 24.7316 11.762V11.844C24.7316 15.78 22.5996 18.404 17.5566 22.996L8.78264 30.95H25.0186V33H5.42064ZM42.1502 33.492C34.8522 33.492 30.3012 26.645 30.3012 18.732V18.65C30.3012 10.737 34.9342 3.808 42.2322 3.808C49.5302 3.808 54.0812 10.655 54.0812 18.568V18.65C54.0812 26.563 49.4482 33.492 42.1502 33.492ZM42.2322 31.565C48.1772 31.565 51.8672 25.374 51.8672 18.732V18.65C51.8672 11.967 48.0952 5.735 42.1502 5.735C36.2052 5.735 32.5152 11.885 32.5152 18.568V18.65C32.5152 25.292 36.2872 31.565 42.2322 31.565ZM58.3122 33V31.401L69.0132 21.725C73.7282 17.42 75.3682 14.96 75.3682 11.926C75.3682 8.195 72.3342 5.776 68.8902 5.776C65.2412 5.776 62.8632 7.662 60.4852 11.106L58.8862 10.04C61.3872 6.227 64.0522 3.89 69.0952 3.89C73.9742 3.89 77.6232 7.293 77.6232 11.762V11.844C77.6232 15.78 75.4912 18.404 70.4482 22.996L61.6742 30.95H77.9102V33H58.3122ZM82.4958 33V31.401L93.1968 21.725C97.9118 17.42 99.5518 14.96 99.5518 11.926C99.5518 8.195 96.5178 5.776 93.0738 5.776C89.4248 5.776 87.0468 7.662 84.6688 11.106L83.0698 10.04C85.5708 6.227 88.2358 3.89 93.2788 3.89C98.1578 3.89 101.807 7.293 101.807 11.762V11.844C101.807 15.78 99.6748 18.404 94.6318 22.996L85.8578 30.95H102.094V33H82.4958ZM107.581 21.971V19.675H118.569V21.971H107.581ZM123.416 33V31.401L134.117 21.725C138.832 17.42 140.472 14.96 140.472 11.926C140.472 8.195 137.438 5.776 133.994 5.776C130.345 5.776 127.967 7.662 125.589 11.106L123.99 10.04C126.491 6.227 129.156 3.89 134.199 3.89C139.078 3.89 142.727 7.293 142.727 11.762V11.844C142.727 15.78 140.595 18.404 135.552 22.996L126.778 30.95H143.014V33H123.416ZM160.145 33.492C152.847 33.492 148.296 26.645 148.296 18.732V18.65C148.296 10.737 152.929 3.808 160.227 3.808C167.525 3.808 172.076 10.655 172.076 18.568V18.65C172.076 26.563 167.443 33.492 160.145 33.492ZM160.227 31.565C166.172 31.565 169.862 25.374 169.862 18.732V18.65C169.862 11.967 166.09 5.735 160.145 5.735C154.2 5.735 150.51 11.885 150.51 18.568V18.65C150.51 25.292 154.282 31.565 160.227 31.565ZM176.307 33V31.401L187.008 21.725C191.723 17.42 193.363 14.96 193.363 11.926C193.363 8.195 190.329 5.776 186.885 5.776C183.236 5.776 180.858 7.662 178.48 11.106L176.881 10.04C179.382 6.227 182.047 3.89 187.09 3.89C191.969 3.89 195.618 7.293 195.618 11.762V11.844C195.618 15.78 193.486 18.404 188.443 22.996L179.669 30.95H195.905V33H176.307ZM211.274 33.492C206.6 33.492 203.074 31.36 200.737 28.326L202.377 26.973C204.673 29.884 207.543 31.565 211.315 31.565C215.169 31.565 218.408 28.982 218.408 25.21V25.128C218.408 21.11 214.636 18.896 209.47 18.896H207.912L207.379 17.707L217.26 6.309H202.213V4.3H220.171V5.817L210.454 16.928C215.907 17.256 220.622 19.798 220.622 25.046V25.128C220.622 30.13 216.235 33.492 211.274 33.492Z" fill="white"/>
            </svg>
        </div>

        <div class="panel-one relative w-full h-full lg:h-screen overflow-hidden p-8 sm:p-10 md:p-14 xl:p-20 2xl:p-24 flex flex-col gap-10 lg:justify-between items-start bg-blue-static bg-cover">
            
            <!-- EBU logo -->
            <div class=" w-44 sm:w-60 md:w-72 ">
                <svg class="w-full h-full" viewBox="0 0 479 102.7" xmlns="http://www.w3.org/2000/svg" color="#FFF"><path d="M3.2 68.3h43.9V55.1H18V40.9h29.1V27.6H18V13.9h29.1V.6H3.2zM161.7.6v38.8c0 10.7-5.5 16.3-14.6 16.3S132.5 50 132.5 39V.6h-14.9v38.7c0 19.9 11.1 30.1 29.3 30.1 18.2 0 29.7-10.1 29.7-30.6V.6h-14.9zM97.9 32.9c4.8-2.7 8.9-7 8.9-14.6v-.2c0-4.6-1.6-8.4-4.6-11.5-3.4-3.4-8.4-5.4-14.7-5.9-1-.1-2-.1-3-.1H57.8v67.7h27.3c.8 0 1.5 0 2.2-.1 14-.6 23.1-6.8 23.1-18.5v-.2c.2-9-4.7-13.6-12.5-16.6zM72.4 13.7h9.8c2.1 0 3.8.3 5.2.8 2.9 1.1 4.5 3.2 4.5 6.1v.2c0 3.2-1.7 5.2-4.5 6.2-1.7.6-3.8.9-6.2.9h-8.9V13.7zm23.3 34.2c0 4.4-3.1 6.8-8.3 7.2-.7.1-1.5.1-2.2.1H72.4V40.4h12.3c1 0 1.9.1 2.7.1 5.7.6 8.3 3.2 8.3 7.2v.2zM440.1 86.8h5.2c4.7 0 8 3.2 8 7.5 0 4.2-3.3 7.5-8 7.5h-5.2v-15zm1.7 1.6v11.9h3.5c3.8 0 6.2-2.6 6.2-5.9 0-3.3-2.4-6-6.2-6h-3.5zM428.7 86.7h1.6l6.9 15.2h-1.8l-1.8-4h-8.2l-1.8 4h-1.7l6.8-15.2zm4.2 9.7-3.4-7.7-3.4 7.7h6.8zM407.6 86.8h6.5c1.8 0 3.3.6 4.3 1.5.7.7 1.2 1.8 1.2 3 0 2.5-1.7 4-4.1 4.4l4.6 6.1H418l-4.4-5.8h-4.3v5.8h-1.7v-15zm6.3 7.7c2.3 0 3.9-1.2 3.9-3.1 0-1.8-1.4-3-3.8-3h-4.6v6.1h4.5zM388.7 94.4c0-4.2 3.1-7.8 7.7-7.8s7.7 3.6 7.7 7.7-3.1 7.8-7.7 7.8c-4.7 0-7.7-3.5-7.7-7.7zm13.6 0c0-3.5-2.5-6.3-5.9-6.3-3.4 0-5.9 2.8-5.9 6.2 0 3.4 2.5 6.2 5.9 6.2 3.4.1 5.9-2.7 5.9-6.1zM373.8 86.8h6.5c1.8 0 3.3.6 4.3 1.5.7.7 1.2 1.8 1.2 3 0 2.5-1.7 4-4.1 4.4l4.6 6.1h-2.1l-4.4-5.8h-4.3v5.8h-1.7v-15zm6.3 7.7c2.3 0 3.9-1.2 3.9-3.1 0-1.8-1.4-3-3.8-3h-4.6v6.1h4.5zM357.2 95.6v-8.8h1.7v8.6c0 3.2 1.7 5.1 4.6 5.1 2.8 0 4.5-1.7 4.5-5v-8.8h1.7v8.6c0 4.4-2.5 6.7-6.3 6.7-3.6.1-6.2-2.1-6.2-6.4zM343.1 86.8H354v1.5h-9.2v5.1h8.2v1.5h-8.2v5.3h9.3v1.5h-11V86.8zM319.8 86.8h5.2c4.7 0 8 3.2 8 7.5 0 4.2-3.3 7.5-8 7.5h-5.2v-15zm1.7 1.6v11.9h3.5c3.8 0 6.2-2.6 6.2-5.9 0-3.3-2.4-6-6.2-6h-3.5zM302.8 86.8h1.6l9.5 12.1V86.8h1.7v15h-1.4l-9.7-12.3v12.3h-1.7v-15zM291.8 86.7h1.6l6.9 15.2h-1.8l-1.8-4h-8.2l-1.8 4H285l6.8-15.2zm4.2 9.7-3.4-7.7-3.4 7.7h6.8zM262.8 86.8h1.6l9.5 12.1V86.8h1.7v15h-1.4l-9.7-12.3v12.3h-1.7v-15zM244.3 94.4c0-4.2 3.1-7.8 7.7-7.8s7.7 3.6 7.7 7.7-3.1 7.8-7.7 7.8c-4.7 0-7.7-3.5-7.7-7.7zm13.6 0c0-3.5-2.5-6.3-5.9-6.3-3.4 0-5.9 2.8-5.9 6.2 0 3.4 2.5 6.2 5.9 6.2 3.4.1 5.9-2.7 5.9-6.1zM239.3 86.8h1.7v15h-1.7v-15zM224.4 99.7l1.1-1.2c1.6 1.4 3.1 2.1 5.2 2.1 2 0 3.4-1.1 3.4-2.6 0-1.4-.8-2.2-3.9-2.9-3.5-.8-5.1-1.9-5.1-4.3s2.1-4.1 4.9-4.1c2.2 0 3.8.6 5.3 1.8l-1 1.3c-1.4-1.1-2.8-1.6-4.3-1.6-2 0-3.2 1.1-3.2 2.4 0 1.4.8 2.2 4.1 2.9 3.4.7 4.9 2 4.9 4.3 0 2.6-2.2 4.3-5.1 4.3-2.6 0-4.5-.8-6.3-2.4zM219.3 86.8h1.7v15h-1.7v-15zM201.7 86.8h1.9l5.4 13 5.4-13h1.8l-6.5 15.2h-1.5l-6.5-15.2zM184.9 94.4c0-4.2 3.1-7.8 7.7-7.8s7.7 3.6 7.7 7.7-3.1 7.8-7.7 7.8-7.7-3.5-7.7-7.7zm13.6 0c0-3.5-2.5-6.3-5.9-6.3-3.4 0-5.9 2.8-5.9 6.2 0 3.4 2.5 6.2 5.9 6.2 3.5.1 5.9-2.7 5.9-6.1zM170 86.8h6.5c1.8 0 3.3.6 4.3 1.5.7.7 1.2 1.8 1.2 3 0 2.5-1.7 4-4.1 4.4l4.6 6.1h-2.1L176 96h-4.3v5.8H170v-15zm6.4 7.7c2.3 0 3.9-1.2 3.9-3.1 0-1.8-1.4-3-3.8-3h-4.6v6.1h4.5zM153.5 95.6v-8.8h1.7v8.6c0 3.2 1.7 5.1 4.6 5.1 2.8 0 4.5-1.7 4.5-5v-8.8h1.7v8.6c0 4.4-2.5 6.7-6.3 6.7-3.7.1-6.2-2.1-6.2-6.4zM139.3 86.8h10.9v1.5H141v5.1h8.2v1.5H141v5.3h9.3v1.5h-11V86.8zM115.3 94.4c0-4.2 3-7.8 7.5-7.8 2.5 0 4.1.7 5.6 2l-1.1 1.3c-1.2-1-2.5-1.7-4.6-1.7-3.3 0-5.7 2.8-5.7 6.2 0 3.6 2.3 6.3 6 6.3 1.7 0 3.3-.7 4.3-1.5v-3.7h-4.6V94h6.2v6c-1.4 1.2-3.5 2.3-6 2.3-4.6-.2-7.6-3.6-7.6-7.9zM99 86.8h1.6l9.5 12.1V86.8h1.7v15h-1.4l-9.7-12.3v12.3H99v-15zM92.9 86.8h1.7v15h-1.7v-15zM82.8 88.4h-5.1v-1.6h11.8v1.6h-5.1v13.5h-1.7V88.4zM69.4 86.7H71l6.9 15.2H76l-1.8-4H66l-1.8 4h-1.7l6.9-15.2zm4.1 9.7-3.4-7.7-3.4 7.7h6.8zM48.2 86.8h6.5c1.8 0 3.3.6 4.3 1.5.7.7 1.2 1.8 1.2 3 0 2.5-1.7 4-4.1 4.4l4.6 6.1h-2.1L54.2 96h-4.3v5.8h-1.7v-15zm6.4 7.7c2.3 0 3.9-1.2 3.9-3.1 0-1.8-1.4-3-3.8-3h-4.6v6.1h4.5zM33.8 86.8h10.9v1.5h-9.2v5.1h8.2v1.5h-8.2v5.3h9.3v1.5h-11V86.8zM19.5 86.8h5.6c3.4 0 5.6 1.8 5.6 4.8 0 3.2-2.7 4.9-5.9 4.9h-3.7v5.3h-1.7v-15zm5.4 8.2c2.5 0 4.1-1.3 4.1-3.3 0-2.2-1.6-3.3-4-3.3h-3.8V95h3.7zM.5 94.4c0-4.2 3.1-7.8 7.7-7.8s7.7 3.6 7.7 7.7-3.1 7.8-7.7 7.8S.5 98.6.5 94.4zm13.6 0c0-3.5-2.5-6.3-5.9-6.3s-5.9 2.8-5.9 6.2c0 3.4 2.5 6.2 5.9 6.2 3.5.1 5.9-2.7 5.9-6.1zM462.1 94.5c0-4.2 3.1-7.8 7.7-7.8s7.7 3.6 7.7 7.7-3.1 7.8-7.7 7.8-7.7-3.5-7.7-7.7zm13.6 0c0-3.5-2.5-6.3-5.9-6.3-3.4 0-5.9 2.8-5.9 6.2 0 3.4 2.5 6.2 5.9 6.2 3.5.1 5.9-2.7 5.9-6.1zM457.1 86.9h1.7v15h-1.7v-15z" /></svg>
            </div>

            <!-- Headline mobile -->
            <div class="cover-headings sm:w-2/3 sm:py-10 lg:hidden ">
                <svg class=" w-full " viewBox="0 0 627 323" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.834 173L42.256 75.005H68.249L109.671 173H80.759L73.67 155.625H36.14L29.19 173H0.834ZM44.063 134.636H65.886L55.044 106.975L44.063 134.636ZM119.112 173V75.7H144.271L184.303 127.13V75.7H210.991V173H187.361L145.8 119.624V173H119.112ZM228.249 173V75.7H253.408L293.44 127.13V75.7H320.128V173H296.498L254.937 119.624V173H228.249ZM381.171 174.807C353.51 174.807 336.135 160.768 336.135 130.327V75.7H363.518V129.771C363.518 143.81 370.607 150.482 381.449 150.482C392.291 150.482 399.38 144.088 399.38 130.466V75.7H426.763V129.632C426.763 161.046 408.832 174.807 381.171 174.807ZM431.001 173L472.423 75.005H498.416L539.838 173H510.926L503.837 155.625H466.307L459.357 173H431.001ZM474.23 134.636H496.053L485.211 106.975L474.23 134.636ZM549.279 173V75.7H576.245V149.37H623.366V173H549.279Z" fill="#FF7800"/>
                <path d="M8.618 301V203.7H54.627C69.5 203.7 79.786 207.592 86.319 214.264C92.018 219.824 94.937 227.33 94.937 236.921V237.199C94.937 252.072 87.014 261.941 74.921 267.084L98.134 301H66.998L47.399 271.532H35.584V301H8.618ZM35.584 250.404H53.376C62.55 250.404 67.832 245.956 67.832 238.867V238.589C67.832 230.944 62.272 227.052 53.237 227.052H35.584V250.404ZM108.524 301V203.7H186.781V226.635H135.212V241.369H181.916V262.636H135.212V278.065H187.476V301H108.524ZM201.236 301V203.7H242.936C267.539 203.7 283.385 216.349 283.385 237.894V238.172C283.385 261.107 265.732 273.2 241.546 273.2H228.202V301H201.236ZM228.202 252.072H240.99C250.581 252.072 256.419 247.068 256.419 239.423V239.145C256.419 230.805 250.581 226.357 240.851 226.357H228.202V252.072ZM343.691 302.946C313.667 302.946 291.427 280.567 291.427 252.628V252.35C291.427 224.411 313.945 201.754 343.969 201.754C373.993 201.754 396.233 224.133 396.233 252.072V252.35C396.233 280.289 373.715 302.946 343.691 302.946ZM343.969 278.621C358.842 278.621 368.711 266.667 368.711 252.628V252.35C368.711 238.311 358.564 226.079 343.691 226.079C328.957 226.079 319.088 238.033 319.088 252.072V252.35C319.088 266.389 329.235 278.621 343.969 278.621ZM410.279 301V203.7H456.288C471.161 203.7 481.447 207.592 487.98 214.264C493.679 219.824 496.598 227.33 496.598 236.921V237.199C496.598 252.072 488.675 261.941 476.582 267.084L499.795 301H468.659L449.06 271.532H437.245V301H410.279ZM437.245 250.404H455.037C464.211 250.404 469.493 245.956 469.493 238.867V238.589C469.493 230.944 463.933 227.052 454.898 227.052H437.245V250.404ZM533.954 301V227.33H504.764V203.7H590.11V227.33H560.92V301H533.954Z" fill="white"/>
                <path d="M5.42064 33V31.401L16.1216 21.725C20.8366 17.42 22.4766 14.96 22.4766 11.926C22.4766 8.195 19.4426 5.776 15.9986 5.776C12.3496 5.776 9.97164 7.662 7.59364 11.106L5.99464 10.04C8.49564 6.227 11.1606 3.89 16.2036 3.89C21.0826 3.89 24.7316 7.293 24.7316 11.762V11.844C24.7316 15.78 22.5996 18.404 17.5566 22.996L8.78264 30.95H25.0186V33H5.42064ZM42.1502 33.492C34.8522 33.492 30.3012 26.645 30.3012 18.732V18.65C30.3012 10.737 34.9342 3.808 42.2322 3.808C49.5302 3.808 54.0812 10.655 54.0812 18.568V18.65C54.0812 26.563 49.4482 33.492 42.1502 33.492ZM42.2322 31.565C48.1772 31.565 51.8672 25.374 51.8672 18.732V18.65C51.8672 11.967 48.0952 5.735 42.1502 5.735C36.2052 5.735 32.5152 11.885 32.5152 18.568V18.65C32.5152 25.292 36.2872 31.565 42.2322 31.565ZM58.3122 33V31.401L69.0132 21.725C73.7282 17.42 75.3682 14.96 75.3682 11.926C75.3682 8.195 72.3342 5.776 68.8902 5.776C65.2412 5.776 62.8632 7.662 60.4852 11.106L58.8862 10.04C61.3872 6.227 64.0522 3.89 69.0952 3.89C73.9742 3.89 77.6232 7.293 77.6232 11.762V11.844C77.6232 15.78 75.4912 18.404 70.4482 22.996L61.6742 30.95H77.9102V33H58.3122ZM82.4958 33V31.401L93.1968 21.725C97.9118 17.42 99.5518 14.96 99.5518 11.926C99.5518 8.195 96.5178 5.776 93.0738 5.776C89.4248 5.776 87.0468 7.662 84.6688 11.106L83.0698 10.04C85.5708 6.227 88.2358 3.89 93.2788 3.89C98.1578 3.89 101.807 7.293 101.807 11.762V11.844C101.807 15.78 99.6748 18.404 94.6318 22.996L85.8578 30.95H102.094V33H82.4958ZM107.581 21.971V19.675H118.569V21.971H107.581ZM123.416 33V31.401L134.117 21.725C138.832 17.42 140.472 14.96 140.472 11.926C140.472 8.195 137.438 5.776 133.994 5.776C130.345 5.776 127.967 7.662 125.589 11.106L123.99 10.04C126.491 6.227 129.156 3.89 134.199 3.89C139.078 3.89 142.727 7.293 142.727 11.762V11.844C142.727 15.78 140.595 18.404 135.552 22.996L126.778 30.95H143.014V33H123.416ZM160.145 33.492C152.847 33.492 148.296 26.645 148.296 18.732V18.65C148.296 10.737 152.929 3.808 160.227 3.808C167.525 3.808 172.076 10.655 172.076 18.568V18.65C172.076 26.563 167.443 33.492 160.145 33.492ZM160.227 31.565C166.172 31.565 169.862 25.374 169.862 18.732V18.65C169.862 11.967 166.09 5.735 160.145 5.735C154.2 5.735 150.51 11.885 150.51 18.568V18.65C150.51 25.292 154.282 31.565 160.227 31.565ZM176.307 33V31.401L187.008 21.725C191.723 17.42 193.363 14.96 193.363 11.926C193.363 8.195 190.329 5.776 186.885 5.776C183.236 5.776 180.858 7.662 178.48 11.106L176.881 10.04C179.382 6.227 182.047 3.89 187.09 3.89C191.969 3.89 195.618 7.293 195.618 11.762V11.844C195.618 15.78 193.486 18.404 188.443 22.996L179.669 30.95H195.905V33H176.307ZM211.274 33.492C206.6 33.492 203.074 31.36 200.737 28.326L202.377 26.973C204.673 29.884 207.543 31.565 211.315 31.565C215.169 31.565 218.408 28.982 218.408 25.21V25.128C218.408 21.11 214.636 18.896 209.47 18.896H207.912L207.379 17.707L217.26 6.309H202.213V4.3H220.171V5.817L210.454 16.928C215.907 17.256 220.622 19.798 220.622 25.046V25.128C220.622 30.13 216.235 33.492 211.274 33.492Z" fill="white"/>
                </svg>
            </div>
            <div class=" flex items-center gap-4">
                <h3 class=" transition transform ease-in hover:translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white uppercase text-sm md:text-lg xl:text-xl leading-tight tracking-widest pb-3">
                    Introduction
                </h3>
                <svg class=" w-10 md:w-14" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 40 40" style="enable-background:new 0 0 40 40" xml:space="preserve"><path class="st0" fill="#ff7800" d="M30.4 37.7c-.3 0-.6-.1-.8-.4-.7-1-.7-2.2-.6-3.1V34c.2-4.8 1-9.6 1.7-14.2.2-1.2.4-2.3.6-3.4.9-5.8.3-9.6-1.9-11.1-4.8-3.3-16.9 3.5-26.6 9l-.3.2c-.5.1-1.1 0-1.4-.5-.3-.5-.1-1.1.4-1.4l.3-.2c10.7-6.1 22.9-13 28.7-8.9 2.9 2 3.8 6.3 2.7 13-.2 1.2-.4 2.3-.6 3.5-.7 4.6-1.5 9.3-1.7 14v.2c0 .7-.1 1.4.2 1.8.3.4.2 1.1-.2 1.4-.1.2-.3.3-.5.3z"/><path class="st0" d="M30.5 37.7c-.4 0-.8-.3-.9-.7-.6-1.7-1.4-3.4-2.2-5.2-1.3-3-2.7-6-3.3-9.1l-.1-.6.5-.4c.6-.5 1.1-.4 5.5 1.5.4.2.7.3.8.4.2.1.5.2.8.3 1.4.5 3.4 1.3 4.9 1.5.3-.1.5-.1.8-.1.4 0 1.5 0 1.6 1l.1.9-.9.2c-.4.1-.9.1-1.5 0-1.5.5-3.3 2.6-4.5 4.1-.5.6-.9 1.1-1.3 1.5-.2.2-.4.3-.6.3l1.2 3c.2.5-.1 1.1-.6 1.3-.1.1-.2.1-.3.1zm-4-13.8c.7 2.3 1.7 4.7 2.8 7.1l.3.6c.3-.3.7-.8 1.1-1.3.9-1.1 2.1-2.5 3.3-3.5-1-.3-2-.7-3-1.1-.3-.1-.6-.2-.8-.3-.1 0-.5-.2-.9-.4-.6-.2-1.8-.7-2.8-1.1z" fill="#ff7800"/></svg>
            </div>
        </div>
        <div class="panel-two static z-10 w-full h-full lg:min-h-screen lg:max-h-screen lg:w-1/2 lg:overflow-scroll">
            <!-- <div class="orange-seg absolute top-52 right-0 w-36 z-20 overflow-hidden">
                <svg width="176" height="513" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M4.915 1.9 0 0v116.255l1.077 1.043c37.212 36.35 57.699 85.449 57.699 138.299v1.168c0 52.508-20.502 101.653-57.715 138.329L0 396.153v116.862l4.93-1.945C110.453 469.614 176 372.179 176 256.78v-1.619C176 139.591 110.437 42.545 4.915 1.884" fill="#FF7800"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h176v513H0z"/></clipPath></defs></svg>
            </div>
            <div class="empty-seg absolute -bottom-56 w-36 z-20 overflow-hidden">
                <svg width="176" height="513" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M4.915 1.9 0 0v116.255l1.077 1.043c37.212 36.35 57.699 85.449 57.699 138.299v1.168c0 52.508-20.502 101.653-57.715 138.329L0 396.153v116.862l4.93-1.945C110.453 469.614 176 372.179 176 256.78v-1.619C176 139.591 110.437 42.545 4.915 1.884" fill="#FF7800"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h176v513H0z"/></clipPath></defs></svg>
            </div> -->
            <div class="video-wrapper aspect-w-16 aspect-h-9 lg:aspect-none lg:w-full lg:min-h-screen lg:object-cover">
                <video playsinline autoplay muted loop poster="">
                    <source src="~/public/pexels-evgenia-kirpichnikova-2873484-640x360-25fps.mp4" type="video/webm">
                    Your browser does not support the video tag.
                </video>
            </div>
            <h3 class="highlights-text uppercase">Watch the highlights in full</h3>
        </div>
    </div>

    <!-- President -->
    <div class="flex flex-col lg:top-0 lg:flex-row w-full lg:ml-16">
        <div class="dir-gen panel-one md:p-10 lg:py-20 xl:py-28 order-1 lg:order-2 lg:sticky lg:top-0 w-full h-full flex flex-col sm:flex-row lg:flex-col lg:h-screen bg-blue-static bg-cover">
            <div class="quote p-14 sm:p-16 md:p-14 xl:p-20 2xl:p-24 h-1/6 w-full lg:h-1/2">
                <div class="mb-10">
                    <div class="quotemark ">
                        <svg class=" w-12 mb-5 lg:w-14 lg:mb-8 2xl:w-20 2xl:mb-12" viewBox="0 0 46 34" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M0 19.068C0 5.446 7.416.372 19.296 0l1.423 6.86c-6.37.75-9.502 3.756-9.223 8.83h7.032v18.317H0V19.068Zm25.19 0C25.19 5.446 32.697.372 44.48 0L46 6.86c-6.37.75-9.501 3.756-9.313 8.83h7.032v18.317H25.183V19.075l.008-.007Z" fill="#FF7800"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h46v34H0z"/></clipPath></defs></svg>
                    </div>   
                    <p class="quote text-white mt-6 mb-2 leading-7 md:leading-8 xl:leading-10 2xl:leading-tight text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl">
                        Despite the challenges posed by war, international uncertainty, and an economic crisis, so much we have been working towards in recent years has fallen into place.
                    </p>
                    <div class="quotemark rotate-180">
                        <svg class="w-6 lg:w-8 lg:mt-4 2xl:w-12 2xl:mt-8" viewBox="0 0 46 34" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M0 19.068C0 5.446 7.416.372 19.296 0l1.423 6.86c-6.37.75-9.502 3.756-9.223 8.83h7.032v18.317H0V19.068Zm25.19 0C25.19 5.446 32.697.372 44.48 0L46 6.86c-6.37.75-9.501 3.756-9.313 8.83h7.032v18.317H25.183V19.075l.008-.007Z" fill="#FF7800"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h46v34H0z"/></clipPath></defs></svg>
                    </div>   
                </div>
                <div class="author-title flex flex-row gap-4 xl:gap-8 items-center lg:flex-col lg:items-start xl:flex-row xl:items-center">
                    <div class="order-2">
                        <p class="author text-white uppercase font-bold tracking-wide text-lg 2xl:text-2xl sm:mb-1 xl:mb-2 leading-tight  ">
                            Delphine Ernotte Cunci
                        </p>    
                        <p class="title text-white text-base xl:text-lg leading-5 xl:leading-tight tracking-wide" >
                            President of the EBU and CEO of France Télévisions
                        </p>
                    </div>
                    <div class=" order-1 flex-none w-20 h-20 lg:w-28 lg:h-28 2xl:w-36 2xl:h-36">
                        <img class="rounded-full w-full h-full object-cover" src="~/public/Delphine-Ernotte-Cunci.jpg" alt="image" />
                    </div>
                </div>
            </div>
            
        </div>
        <div class="panel-two order-2 lg:order-1 w-full h-full lg:min-h-screen flex flex-col p-10 sm:p-12 md:p-16 xl:p-24 2xl:p-32">
            <h2 class=" font-black uppercase text-orange text-3xl leading-7 my-8 lg:text-4xl lg:leading-9 lg:mt-10 lg:mb-10 2xl:text-6xl 2xl:mb-14">President´s welcome message title</h2>
            <p class=" pb-5 lg:pb-7 text-base md:text-lg lg:text-xl">This has been an extraordinary year for the EBU and I’m incredibly proud of the work of all our staff in these testing times.</p>

                <p class=" pb-5 lg:pb-7 text-base md:text-lg lg:text-xl">Despite the challenges posed by war, international uncertainty, and an economic crisis, so much we have been working towards in recent years has fallen into place.</p>
 
                <p class=" pb-5 lg:pb-7 text-base md:text-lg lg:text-xl">We’ve won back the media rights for the Olympic Games (2026-2032) in what I hope will be a game-changing moment for sport and public service media.</p> 

                <p class=" pb-5 lg:pb-7 text-base md:text-lg lg:text-xl">We’ve strengthened our News Exchange, developed the Social Newswire and re-launched News Events.</p>

                <p class=" pb-5 lg:pb-7 text-base md:text-lg lg:text-xl">We’ve supported our Members with innovation, providing practical tools and products such as EuroVox, Peach and the Newsdeck.</p>

                <p class=" pb-5 lg:pb-7 text-base md:text-lg lg:text-xl">We’ve helped our Members in their transformation journeys – be that with digital, diversity or future workplaces.</p>

                <p class=" pb-5 lg:pb-7 text-base md:text-lg lg:text-xl">We’ve reinforced and invested in our Brussels team and integrated our Legal and Policy arm.</p>

                <p class=" pb-5 lg:pb-7 text-base md:text-lg lg:text-xl">And there is much more that you can read about in this Annual Report.</p>

                <p class=" pb-5 lg:pb-7 text-base md:text-lg lg:text-xl">None of this would have been possible without the help, encouragement, and guidance of our public service media members. All of them have stepped up to support us and each other in so many ways over the last year, no more so than with the incredible assistance they’ve provided to colleagues in Ukraine during this terrible war.</p>

                <p class=" pb-5 lg:pb-7 text-base md:text-lg lg:text-xl">We are grateful to everyone that has worked with us to help deliver our mission over the last 12 months. As the centenary year for public service media draws to a close, there can have been no better demonstration of the huge contribution our Members make both to society and to democracy.</p>

                <p class=" font-bold md:text-lg lg:text-xl">Delphine Ernotte Cunci</p>
                <p class=" pb-5 lg:pb-7 font-normal md:text-lg lg:text-xl">President of the EBU and CEO of France Télévisions</p>
            
        </div>
    </div>
    <!-- DG -->
    <div class="flex flex-col lg:top-0 lg:flex-row w-full lg:ml-16">
        <div class="dir-gen panel-one md:p-10 lg:py-20 xl:py-28 order-1 lg:order-2 lg:sticky lg:top-0 w-full h-full flex flex-col sm:flex-row lg:flex-col lg:h-screen bg-blue-static bg-cover">
            <div class="quote p-14 sm:p-16 md:p-14 xl:p-20 2xl:p-24 h-1/6 w-full lg:h-1/2">
                <div class="mb-10">
                    <div class="quotemark ">
                        <svg class=" w-12 mb-5 lg:w-14 lg:mb-8 2xl:w-20 2xl:mb-12" viewBox="0 0 46 34" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M0 19.068C0 5.446 7.416.372 19.296 0l1.423 6.86c-6.37.75-9.502 3.756-9.223 8.83h7.032v18.317H0V19.068Zm25.19 0C25.19 5.446 32.697.372 44.48 0L46 6.86c-6.37.75-9.501 3.756-9.313 8.83h7.032v18.317H25.183V19.075l.008-.007Z" fill="#FF7800"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h46v34H0z"/></clipPath></defs></svg>
                    </div>   
                    <p class="quote text-white mt-6 mb-2 leading-7 md:leading-8 xl:leading-10 2xl:leading-tight text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl">
                        Despite the challenges posed by war, international uncertainty, and an economic crisis, so much we have been working towards in recent years has fallen into place.
                    </p>
                    <div class="quotemark rotate-180">
                        <svg class="w-6 lg:w-8 lg:mt-4 2xl:w-12 2xl:mt-8" viewBox="0 0 46 34" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M0 19.068C0 5.446 7.416.372 19.296 0l1.423 6.86c-6.37.75-9.502 3.756-9.223 8.83h7.032v18.317H0V19.068Zm25.19 0C25.19 5.446 32.697.372 44.48 0L46 6.86c-6.37.75-9.501 3.756-9.313 8.83h7.032v18.317H25.183V19.075l.008-.007Z" fill="#FF7800"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h46v34H0z"/></clipPath></defs></svg>
                    </div>   
                </div>
                <div class="author-title flex flex-row gap-4 xl:gap-8 items-center lg:flex-col lg:items-start xl:flex-row xl:items-center">
                    <div class="order-2">
                        <p class="author text-white uppercase font-bold tracking-wide text-lg 2xl:text-2xl sm:mb-1 xl:mb-2 leading-tight  ">
                            Noel Curran
                        </p>    
                        <p class="title text-white text-base xl:text-lg leading-5 xl:leading-tight tracking-wide" >
                            Director General of the EBU
                        </p>
                    </div>
                    <div class=" order-1 flex-none w-20 h-20 lg:w-28 lg:h-28 2xl:w-36 2xl:h-36">
                        <img class="rounded-full w-full h-full object-cover" src="~/public/noel_curran.jpg" alt="image" />
                    </div>
                </div>
            </div>
            
        </div>
        <div  class="panel-two order-2 lg:order-2 w-full h-full lg:min-h-screen" :style="{ paddingBottom: componentHeight + 'px' }">
            <div class="flex flex-col p-10 sm:p-12 md:p-16 xl:p-24 2xl:p-32">
                <h2 class=" font-black uppercase text-orange text-3xl leading-7 my-8 lg:text-4xl lg:leading-9 lg:mt-10 lg:mb-10 2xl:text-6xl 2xl:mb-14">Director General´s welcome message title</h2>
                <p class=" pb-5 lg:pb-7 text-base md:text-lg lg:text-xl">This has been an extraordinary year for the EBU and I’m incredibly proud of the work of all our staff in these testing times.</p>
    
                    <p class=" pb-5 lg:pb-7 text-base md:text-lg lg:text-xl">Despite the challenges posed by war, international uncertainty, and an economic crisis, so much we have been working towards in recent years has fallen into place.</p>
     
                    <p class=" pb-5 lg:pb-7 text-base md:text-lg lg:text-xl">We’ve won back the media rights for the Olympic Games (2026-2032) in what I hope will be a game-changing moment for sport and public service media.</p> 
    
                    <p class=" pb-5 lg:pb-7 text-base md:text-lg lg:text-xl">We’ve strengthened our News Exchange, developed the Social Newswire and re-launched News Events.</p>
    
                    <p class=" pb-5 lg:pb-7 text-base md:text-lg lg:text-xl">We’ve supported our Members with innovation, providing practical tools and products such as EuroVox, Peach and the Newsdeck.</p>
    
                    <p class=" pb-5 lg:pb-7 text-base md:text-lg lg:text-xl">We’ve helped our Members in their transformation journeys – be that with digital, diversity or future workplaces.</p>
    
                    <p class=" pb-5 lg:pb-7 text-base md:text-lg lg:text-xl">We’ve reinforced and invested in our Brussels team and integrated our Legal and Policy arm.</p>
    
                    <p class=" pb-5 lg:pb-7 text-base md:text-lg lg:text-xl">And there is much more that you can read about in this Annual Report.</p>
    
                    <p class=" pb-5 lg:pb-7 text-base md:text-lg lg:text-xl">None of this would have been possible without the help, encouragement, and guidance of our public service media members. All of them have stepped up to support us and each other in so many ways over the last year, no more so than with the incredible assistance they’ve provided to colleagues in Ukraine during this terrible war.</p>
    
                    <p class=" pb-5 lg:pb-7 text-base md:text-lg lg:text-xl">We are grateful to everyone that has worked with us to help deliver our mission over the last 12 months. As the centenary year for public service media draws to a close, there can have been no better demonstration of the huge contribution our Members make both to society and to democracy.</p>
    
                    <p class=" font-bold md:text-lg lg:text-xl">Noel Curran</p>
                    <p class=" pb-5 lg:pb-7 font-normal md:text-lg lg:text-xl">Director General of the EBU</p>
                
            </div>
            <NextPage :title="linkTitle" :link="link" @componentHeight="updateComponentHeight" />
        </div>
        
    </div>
</template>

<script>

export default {
  data() {
    return {
      linkTitle: 'Relationships with the platforms',
      link: '/EN/relationships-with-the-platforms',
      componentHeight: 0, // New property to store component height
    };
  },
  methods: {
    updateComponentHeight(height) {
      this.componentHeight = height;
    },
  },
};

</script>

<style scoped>

.panel-one {
    @media (min-width: 1024px) {
        min-width: 50%;
        max-width: 50%;
    }
}

.panel-two {
    background-color: #FFF;
    @media (min-width: 1024px) {
        min-width: 50%;
        max-width: 50%;
    }
}

video {
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

}
.video-wrapper {
  position: relative;
  overflow: hidden;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.highlights-text {
    position: relative;
    height: 0px;
    top: -50px;
    right: 40px;
    float: right;
}

.image-half {
    height: 50vh;
}

@media screen and (max-width: 1023px) {
    .image-half {
        height: 100%;
    }
}

</style>