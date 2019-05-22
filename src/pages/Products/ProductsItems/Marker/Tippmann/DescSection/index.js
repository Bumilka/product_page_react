import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dot from '../../../../../../image/dot.png';
import Baner from '../../../../../../image/desc_section/baner.png';
import './style.scss'

const content = [
    {
        question: "Czy ten pistolet jest idealny do gry w painballa? >",
        answer:
            "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.",
    },
    {
        question: "Czy ten model posiada mechanizm spustowy? >",
        answer:
            "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.",
    },
    {
        question: "Jakie dobrać naboje do tego sprzętu? >",
        answer:
            "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.",
    },
    {
        question: "Nie mogę znaleźć instrukcji, czy mi ją doslecie? > ",
        answer: "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.",
    }
];

class DescSectionTippmann extends Component {
    state = {
        active: null
    };
    render() {
        return (
            <div className="descSection">
                <div classname="answersAndQuestionsSection">
                    <div>
                        <img src={Dot} className="dotImage" />
                        <a className="dotText"> MARKER FIRMY TIPPMANN</a>
                    </div>
                    <div className="productInformationText">
                        Stworzony z myslą o młodszych graczach, poprzez zmiejszenie kalibru do 50Cal. FT-50 Lite wyglądem przypomina marker FT-12, jednak różni się on trochę od swojego pierwowzoru. Marker jest trochę krótszy, korpus ma bardziej agresywny charakter, średnica zewnetrzna oraz qwewnętrzna lufy jest mniejsza oraz średnica otworu podającego kulki w magazynku grawitacyjnym jest dostosowana do kalibru 50Cal.
                    </div>
                    <div className="shortDataProduct">
                        <li>kompaktowy militarny wygląd</li>
                        <li>szybkie serwisowanie bez użycia narzędzi</li>
                        <li>aluminiowy chwyt i body</li>
                        <li>wewnętrzny system gazowy "inline bolt system"</li>
                        <li>modułowa konstrukcja</li>
                        <li>stałe przyrządy celownicze</li>
                        <li>Zestaw zawierajacy magazynek grawitacyjny oraz barrel bag(osłona lufy)</li>
                    </div>
                    <div>
                        <div style={{ marginTop: "35px" }}>
                            <b >NASI KLIENCI PYTALI O:</b>
                        </div>
                        {content.map(({ question, answer }, index) => (
                            <div>
                                <h2
                                    onClick={() => {
                                        this.setState({
                                            active: this.state.active === index ? null : index
                                        });
                                    }}
                                >
                                    {question}
                                </h2>
                                <p className={this.state.active === index ? "active" : ""}>
                                    {answer}
                                </p>
                            </div>
                        ))}
                        <div className="questionButonSection">
                            <b >NIE ZNALAZŁEŚ ODPOWIEDZI ?:</b>
                            <button className="questionButon">ZADAJ SWOJE PYTANIE</button>
                        </div>
                    </div>
                    
                </div>
                <div className="tableDescSection">
                    <div className="saleBaner">
                        <Link to="sale">
                            <img src={Baner} />
                        </Link>
                    </div>
                    <div className="tableInformation">
                        <div className="tableInformationItems">
                            <li>Numer seryjny</li>
                            <li><b>111000</b></li>
                        </div>
                        <div className="tableInformationItems">
                            <li>Model</li>
                            <li><b>TiPPMANN FT-50 LITE 50</b></li>
                        </div>
                        <div className="tableInformationItems">
                            <li>Wykończenie</li>
                            <li><b>Czarny mat</b></li>
                        </div>
                        <div className="tableInformationItems">
                            <li>Kaliber</li>
                            <li><b>66 LR HV</b></li>
                        </div>
                        <div className="tableInformationItems">
                            <li>Pojemność magazynku</li>
                            <li><b>10 nabojów</b></li>
                        </div>
                        <div className="tableInformationItems">
                            <li>Mechanizm spustowy</li>
                            <li><b> SA (Single Action)</b></li>
                        </div>
                        <div className="tableInformationItems">
                            <li>Siła nacisku spustu</li>
                            <li><b>1.8kg / 4 Ib</b></li>
                        </div>
                        <div className="tableInformationItems">
                            <li>Wymiary</li>
                            <li><b>1200x123mm</b></li>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DescSectionTippmann;