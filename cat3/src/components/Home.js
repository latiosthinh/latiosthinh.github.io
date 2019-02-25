import React, { Component } from 'react';
import ReactSVG from 'react-svg'
import Popup from "reactjs-popup";
import './Home.css'
import './css/slick.css'


class Home extends Component {
    render() {    
        return (
            <div>
            <section className="psy-section" id="id1">
                <div className="container">
                <div className="board"><img id="bb" src="./images/bh.png" alt=""/>
                    <div className="row">
                    <div className="col-lg-5 item">
                        <h1>CAT</h1>
                    </div>
                    <div className="col-lg-7 item">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In aliquam dolore pariatur odit repellendus perspiciatis corrupti dolorem, porro est voluptatibus quo, eum unde rerum enim et animi nisi temporibus necessitatibus debitis! Quis molestias sint quaerat.</p>
                    </div>
                    </div>
          <img id="sub1" src="./images/2x/sub1.png" alt=""/>
          <img id="sub2" src="./images/2x/sub2.png" alt=""/>
          <img id="sub3" src="./images/2x/sub3.png" alt=""/>
                </div>
                <div className="cta">
                    <div className="item-cta"><a className="psy-btn" href="#for-parent">Parents</a></div>
                    <div className="item-cta"><a className="psy-btn" href="#id2">Children</a></div>
                </div>
                </div><img className="f1 fish" src="./images/SVG/f1.svg" alt=""/><img className="f3 fish" src="./images/SVG/f3.svg" alt=""/><img className="f4 fish" src="./images/SVG/f3.svg" alt=""/><img className="f5 fish" src="./images/SVG/f5.svg" alt=""/><img className="b1 bubble" src="./images/SVG/b1.svg" alt=""/><img className="b2 bubble" src="./images/SVG/b1.svg" alt=""/><img className="b3 bubble" src="./images/SVG/b1.svg" alt=""/><img className="b4 bubble" src="./images/SVG/b1.svg" alt=""/>
            </section>
            <section className="psy-section" id="id2">
                <div className="container">
                    <div className="row tn">
                        <div className="col-lg-6 offset-lg-3">
                        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur iste sunt explicabo? Doloremque, odio. Quos totam corrupti dignissimos? Consequuntur impedit quaerat non dolorum autem tenetur! Impedit deserunt dignissimos facilis odio.</h3>
                        </div>
                        <div className="col-lg-12">
                            <div className="bigwhale">
                <a className="test-now psy-btn" href="#id4">
                                <img src="./images/2x/whale.png" alt=""/></a>
                                <div className="bg"></div>
                            </div>
                        </div>
                    </div>
                    <img className="girl" src="./images/girl.png" alt=""/>
                    <img className="boy" src="./images/boy.png" alt=""/>
                    <img className="whale" src="./images/wavebg.png" alt=""/>
                </div>
                <div className="container list-test psy-section" id="id4">
                    <div className="row">
            <div className="top">
              {/* <a className={`test-item ghitar 
                ${!localStorage.getItem('Music') && (
                  "`done`"
                )}
                      `} href="/music">
                <ReactSVG src="./images/SVG/music.svg" />
              </a> */}
              {!localStorage.getItem('Music') && (
                <a className="test-item ghitar" href="/music">
                  <ReactSVG src="./images/SVG/music.svg" />
                </a>
              )}
              {!localStorage.getItem('IQ') && (
                <a className="test-item brain" href="/iq">
                  <ReactSVG src="./images/SVG/iq.svg" />
                </a>
              )}
              {!localStorage.getItem('Creative') && (
              <a className="test-item lightball" href="/creative">
                <ReactSVG src="./images/SVG/creative.svg" />
              </a>
              )}
              {!localStorage.getItem('Differ') && (
              <a className="test-item squid" href="/difference">
                <ReactSVG src="./images/SVG/differ2.svg" />
              </a>
              )}
            </div>
            <div className="bot">
              {!localStorage.getItem('Common') && (
                <a className="test-item atom" href="/common">
                  <ReactSVG src="./images/SVG/common.svg" />
                </a>
              )}
              {!localStorage.getItem('Memory') && (
                <a className="test-item zoom" href="/memory">
                  <ReactSVG src="./images/SVG/memory.svg" />
                </a>
              )}
              {!localStorage.getItem('Language') && (
                <a className="test-item chat" href="/language">
                  <ReactSVG src="./images/SVG/language.svg" />
                </a>
              )}
              {!localStorage.getItem('Position') && (
                <a className="test-item global" href="/position">
                  <ReactSVG src="./images/SVG/position.svg" />
                </a>
              )}
            </div>
                    </div>
                    <img className="f6" src="./images/SVG/f6.svg" alt=""/>
                    <img className="f7" src="./images/SVG/f7.svg" alt=""/>
                </div>
                <img id="island" src="./images/island.png" alt=""/>
            </section>
            <section id="for-parent">
        <div className="container">
          <div className="for-parent-title">
            <img src="./images/for-parent.png" alt="" />
          </div>

          <div className="for-parent-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
              veniam consequatur provident laudantium voluptates ad blanditiis
              illo doloremque optio, consectetur veritatis officiis deleniti.
              Magni impedit, totam odio non exercitationem ut!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
              vero aut amet quae inventore fugiat in praesentium natus cumque
              quidem.
            </p>
          </div>

          <div className="testnow-tailieu-wr">
            <button className="testnow">Test now</button>
            <button className="tailieu">Tai Lieu</button>
          </div>
          <div className="above-trynow">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ex in
              itaque qui tempore minus ducimus magni, quam et consequatur cum
              sed exercitationem fugit iusto a quasi culpa, enim necessitatibus.
              Molestiae fuga, placeat quasi eum. Corporis, adipisci facilis in
              quod.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis, soluta.
            </p>
          </div>

          <div className="trynow-btn-wr">
            <button>Try now</button>
          </div>

          <div className="article-slide-wr">
            <div className="article-slide">
              <div className="one-article">
                <div className="img-slide-wr">
                  <a href="#" 
                    ><img
                      id="img-1"
                      src="https://404store.com/2017/12/08/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg"
                      alt=""
                  /></a>
                </div>

                <a href="#" >
                  <p className="slide-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ratione porro quia facere commodi laboriosam eius est
                    obcaecati, incidunt nemo, atque aliquid fugiat delectus,
                    accusantium quas.
                  </p>
                </a>
              </div>

              <div className="one-article">
                <div className="img-slide-wr">
                  <a href="#" 
                    ><img
                      id="img-1"
                      src="https://404store.com/2017/12/08/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg"
                      alt=""
                  /></a>
                </div>

                <a href="#" >
                  <p className="slide-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ratione porro quia facere commodi laboriosam eius est
                    obcaecati, incidunt nemo, atque aliquid fugiat delectus,
                    accusantium quas.
                  </p>
                </a>
              </div>

              <div className="one-article">
                <div className="img-slide-wr">
                  <a href="#" 
                    ><img
                      id="img-1"
                      src="https://404store.com/2017/12/08/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg"
                      alt=""
                  /></a>
                </div>

                <a href="#" >
                  <p className="slide-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ratione porro quia facere commodi laboriosam eius est
                    obcaecati, incidunt nemo, atque aliquid fugiat delectus,
                    accusantium quas.
                  </p>
                </a>
              </div>

              <div className="one-article">
                <div className="img-slide-wr">
                  <a href="#" 
                    ><img
                      id="img-1"
                      src="https://404store.com/2017/12/08/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg"
                      alt=""
                  /></a>
                </div>

                <a href="#" >
                  <p className="slide-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ratione porro quia facere commodi laboriosam eius est
                    obcaecati, incidunt nemo, atque aliquid fugiat delectus,
                    accusantium quas.
                  </p>
                </a>
              </div>

              <div className="one-article">
                <div className="img-slide-wr">
                  <a href="#" 
                    ><img
                      id="img-1"
                      src="https://404store.com/2017/12/08/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg"
                      alt=""
                  /></a>
                </div>

                <a href="#" >
                  <p className="slide-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ratione porro quia facere commodi laboriosam eius est
                    obcaecati, incidunt nemo, atque aliquid fugiat delectus,
                    accusantium quas.
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="ultilities-wr">
            <div className="ult-slide">
              <div className="one-ult">
                <div className="img-ult-wr">
                  <img src="images/icon1.png" alt="" />
                </div>

                <div className="ult-content">
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="one-ult">
                <div className="img-ult-wr">
                  <img src="images/icon2.png" alt="" />
                </div>

                <div className="ult-content">
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="one-ult">
                <div className="img-ult-wr">
                  <img src="images/icon3.png" alt="" />
                </div>

                <div className="ult-content">
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="one-ult">
                <div className="img-ult-wr">
                  <img src="images/icon2.png" alt="" />
                </div>

                <div className="ult-content">
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="one-ult">
                <div className="img-ult-wr">
                  <img src="images/icon1.png" alt="" />
                </div>

                <div className="ult-content">
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

            </div>
        );
    }
}
    
export default Home;