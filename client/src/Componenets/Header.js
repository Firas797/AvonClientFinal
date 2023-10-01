import React from 'react'
import Products from './OffresProducts'
import { useDispatch, useSelector } from "react-redux";
import { Button } from 'react-bootstrap';
import Spinner from './Spinner';

function Header() {
  const totalQte = useSelector((state)=>state.cart.cartTotalQuantity)
  return (
 <div>
  <div className="hero_area">
    {/* header section strats */}
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="index.html"><img width={200} src="images/logo.png" alt="#" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">Accueil <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Offres">Offres</a>
              </li>
           
              <li className="nav-item">
                <a className="nav-link" href="/products">Femme</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Homme">Homme</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Enfants">Enfants</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="/Cheveux">Cheveux</a>
              </li>
             
            
         
             
              <li className="nav-item">
                <a className="nav-link" href="/cart">
                 <div>    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029" style={{enableBackground: 'new 0 0 456.029 456.029'}} xmlSpace="preserve">
                    <g>
                      <g>
                        <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                                    c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                                    C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                                    c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                                    C457.728,97.71,450.56,86.958,439.296,84.91z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                                    c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
                      </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                  </svg> 
                  <span className='cartcss'>{totalQte} </span> 
                  </div>
              
                </a>
              </li>
              <form className="form-inline">
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    {/* end header section */}
    {/* slider section */}
    <section className="slider_section ">
  <div className="slider_bg_box">
    <img src="images/slider-bg.jpg" alt="" />
  </div>
  <div id="customCarousel1" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="container ">
          <div className="row">
            <div className="col-md-7 col-lg-6 ">
              <div className="detail-box">
                <h1>
                  <span>
                  Avec Avon
                  </span>
                  <br />
la beauté est plus qu'une apparence,
<br/> c'est un mode de vie                </h1>
                <p>
                qui est en vous avec les produits Avon
                <br/>                </p>
                <div className="btn-box">
                <a href="#products-section" className="btn1">
    Achetez maintenant
  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item ">
        <div className="container ">
          <div className="row">
          <div className="col-md-7 col-lg-6 ">
              <div className="detail-box">
                <h1>
                  <span>
                  Avec Avon
                  </span>
                  <br />
 plus qu'une apparence,
 où la beauté rencontre la confiance               </h1>
                <p>
                Chaque jour est une chance de briller
                <br/>                </p>
                <div className="btn-box">
                <a href="#products-section" className="btn1">
    Achetez maintenant
  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="container ">
          <div className="row">
          <div className="col-md-7 col-lg-6 ">
              <div className="detail-box">
                <h1>
                  <span>
                  Avec Avon
                  </span>
                  <br />
                  Chaque jour est une chance de briller .
                  Une beauté intemporelle.      </h1>
                <p>
                une beauté intemporelle.
                <br/>                </p>
                <div className="btn-box">
                <a href="#products-section" className="btn1">
    Achetez maintenant
  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <ol className="carousel-indicators">
        <li data-target="#customCarousel1" data-slide-to={0} className="active" />
        <li data-target="#customCarousel1" data-slide-to={1} />
        <li data-target="#customCarousel1" data-slide-to={2} />
      </ol>
    </div>
  </div>
</section>


    {/* end slider section */}
  </div>
  {/* why section */}
  <section className="why_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
        Pourquoi acheter chez nous
        </h2>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="box ">
            <div className="img-box">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
                <g>
                  <g>
                    <path d="M476.158,231.363l-13.259-53.035c3.625-0.77,6.345-3.986,6.345-7.839v-8.551c0-18.566-15.105-33.67-33.67-33.67h-60.392
                              V110.63c0-9.136-7.432-16.568-16.568-16.568H50.772c-9.136,0-16.568,7.432-16.568,16.568V256c0,4.427,3.589,8.017,8.017,8.017
                              c4.427,0,8.017-3.589,8.017-8.017V110.63c0-0.295,0.239-0.534,0.534-0.534h307.841c0.295,0,0.534,0.239,0.534,0.534v145.372
                              c0,4.427,3.589,8.017,8.017,8.017c4.427,0,8.017-3.589,8.017-8.017v-9.088h94.569c0.008,0,0.014,0.002,0.021,0.002
                              c0.008,0,0.015-0.001,0.022-0.001c11.637,0.008,21.518,7.646,24.912,18.171h-24.928c-4.427,0-8.017,3.589-8.017,8.017v17.102
                              c0,13.851,11.268,25.119,25.119,25.119h9.086v35.273h-20.962c-6.886-19.883-25.787-34.205-47.982-34.205
                              s-41.097,14.322-47.982,34.205h-3.86v-60.393c0-4.427-3.589-8.017-8.017-8.017c-4.427,0-8.017,3.589-8.017,8.017v60.391H192.817
                              c-6.886-19.883-25.787-34.205-47.982-34.205s-41.097,14.322-47.982,34.205H50.772c-0.295,0-0.534-0.239-0.534-0.534v-17.637
                              h34.739c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017H8.017c-4.427,0-8.017,3.589-8.017,8.017
                              s3.589,8.017,8.017,8.017h26.188v17.637c0,9.136,7.432,16.568,16.568,16.568h43.304c-0.002,0.178-0.014,0.355-0.014,0.534
                              c0,27.996,22.777,50.772,50.772,50.772s50.772-22.776,50.772-50.772c0-0.18-0.012-0.356-0.014-0.534h180.67
                              c-0.002,0.178-0.014,0.355-0.014,0.534c0,27.996,22.777,50.772,50.772,50.772c27.995,0,50.772-22.776,50.772-50.772
                              c0-0.18-0.012-0.356-0.014-0.534h26.203c4.427,0,8.017-3.589,8.017-8.017v-85.511C512,251.989,496.423,234.448,476.158,231.363z
                              M375.182,144.301h60.392c9.725,0,17.637,7.912,17.637,17.637v0.534h-78.029V144.301z M375.182,230.881v-52.376h71.235
                              l13.094,52.376H375.182z M144.835,401.904c-19.155,0-34.739-15.583-34.739-34.739s15.584-34.739,34.739-34.739
                              c19.155,0,34.739,15.583,34.739,34.739S163.99,401.904,144.835,401.904z M427.023,401.904c-19.155,0-34.739-15.583-34.739-34.739
                              s15.584-34.739,34.739-34.739c19.155,0,34.739,15.583,34.739,34.739S446.178,401.904,427.023,401.904z M495.967,299.29h-9.086
                              c-5.01,0-9.086-4.076-9.086-9.086v-9.086h18.171V299.29z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M144.835,350.597c-9.136,0-16.568,7.432-16.568,16.568c0,9.136,7.432,16.568,16.568,16.568
                              c9.136,0,16.568-7.432,16.568-16.568C161.403,358.029,153.971,350.597,144.835,350.597z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M427.023,350.597c-9.136,0-16.568,7.432-16.568,16.568c0,9.136,7.432,16.568,16.568,16.568
                              c9.136,0,16.568-7.432,16.568-16.568C443.591,358.029,436.159,350.597,427.023,350.597z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M332.96,316.393H213.244c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017H332.96
                              c4.427,0,8.017-3.589,8.017-8.017S337.388,316.393,332.96,316.393z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M127.733,282.188H25.119c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h102.614
                              c4.427,0,8.017-3.589,8.017-8.017S132.16,282.188,127.733,282.188z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M278.771,173.37c-3.13-3.13-8.207-3.13-11.337,0.001l-71.292,71.291l-37.087-37.087c-3.131-3.131-8.207-3.131-11.337,0
                              c-3.131,3.131-3.131,8.206,0,11.337l42.756,42.756c1.565,1.566,3.617,2.348,5.668,2.348s4.104-0.782,5.668-2.348l76.96-76.96
                              C281.901,181.576,281.901,176.501,278.771,173.37z" />
                  </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
              </svg>
            </div>
            <div className="detail-box">
              <h5>
              Livraison rapide
              </h5>
              <p>
              Suivi en temps réel de votre livraison pour une expérience transparente.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="box ">
            <div className="img-box">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
                <g>
                  <g>
                    <path d="M476.158,231.363l-13.259-53.035c3.625-0.77,6.345-3.986,6.345-7.839v-8.551c0-18.566-15.105-33.67-33.67-33.67h-60.392
                              V110.63c0-9.136-7.432-16.568-16.568-16.568H50.772c-9.136,0-16.568,7.432-16.568,16.568V256c0,4.427,3.589,8.017,8.017,8.017
                              c4.427,0,8.017-3.589,8.017-8.017V110.63c0-0.295,0.239-0.534,0.534-0.534h307.841c0.295,0,0.534,0.239,0.534,0.534v145.372
                              c0,4.427,3.589,8.017,8.017,8.017c4.427,0,8.017-3.589,8.017-8.017v-9.088h94.569c0.008,0,0.014,0.002,0.021,0.002
                              c0.008,0,0.015-0.001,0.022-0.001c11.637,0.008,21.518,7.646,24.912,18.171h-24.928c-4.427,0-8.017,3.589-8.017,8.017v17.102
                              c0,13.851,11.268,25.119,25.119,25.119h9.086v35.273h-20.962c-6.886-19.883-25.787-34.205-47.982-34.205
                              s-41.097,14.322-47.982,34.205h-3.86v-60.393c0-4.427-3.589-8.017-8.017-8.017c-4.427,0-8.017,3.589-8.017,8.017v60.391H192.817
                              c-6.886-19.883-25.787-34.205-47.982-34.205s-41.097,14.322-47.982,34.205H50.772c-0.295,0-0.534-0.239-0.534-0.534v-17.637
                              h34.739c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017H8.017c-4.427,0-8.017,3.589-8.017,8.017
                              s3.589,8.017,8.017,8.017h26.188v17.637c0,9.136,7.432,16.568,16.568,16.568h43.304c-0.002,0.178-0.014,0.355-0.014,0.534
                              c0,27.996,22.777,50.772,50.772,50.772s50.772-22.776,50.772-50.772c0-0.18-0.012-0.356-0.014-0.534h180.67
                              c-0.002,0.178-0.014,0.355-0.014,0.534c0,27.996,22.777,50.772,50.772,50.772c27.995,0,50.772-22.776,50.772-50.772
                              c0-0.18-0.012-0.356-0.014-0.534h26.203c4.427,0,8.017-3.589,8.017-8.017v-85.511C512,251.989,496.423,234.448,476.158,231.363z
                              M375.182,144.301h60.392c9.725,0,17.637,7.912,17.637,17.637v0.534h-78.029V144.301z M375.182,230.881v-52.376h71.235
                              l13.094,52.376H375.182z M144.835,401.904c-19.155,0-34.739-15.583-34.739-34.739s15.584-34.739,34.739-34.739
                              c19.155,0,34.739,15.583,34.739,34.739S163.99,401.904,144.835,401.904z M427.023,401.904c-19.155,0-34.739-15.583-34.739-34.739
                              s15.584-34.739,34.739-34.739c19.155,0,34.739,15.583,34.739,34.739S446.178,401.904,427.023,401.904z M495.967,299.29h-9.086
                              c-5.01,0-9.086-4.076-9.086-9.086v-9.086h18.171V299.29z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M144.835,350.597c-9.136,0-16.568,7.432-16.568,16.568c0,9.136,7.432,16.568,16.568,16.568
                              c9.136,0,16.568-7.432,16.568-16.568C161.403,358.029,153.971,350.597,144.835,350.597z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M427.023,350.597c-9.136,0-16.568,7.432-16.568,16.568c0,9.136,7.432,16.568,16.568,16.568
                              c9.136,0,16.568-7.432,16.568-16.568C443.591,358.029,436.159,350.597,427.023,350.597z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M332.96,316.393H213.244c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017H332.96
                              c4.427,0,8.017-3.589,8.017-8.017S337.388,316.393,332.96,316.393z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M127.733,282.188H25.119c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h102.614
                              c4.427,0,8.017-3.589,8.017-8.017S132.16,282.188,127.733,282.188z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M278.771,173.37c-3.13-3.13-8.207-3.13-11.337,0.001l-71.292,71.291l-37.087-37.087c-3.131-3.131-8.207-3.131-11.337,0
                              c-3.131,3.131-3.131,8.206,0,11.337l42.756,42.756c1.565,1.566,3.617,2.348,5.668,2.348s4.104-0.782,5.668-2.348l76.96-76.96
                              C281.901,181.576,281.901,176.501,278.771,173.37z" />
                  </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
              </svg>
            </div>
            
            <div className="detail-box">
              <h5>
              Livraison Gratuite
              </h5>
              <p>
              Frais de port offerts sur une sélection de produits.

              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="box ">
            <div className="img-box">
              <svg id="_30_Premium" height={512} viewBox="0 0 512 512" width={512} xmlns="http://www.w3.org/2000/svg" data-name="30_Premium">
                <g id="filled">
                  <path d="m252.92 300h3.08a124.245 124.245 0 1 0 -4.49-.09c.075.009.15.023.226.03.394.039.789.06 1.184.06zm-96.92-124a100 100 0 1 1 100 100 100.113 100.113 0 0 1 -100-100z" />
                  <path d="m447.445 387.635-80.4-80.4a171.682 171.682 0 0 0 60.955-131.235c0-94.841-77.159-172-172-172s-172 77.159-172 172c0 73.747 46.657 136.794 112 161.2v158.8c-.3 9.289 11.094 15.384 18.656 9.984l41.344-27.562 41.344 27.562c7.574 5.4 18.949-.7 18.656-9.984v-70.109l46.6 46.594c6.395 6.789 18.712 3.025 20.253-6.132l9.74-48.724 48.725-9.742c9.163-1.531 12.904-13.893 6.127-20.252zm-339.445-211.635c0-81.607 66.393-148 148-148s148 66.393 148 148-66.393 148-148 148-148-66.393-148-148zm154.656 278.016a12 12 0 0 0 -13.312 0l-29.344 19.562v-129.378a172.338 172.338 0 0 0 72 0v129.38zm117.381-58.353a12 12 0 0 0 -9.415 9.415l-6.913 34.58-47.709-47.709v-54.749a171.469 171.469 0 0 0 31.467-15.6l67.151 67.152z" />
                  <path d="m287.62 236.985c8.349 4.694 19.251-3.212 17.367-12.618l-5.841-35.145 25.384-25c7.049-6.5 2.89-19.3-6.634-20.415l-35.23-5.306-15.933-31.867c-4.009-8.713-17.457-8.711-21.466 0l-15.933 31.866-35.23 5.306c-9.526 1.119-13.681 13.911-6.634 20.415l25.384 25-5.841 35.145c-1.879 9.406 9 17.31 17.367 12.618l31.62-16.414zm-53-32.359 2.928-17.615a12 12 0 0 0 -3.417-10.516l-12.721-12.531 17.658-2.66a12 12 0 0 0 8.947-6.5l7.985-15.971 7.985 15.972a12 12 0 0 0 8.947 6.5l17.658 2.66-12.723 12.535a12 12 0 0 0 -3.417 10.516l2.928 17.615-15.849-8.231a12 12 0 0 0 -11.058 0z" />
                </g>
              </svg>
            </div>
            <div className="detail-box">
              <h5>
              Meilleure qualité
              </h5>
              <p>
              Garantie de satisfaction totale sur tous les produits .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end why section */}
  {/* arrival section */}
  <section className="arrival_section">
    <div className="container">
      <div className="box">
        <div className="arrival_bg_box">
          <img src="images/arrival-bg.png" alt />
        </div>
        <div className="row">
          <div className="col-md-6 ml-auto">
            <div className="heading_container remove_line_bt">
              <h2>
                #Surprise ! 
              </h2>
            </div>
            <p style={{marginTop: 20, marginBottom: 30}}>
            Si votre commande est supérieure à 200Dt, la livraison est gratuite
            </p>
            <a href="#products-section" className="btn1">
    Achetez maintenant
  </a>
          </div>
          
        </div>
        
      </div>
    </div>
  </section>
  {/* end arrival section */}
  {/* product section */}


  <div id="products-section">
  <Products />
</div>

  
  {/* end product section */}
  {/* subscribe section */}
  <section className="subscribe_section">
    <div className="container-fuild">
      <div className="box">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="subscribe_form ">
              <div className="heading_container heading_center">
                <h3>Abonnez-vous pour obtenir des offres de réduction</h3>
              </div>
              <p>Nous sommes une entreprise passionnée par la mode et la qualité. Depuis des années, nous nous engageons à offrir à nos clients les dernières tendances et les meilleurs produits.
                 Notre équipe dévouée travaille sans relâche pour garantir que chaque achat que vous faites est une expérience exceptionnelle.</p>
              <form action href="https://www.facebook.com/avontunisieofficiel">
                 <button >
                  <a className='nono' href='https://www.facebook.com/avontunisieofficiel'>
                  subscribe
                  </a>
                  
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="full">
            <div className="logo_footer">
            </div>
            <div className="information_f">
              <p><strong>ADDRESS:</strong>  S15, Bloc B- Rez de chaussée Centre commercial "Le Millenium" Sidi Daoud La Marsa 2046</p>
              <p><strong>TELEPHONE:</strong> (+216)71 804 799</p>
              <p><strong>EMAIL:</strong>  avon.ixia@ixia.com.tn</p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-6">
                  <div className="widget_menu">
                    <h3>Menu</h3>
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="products">Femme</a></li>
                      <li><a href="/Homme">Homme</a></li>
                      <li><a href="/Offres">Offres</a></li>
                      <li><a href="/Cheveux">Cheveux</a></li>
                      <li><a href="/Enfants">Enfants</a></li>

                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="widget_menu">
                    <h3>Pq Nous !</h3>
                    <ul>
                      <li><a href="#">Meilleurs</a></li>
                      <li><a href="#">Achats</a></li>
                      <li><a href="#">Rapides</a></li>
                      <li><a href="#">Qualité</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>     
            <div className="col-md-5">
              <div className="widget_menu">
                <h3>Avon</h3>
                <div className="information_f">
                  <p>Avon est une entreprise pionnière dans la vente directe de produits de beauté. Depuis 130 ans,
                     elle aide les femmes à être et se sentir belles dans plus de 50 pays du monde entier.
                     Plus qu’un commerce, Avon est une entreprise qui défend la beauté,
                      l’innovation, la liberté et surtout les femmes.</p>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* footer end */}
  <div className="cpy_">
    <p className="mx-auto">  Copyright © 2023  AvonTunisie 
    <br/><a >tous droits </a>
 <a href="" target="_blank">réservés</a>


    </p>
    <p className="mx-auto"> Developed by : 
   
 <a href="https://www.facebook.com/bechedli.firas.7" target="_blank">Med Firas Bechedli</a>


    </p>
  </div>
 
</div>


  )
}

export default Header