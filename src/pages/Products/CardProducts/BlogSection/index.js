import React, { Component } from 'react';
import Post1 from '../../../../image/podady_blog/news-post1.png';
import Post2 from '../../../../image/podady_blog/news-post2.png';
import Dot from '../../../../image/dot.png';

import './style.scss'



class BlogSection extends Component {
    render() {
        return (
            <div className='blogSectionContainers'>
                <div className="blogSectionTitle">
                    <img src={Dot} />
                    <a><span>PORADY NASZEGO EKSPERTA</span></a>
                </div>
                <div className="blogSectionContainer">
                    <div className="blogSectionColumn">
                        <div className="postTitle">
                            <div>
                                <img src={Post1} className="blogSectionImage" />
                            </div>
                            <div className="blogSectionName">
                                <a ><span>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.</span></a>
                            </div>
                        </div>

                    </div>
                    <div className="blogSectionColumn">
                        <div className="postTitle">
                            <div>
                                <img src={Post2} className="blogSectionImage" />
                            </div>
                            <div className="blogSectionName">
                                <a ><span>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.</span></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default BlogSection;