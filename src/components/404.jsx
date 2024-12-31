import React from 'react';

const ErrorComponent = () => {
  const styles = {
    page_404: {
      padding: '40px 0',
      background: '#fff',
      fontFamily: 'Arvo, serif',
    },
    four_zero_four_bg: {
      backgroundImage: 'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)',
      height: '400px',
      backgroundPosition: 'center',
    },
    h1: {
      fontSize: '80px',
    },
    h3: {
      fontSize: '80px',
    },
    link_404: {
      color: '#fff',
      padding: '10px 20px',
      background: '#39ac31',
      margin: '20px 0',
      display: 'inline-block',
    },
    contant_box_404: {
      marginTop: '-50px',
    },
  };

  return (
    <section style={styles.page_404}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div style={styles.four_zero_four_bg}>
                <h1 className="text-center" style={styles.h1}>
                  404
                </h1>
              </div>

              <div style={styles.contant_box_404}>
                <h3 className="h2" style={styles.h3}>
                  Ocurrió un error
                </h3>
                <p>Vuelva a intentar luego!</p>
                <a href="https://spinbyoxxo.com.mx" style={styles.link_404}>
                  Intentar nuevamente
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorComponent;

