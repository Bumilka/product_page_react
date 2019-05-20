import React, { Component } from 'react';
import QuestionsandAnswersTippmann from '../DescSection/index';
import BlogSection from '../../../../CardProducts/BlogSection/index';
import HotSpot from '../../../../CardProducts/HotSpot';


class TippmannFT50 extends Component {
    render() {
        return (
            <div >
                <div>
                    <a>
                        <span>MARKER FIRMY TIPPMANN</span>
                    </a>
                    <div>
                    <HotSpot />
                    </div>
                    <div>
                        <QuestionsandAnswersTippmann />
                    </div>
                    <div>
                        <BlogSection/>
                    </div>
                </div>
            </div>
        );
    }
}

export default TippmannFT50;