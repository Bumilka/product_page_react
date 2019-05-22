import React, { Component } from 'react';
import DescSectionTippmann from '../DescSection/index';
import BlogSection from '../../../../CardProducts/BlogSection';
import HotSpot from '../../../../CardProducts/HotSpot';
import Counter from '../../../../CardProducts/Projector/Counter';
import Information from '../../../../CardProducts/Projector/Information';

import MarkerProduct from '../../../../../../image/projector/marker-egzample.png';
import AvailableButton from '../../../../../../image/projector/button-available.png';
import NegoButton from '../../../../../../image/projector/nego.jpg';

import "react-image-gallery/styles/scss/image-gallery.scss";
import "./style.scss";

import ImageGallery from 'react-image-gallery';

const dataItems = [
  {
    titleData: "Marker Firmy Tippmann",
    data: "Stworzony z myslą o młodszych graczach, poprzez zmiejszenie kalibru do 50Cal. FT-50 Lite wyglądem przypomina marker FT-12, jednak różni się on trochę od swojego pierwowzoru. Marker jest trochę krótszy, korpus ma bardziej agresywny charakter, średnica zewnetrzna oraz qwewnętrzna lufy jest mniejsza oraz średnica otworu podającego kulki w magazynku grawitacyjnym jest dostosowana do kalibru 50Cal.",
    dataShort1: "kompaktowy militarny wygląd",
    dataShort2: "szybkie serwisowanie bez użycia narzędzi",
    dataShort3: "aluminiowy chwyt i body",
    dataShort4: "wewnętrzny system gazowy'inline bolt system'",
    dataShort5: "modułowa konstrukcja",
    dataShort6: "stałe przyrządy celownicze",
    dataShort7: "Zestaw zawierajacy magazynek grawitacyjny oraz barrel bag(osłona lufy)",
  },
  {
    color: "Black",
    //index: 0,
    _id: "marker_tippmann_ft-50_lite-50-cal-rental-black",
    name: "MARKER TIPPMANN FT-50 LITE 50 CAL RENTAL(BLACK)",
    producent: "PRODUCENT : Dye",
    code: " KOD PRODUKTU: 6578758769878",
    serialNumber: "111000",
    model: "TIPPMANN FT-50 LITE 50",
    finish: "Czarny mat",
    caliber: "66 LR HV",
    magazineCapacity: "10 nabojów",
    triggerMechanism: "SA (Single Action)",
    PressureOfTheTrigger: "1.8 kg / 4 Ib",
    Dimensions: "1200 x 123mm",
    sale: 1278.00 + "zł",
    price: 1499.00 + "zł",
  },
];

class TippmannFT50 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showIndex: false,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: true,
      isRTL: false,
      slideDuration: 450,
      slideInterval: 2000,
      slideOnThumbnailOver: false,
      thumbnailPosition: 'left',
      showVideo: {},
    };

    this.images = [
      {
        original: 'https://static1.assassins-arms.com/pol_pm_Marker-Tippmann-Crossover-electro-black-2250_4.png',
        thumbnail: 'https://static2.assassins-arms.com/pol_ps_Marker-Tippmann-Crossover-electro-black-2250_4.png',
        imageSet: [
          {
            srcSet: 'https://static1.assassins-arms.com/pol_pm_Marker-Tippmann-Crossover-electro-black-2250_4.png',
            media: '(max-width: 1280px)',
          },
          {
            srcSet: 'https://static1.assassins-arms.com/pol_pm_Marker-Tippmann-Crossover-electro-black-2250_4.png',
            media: '(min-width: 1280px)',
          }
        ]
      },
      {
        original: 'https://static1.assassins-arms.com/pol_pm_Marker-Tippmann-Crossover-electro-black-2250_4.png',
        thumbnail: 'https://static2.assassins-arms.com/pol_ps_Marker-Tippmann-Crossover-electro-black-2250_4.png',
        imageSet: [
          {
            srcSet: 'https://static1.assassins-arms.com/pol_pm_Marker-Tippmann-Crossover-electro-black-2250_4.png',
            media: '(max-width: 1280px)',
          },
          {
            srcSet: 'https://static1.assassins-arms.com/pol_pm_Marker-Tippmann-Crossover-electro-black-2250_4.png',
            media: '(min-width: 1280px)',
          }
        ]
      },
      {
        original: 'https://static1.assassins-arms.com/pol_pm_Marker-Tippmann-Crossover-electro-black-2250_4.png',
        thumbnail: 'https://static2.assassins-arms.com/pol_ps_Marker-Tippmann-Crossover-electro-black-2250_4.png',
        imageSet: [
          {
            srcSet: 'https://static1.assassins-arms.com/pol_pm_Marker-Tippmann-Crossover-electro-black-2250_4.png',
            media: '(max-width: 1280px)',
          },
          {
            srcSet: 'https://static1.assassins-arms.com/pol_pm_Marker-Tippmann-Crossover-electro-black-2250_4.png',
            media: '(min-width: 1280px)',
          }
        ]
      },
      {
        original: 'https://static1.assassins-arms.com/pol_pm_Marker-Tippmann-Crossover-electro-black-2250_4.png',
        thumbnail: 'https://static2.assassins-arms.com/pol_ps_Marker-Tippmann-Crossover-electro-black-2250_4.png',
        imageSet: [
          {
            srcSet: 'https://static1.assassins-arms.com/pol_pm_Marker-Tippmann-Crossover-electro-black-2250_4.png',
            media: '(max-width: 1280px)',
          },
          {
            srcSet: 'https://static1.assassins-arms.com/pol_pm_Marker-Tippmann-Crossover-electro-black-2250_4.png',
            media: '(min-width: 1280px)',
          }
        ]
      },
    ].concat(this._getStaticImages());

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.slideInterval !== prevState.slideInterval ||
      this.state.slideDuration !== prevState.slideDuration) {
      // refresh setInterval
      this._imageGallery.pause();
      this._imageGallery.play();
    }
  }

  _onImageClick(event) {
    console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex());
  }

  _onImageLoad(event) {
    console.debug('loaded image', event.target.src);
  }

  _onSlide(index) {
    this._resetVideo();
    console.debug('slid to index', index);
  }

  _onPause(index) {
    console.debug('paused on index', index);
  }

  _onScreenChange(fullScreenElement) {
    console.debug('isFullScreen?', !!fullScreenElement);
  }

  _onPlay(index) {
    console.debug('playing from index', index);
  }

  _handleInputChange(state, event) {
    this.setState({ [state]: event.target.value });
  }

  _handleCheckboxChange(state, event) {
    this.setState({ [state]: event.target.checked });
  }

  _handleThumbnailPositionChange(event) {
    this.setState({ thumbnailPosition: event.target.value });
  }

  _getStaticImages() {
    let images = [];
    for (let i = 2; i < 12; i++) {
      images.push({
        original: `${images}${i}.jpg`,
        thumbnail: `${images}${i}t.jpg`
      });
    }

    return images;
  }

  _resetVideo() {
    this.setState({ showVideo: {} });

    if (this.state.showPlayButton) {
      this.setState({ showGalleryPlayButton: true });
    }

    if (this.state.showFullscreenButton) {
      this.setState({ showGalleryFullscreenButton: true });
    }
  }

  _toggleShowVideo(url) {
    this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
    this.setState({
      showVideo: this.state.showVideo
    });

    if (this.state.showVideo[url]) {
      if (this.state.showPlayButton) {
        this.setState({ showGalleryPlayButton: false });
      }

      if (this.state.showFullscreenButton) {
        this.setState({ showGalleryFullscreenButton: false });
      }
    }
  }

  render() {
    return (
      <div>
        <div className="projectorSection">
          <section className='projectorSectionSlider'>
            <ImageGallery
              ref={i => this._imageGallery = i}
              items={this.images}
              lazyLoad={false}
              onClick={this._onImageClick.bind(this)}
              onImageLoad={this._onImageLoad}
              onSlide={this._onSlide.bind(this)}
              onPause={this._onPause.bind(this)}
              onScreenChange={this._onScreenChange.bind(this)}
              onPlay={this._onPlay.bind(this)}
              infinite={this.state.infinite}
              showBullets={this.state.showBullets}
              showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
              showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
              showThumbnails={this.state.showThumbnails}
              showIndex={this.state.showIndex}
              showNav={this.state.showNav}
              isRTL={this.state.isRTL}
              thumbnailPosition={this.state.thumbnailPosition}
              slideDuration={parseInt(this.state.slideDuration)}
              slideInterval={parseInt(this.state.slideInterval)}
              slideOnThumbnailOver={this.state.slideOnThumbnailOver}
              additionalClass="app-image-gallery"
            />
          </section>

          <div className="projectorSectionData">
            {dataItems.map(({ name, producent, code }, index) => (
              <div>
                <div className="productTitle"><a>{name}</a></div>
                <div className="producentData">
                  <div className="producent">
                    <b className="producentName">{producent}</b>
                  </div>
                  <div className="producent">
                    <b className="producentKod">{code}</b>
                  </div>
                </div>
              </div>
            ))}
            <div>
              <a className="dataTitle">KOLOR:</a>
              <div className="changeColorProducts">
                <div className="changeColorProduct">
                  <img src={MarkerProduct} className="changeColorProductImage" herf="#" />
                </div>
                <div className="changeColorProduct">
                  <img src={MarkerProduct} className="changeColorProductImage" herf="#" />
                </div>
                <div className="changeColorProduct">
                  <img src={MarkerProduct} className="changeColorProductImage" herf="#" />
                </div>
                <div className="changeColorProduct">
                  <img src={MarkerProduct} className="changeColorProductImage" herf="#" />
                </div>
              </div>
            </div>
            <div className="inputProduct">
              <div className="inputProductItems">
                <a className="dataTitle">DŁUGOŚĆ LUFY:</a>
                <div>
                  <label>
                    <input list="browsers" name="myBrowser"
                      placeholder=" 120cm" />
                  </label>
                  <datalist id="browsers">
                    <option value="120 cm" />
                    <option value="130 cm" />
                    <option value="140cm" />
                  </datalist>
                </div>
              </div>
              <div className="InputProductItems">
                <a className="dataTitle">KALIBER:</a>
                <div>
                  <label>
                    <input list="browsers" name="myBrowser"
                      placeholder=" 55NU" />
                  </label>
                  <datalist id="browsers">
                    <option value="60NU" />
                    <option value="65NU" />
                    <option value="70NU" />
                  </datalist>
                </div>
              </div>
            </div>
            <div className="shipmentData">
              <div className="shipmentDataItems">
                <img src={AvailableButton} className="availableButton" />
                <div div className="availableText">
                  <li>Dostepny na magazynie(14szt)</li>
                  <li><b>Wysyłka dzisiaj</b></li>
                </div>
              </div>
              <div className="shipmentDataText">
                <b>SPRAWDŹ CZASY I KOSZTY WYSYŁKI</b>
              </div>
            </div>
            <div className="projectorShopBagSection">
              <div className="projectorPrise">
                <div>
                  <a className="projectorSaleText">1499,00 zł</a>
                </div>
                <div>
                  <b className="projectorPriceText">1278,00 zł</b>
                </div>
              </div>
              <div>
                <Counter />
              </div>
              <button className="buttonAddBag">
                <b className="buttonAddBagText">DODAJ DO KOSZYKA</b>
              </button>
            </div>
            <div className="shipmentData">
              <div className="shipmentDataItems">
                <img src={NegoButton} className="negoButton" />
                <div div className="negoTextItems">
                  <div><a>Znalazłeś ten produkt taniej?</a></div>
                  <div className="negoText">WYNEGOCJUJ DOBRA CENĘ</div>
                </div>
              </div>
              <div className="shipmentDataText">
                <b>DODAJ DO PORÓWNANIA</b>
              </div>
            </div>
            <div>
              <Information />
            </div>
          </div>
        </div>
        <div>
          <HotSpot />
        </div>
        <div>
          <DescSectionTippmann />
        </div>
        <div>
          <BlogSection />
        </div>
      </div>
    );
  }
}

export default TippmannFT50;