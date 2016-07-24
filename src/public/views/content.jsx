import React from 'react';
import AboutMe from './aboutMe.jsx';
import Connect from './connect.jsx';
import Resume from './resume.jsx';

export default class Content extends React.Component {

    render() {
        return (
            <div id='content'>
                <div className='container'>
                    <div id='profile-image'>
                        <img src='https://s.gravatar.com/avatar/a86cc7315af6c64b80cdca05331d60ee?s=500' />
                    </div>
                    <h1>Trevin Hofmann</h1>
                    <h3>Software Engineer</h3>
                    <div className='pure-g'>
                        <div className='pure-u-1 pure-u-md-2-3'>
                            <AboutMe />
                        </div>
                        <div className='pure-u-1 pure-u-md-1-3'>
                            <Connect />
                            <Resume />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
