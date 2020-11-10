import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>BarberX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Bem-vindo a <a href="#">BarberX</a>
        </h1>

        <p className="description">
          O melhor corte em qualquer lugar
        </p>

        <div className="buttons">
          <a href="#"><button className="barber-button">Sou Barbeiro</button></a>
          <a href="#"><button className="client-button">Quero Cortar</button></a>
        </div>


      </main>

      <footer>
        <a
          href="https://vibrich.tk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Powered by <b>Vinicius Vibrich</b></p>
          
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #282424;
        }

        .buttons {
          width: 500px;
          align-items: center;
        }

        .barber-button {
          width: 40%;
          margin-left: 50px;
        }

        .client-button {
          width: 40%;
          margin: 10px;
        }

        button {
            background-color: transparent;
            border: none;
            color: white;
            border: 1px solid red;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            transition-duration: 0.4s;
            border-radius: 25px;
            width: 50%;
        }

        button:hover {
          background-color: red; /* Green */
          color: white;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #ffffff;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer b {
          color: #e42d2d;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #e42d2d;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          color: #ffffff;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          color: #ffffff;
        }
        
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
