import React from 'react';

class WidgetItem extends React.Component {
    removeSelectedClass() {
        const items = document.querySelectorAll('.widget-title--selected');

        if (items) {
            items.forEach((item) => {
                item.classList.remove('widget-title--selected');
            });
        }
    }

    handleClick(e) {
        this.removeSelectedClass();
        if (e.target.classList.contains(this.props.className)) {
            e.target.classList.add('widget-title--selected');
        } else if (e.target.parentElement) {
            e.target.parentElement.classList.add('widget-title--selected');
        }
        const containerToShow = document.getElementsByClassName(this.props.containerClassName)[0];
        const containerToHide = document.getElementsByClassName(this.props.containerTohide)[0];
        containerToShow.style.display = 'block';
        containerToHide.style.display = 'none';
    }
7
    render () {
        return (
            <div
                className={this.props.className}
                onClick={(e) => {this.handleClick(e)}}
            >
                <i className={this.props.icon}></i>
                <p>{this.props.title}</p>
            </div>
        )
    }
}

class WidgetTitle extends React.Component {
    renderWidgetItem(className, icon, title, containerClassName, containerTohide) {
        return (
            <WidgetItem
                className={className}
                icon={icon}
                title={title}
                containerClassName={containerClassName}
                containerTohide={containerTohide}
            />
        )
    }
    render () {
        return (
            <div className="widget-title">
                {this.renderWidgetItem('widget-faq', 'fa fa-home', 'FAQ', 'container-faq', 'container-contact')}
                {this.renderWidgetItem('widget-contact', 'fa fa-car', 'Contact', 'container-contact', 'container-faq')}
            </div>
        )
    }
}

class WidgetOptions extends React.Component {
    handleClick () {
        console.log(this);
    }

    render () {
        return (
            <div
                className={this.props.className}
                onClick={() => {this.handleClick()}}
            >
                <i className={this.props.icon}></i>
                <div className="container-option">
                    <p className="title">{this.props.title}</p>
                    <p className="text">{this.props.text}</p>
                </div>
            </div>
        )
    }
}

class WidgetContainerContact extends React.Component {
    renderWidgetOption(title, icon, text, className) {
        return (
            <WidgetOptions
                title={title}
                icon={icon}
                text={text}
                className={className}
            />
        )
    }

    render() {
        return (
            <div>
                <div className="widget-content container-contact">
                    <div className="widget-history">
                        <p>Historique récent</p>
                    </div>
                    {this.renderWidgetOption(
                        'J\'ai déjà commandé',
                        'fa fa-truck',
                        'Je souhaite contacter l\'assistance après-vente de Manomano',
                        'widget-order')
                    }
                    {this.renderWidgetOption(
                        'Je n\'ai pas commandé',
                        'fa fa-search',
                        'Je soufaite parler à un expert pour des conseils produits, techniques, paiements ...',
                        'widget-order')
                    }
                    <WidgetInfo />
                </div>
            </div>
        )
    }
}

class WidgetContainerFaq extends React.Component {
    render() {
        return (
            <div className="widget-content container-faq">
                <input type="search" placeholder="Rechercher des articles d'aide"></input>
                <h2 className="faq-title">Top suggestions</h2>
                <ul className="faq-questions">
                    <li className="faq-question"> <span>J'ai recu un email me demande de finaliser ma commande, que se passe-t-il ?</span></li>
                    <li className="faq-question"><span>Comment suivre mon colis ?</span></li>
                    <li className="faq-question"><span>J'ai recu seulement une partie de ma commande.</span></li>
                </ul>
                <p className="help-link">Accéder à l'assistance</p>
            </div>
        )
    }
}

class PoweredMano extends React.Component {
    render() {
        return (
            <p className="poweredMano">Fait avec coeur par manomano </p>
        )
    }
}

class WidgetContent extends React.Component {
    render () {
        return (
            <div>
                <WidgetTitle />
                <WidgetContainerContact />
                <WidgetContainerFaq />
                <PoweredMano />
            </div>
        )
    }
}

class WidgetInfo extends React.Component {
    render () {
        return (
            <p className="widget-info">Nous vous demandons cela afin de vous diriger vers les bonnes personnes :)</p>
        )
    }
}

class Widget extends React.Component {
    render() {
        return (
            <div className="widget">
                <WidgetContent />
            </div>
        );
    }
}

export default class Test extends React.Component {
    render() {
        return (
            <div>
                <Widget />
            </div>
        );
    }
}
