import React, { Component } from "react";
import "./App.css";
import { Row, Col } from "antd";
import DefaultLayout from './components/layouts/default';
import { Layout, Menu, Breadcrumb, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;

function Contact() {
    return (
        <div className="container contact">
        <Layout className="page-title-strip">
            <Content style={{ padding: "0 24px"}}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>FAQ & Contact</Breadcrumb.Item>
                </Breadcrumb>
            </Content>
            
        </Layout>
        
        <Layout>
            <Content>
                <Layout>
                <Content>
                    <div className="search-container" style={{ display: "flex", background: "#3e6ffd", minHeight: 320 }}>
                        <Row type="flex" justify="center" style={{ marginBottom: 10, width: "100%" }}>
                            <div className="search">
                                <h2>What are you looking for?</h2>
                                <form action="POST" className="search">
                                    <input type="text" placeholder="Search..."/>
                                </form>
                            </div>
                        </Row>
                    </div>

                    <div className="faq-boxes">
                        <div className="faq-box">
                            <a href="#">
                                <img src="https://i.imgur.com/ai68K0f.png" alt=""/>
                                <h2 className="faq-title">Submitting Posts</h2>
                            </a>    
                        </div>

                        <div className="faq-box">
                            <a href="#">
                                <img src="https://i.imgur.com/dUZLMDU.png" alt=""/>
                                <h2 className="faq-title">Submitting Tickets</h2>
                            </a>
                        </div>

                        <div className="faq-box">
                            <a href="#">
                                <img src="https://i.imgur.com/ai68K0f.png" alt=""/>
                                <h2 className="faq-title">Profile Management</h2>
                            </a>
                        </div>
                    </div>

                    <div className="faq-list">
                        <div className="faq-item">
                            <h2 className="faq-question">What are the benefits of a navigation system?</h2>
                            <p className="faq-answer">So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book. Aldus Corporation, which later merged with Adobe Systems, ushered lorem ipsum into the information age with its desktop publishing software Aldus PageMaker. The program came bundled with lorem ipsum dummy text for laying out page content, and other word processors like Microsoft Word followed suit.</p>
                        </div>

                        <div className="faq-item">
                            <h2 className="faq-question">Systems Accurate</h2>
                            <p className="faq-answer">Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.</p>
                        </div>

                        <div className="faq-item  is-toggled">
                            <h2 className="faq-question">How to start?</h2>
                            <p className="faq-answer">One brave soul did take a stab at translating the almost-not-quite-Latin. According to The Guardian, Jaspreet Singh Boparai undertook the challenge with the goal of making the text “precisely as incoherent in English as it is in Latin - and to make it incoherent in the same way”. As a result, “the Greek 'eu' in Latin became the French 'bien' [...] and the '-ing' ending in 'lorem ipsum' seemed best rendered by an '-iendum' in English.”</p>
                        </div>

                        <div className="faq-item">
                            <h2 className="faq-question">How to apply?</h2>
                            <p className="faq-answer">It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries.</p>
                        </div>
                    </div>
                </Content>
                </Layout>
            </Content>
        </Layout>
        </div>
    );
}

export default Contact;
