
const Main = () => {
    const urls = [

    ];
    return(
    <section className = "section">    
    <div className = "container">   
        <div className="columns is-vcentered">
            <div className="column is-2 ">
                <div className = "card hero is-link">
                <header class="card-header is-white">
                    <p class="card-header-title is-white">
                        <p className="title is-white"><a href="https://bulma.io/documentation/elements/button/">作品</a></p>
                    </p>
                </header>        
            </div>    
        </div>  

           <div className="column is-2 ">
                <div className = "card hero is-link">
                <header class="card-header is-white">
                    <p class="card-header-title is-white">
                        <p className="title is-white">github</p>
                    </p>
                </header>        
                </div>    
           </div>  

           <div className="column is-3 ">
                <div className = "card hero is-link">
                <header class="card-header is-white">
                    <p class="card-header-title is-white">
                        <p className="title is-white">作品動画</p>
                    </p>
                </header>        
                </div>    
           </div>  

           <div className="column is-3 ">
                <div className = "card hero is-link">
                <header class="card-header is-white">
                    <p class="card-header-title is-white">
                        <p className="title is-white">ポスター</p>
                    </p>
                </header>        
                </div>    
           </div>  
        
           <div className="column is-2 ">
                <div className = "card hero is-link">
                <header class="card-header is-white">
                    <p class="card-header-title is-white">
                        <p className="title is-white">tex</p>
                    </p>
                </header>        
                </div>    
           </div>  

            </div>

        </div> 
     </section>
    );
}

export default Main;