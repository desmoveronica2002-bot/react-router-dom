export default function Home(){
    return(
        <>
        <header> 
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
               <div class="container-fluid">
                  <div class="collapse navbar-collapse" id="navbarNav">
                   <ul class="navbar-nav">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/presentazione">chi siamo</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="products">prodotti</a>
                      </li>
                    </ul>
                  </div>
                </div>
            </nav>
        </header>

        <main>
            <h1>BENVENUTO!</h1>
            <img src="https://nuvoluzione.com/wp-content/uploads/2016/03/vendita-promozionale.jpg" alt="img promozionale" />

        </main>

        <footer>
            <h2>fine</h2>
        </footer>
          
          </>
    )
}