import React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <div>
          <header>
    <div className="header-data">
                <h1>Bienvenue sur UpDown</h1>
                <p>UpDown est plus que le partage et le stockage.
                Jetez un œil aux principales fonctionnalités pour vous simplifier la vie.</p>
              </div>  
              <button >
                <Link className="text-center" to="/signup">
                <h6>Rejoindre Maintenant</h6>
                </Link>
            </button>
          </header>
          
          <section className="container1">
          <p></p>
          </section>
            <section className="img-section">
              <p></p>
          </section>
          <section className="imgs-bar">
        <h1>Commencez gratuitement </h1>
        <button>
        <Link className="text-center" to="/signup">
                <h6>oui je veux Maintenant</h6>
                </Link>
                </button>
        </section>
        <section/>

      
     
        
        </div>
  );
}
export default IndexPage
