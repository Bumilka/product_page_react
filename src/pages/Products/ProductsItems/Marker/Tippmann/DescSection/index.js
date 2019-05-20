import React, { Component } from 'react';
import './style.scss'

const content = [
    {
        question: "Czy ten pistolet jest idealny do gry w painballa?",
        answer:
            "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.",
    },
    {
        question: "Czy ten model posiada mechanizm spustowy?",
        answer:
            "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.",
    },
    {
        question: "Jakie dobrać naboje do tego sprzętu?",
        answer:
            "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.",
    },
    {
        question: "Nie mogę znaleźć instrukcji, czy mi ją doslecie?",
        answer: "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.",
    }
];

class DescSectionTippmann extends Component {
    state = {
        active: null
    };
    render() {
        return (
            <div>
                <div>
                    <a>NASI KLIENCI PYTALI O:</a>
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
            </div>
        );
    }
}

export default DescSectionTippmann;