import React from 'react';

import '../styles/404.scss';

const fourohfour: React.FC = () => {
    return (
        <body id='fourohfour-page'>
            <div id='fourohfour-error-container'>

                <div id="image-container">
                    <a href='/'>
                        <img id='fourohfour-logo'
                            src={require('../images/logo.png')}
                            alt='logo'
                        />
                    </a>
                </div>

                <p id='fourohfour-error-message'>
                    HTTP ERROR: 404
                    <hr />
                    That page does not exist
                </p>

            </div>

        </body>
    )
}

export default fourohfour;