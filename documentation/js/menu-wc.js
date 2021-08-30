'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">stream-cqrs documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DatabaseModule-978aba2664a02c485a35e164f065f7dc"' : 'data-target="#xs-injectables-links-module-DatabaseModule-978aba2664a02c485a35e164f065f7dc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabaseModule-978aba2664a02c485a35e164f065f7dc"' :
                                        'id="xs-injectables-links-module-DatabaseModule-978aba2664a02c485a35e164f065f7dc"' }>
                                        <li class="link">
                                            <a href="injectables/KafkaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KafkaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MongooseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MongooseService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PatientsModule.html" data-type="entity-link" >PatientsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PatientsModule-d67dfa207139da2cfd899b233f32a620"' : 'data-target="#xs-controllers-links-module-PatientsModule-d67dfa207139da2cfd899b233f32a620"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PatientsModule-d67dfa207139da2cfd899b233f32a620"' :
                                            'id="xs-controllers-links-module-PatientsModule-d67dfa207139da2cfd899b233f32a620"' }>
                                            <li class="link">
                                                <a href="controllers/PatientController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatientController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PatientsModule-d67dfa207139da2cfd899b233f32a620"' : 'data-target="#xs-injectables-links-module-PatientsModule-d67dfa207139da2cfd899b233f32a620"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PatientsModule-d67dfa207139da2cfd899b233f32a620"' :
                                        'id="xs-injectables-links-module-PatientsModule-d67dfa207139da2cfd899b233f32a620"' }>
                                        <li class="link">
                                            <a href="injectables/PatientRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatientRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PatientSagas.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatientSagas</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PatientViewConsumer.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatientViewConsumer</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PatientViewRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatientViewRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PatientsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PatientsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePatientCommand.html" data-type="entity-link" >CreatePatientCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePatientHandler.html" data-type="entity-link" >CreatePatientHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePatientViewCommand.html" data-type="entity-link" >CreatePatientViewCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePatientViewHandler.html" data-type="entity-link" >CreatePatientViewHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeletePatientCommand.html" data-type="entity-link" >DeletePatientCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeletePatientHandler.html" data-type="entity-link" >DeletePatientHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeletePatientViewCommand.html" data-type="entity-link" >DeletePatientViewCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeletePatientViewHandler.html" data-type="entity-link" >DeletePatientViewHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/EventDto.html" data-type="entity-link" >EventDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindAllPatientsHandler.html" data-type="entity-link" >FindAllPatientsHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindAllPatientsQuery.html" data-type="entity-link" >FindAllPatientsQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/KafkaBodyDto.html" data-type="entity-link" >KafkaBodyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Patient.html" data-type="entity-link" >Patient</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientCreatedEvent.html" data-type="entity-link" >PatientCreatedEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientCreatedHandler.html" data-type="entity-link" >PatientCreatedHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientDeletedEvent.html" data-type="entity-link" >PatientDeletedEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientDeletedHandler.html" data-type="entity-link" >PatientDeletedHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientDetails.html" data-type="entity-link" >PatientDetails</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientId.html" data-type="entity-link" >PatientId</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientModel.html" data-type="entity-link" >PatientModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientResolver.html" data-type="entity-link" >PatientResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientUpdate.html" data-type="entity-link" >PatientUpdate</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientUpdatedEvent.html" data-type="entity-link" >PatientUpdatedEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientUpdatedHandler.html" data-type="entity-link" >PatientUpdatedHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientView.html" data-type="entity-link" >PatientView</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientViewCreatedEvent.html" data-type="entity-link" >PatientViewCreatedEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientViewCreatedHandler.html" data-type="entity-link" >PatientViewCreatedHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientViewDeletedEvent.html" data-type="entity-link" >PatientViewDeletedEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientViewDeletedHandler.html" data-type="entity-link" >PatientViewDeletedHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientViewUpdatedEvent.html" data-type="entity-link" >PatientViewUpdatedEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientViewUpdatedHandler.html" data-type="entity-link" >PatientViewUpdatedHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePatientCommand.html" data-type="entity-link" >UpdatePatientCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePatientHandler.html" data-type="entity-link" >UpdatePatientHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePatientViewCommand.html" data-type="entity-link" >UpdatePatientViewCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePatientViewHandler.html" data-type="entity-link" >UpdatePatientViewHandler</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/PatientInterface.html" data-type="entity-link" >PatientInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});