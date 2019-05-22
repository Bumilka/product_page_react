import React, { Component } from 'react';
import Post1 from '../../../../image/podady_blog/news-post1.png';
import Post2 from '../../../../image/podady_blog/news-post2.png';
import Dot from '../../../../image/dot.png';

import './style.scss'



class BlogSection extends Component {
    render() {
        return (
            <div className='blogSection'>
                <div className="blogSectionTitle">
                    <img src={Dot} className="dotImage" />
                    <a className="dotText"><span>PORADY NASZEGO EKSPERTA</span></a>
                </div>
                <div className="blogSectionContainer">
                    <div>
                        <div><b> Jak stworzyć samemu farby do gry?</b></div>
                        <div className="postItem">
                            <div>
                                <img src={Post1} className="blogSectionImage" />
                            </div>
                            <div className="blogSectionName">
                                <a ><span>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.</span></a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div><b> Jak dodać naboje z farbą do mojego sprzętu?</b></div>
                        <div className="postItem">
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