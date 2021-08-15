
const Main = () => {

    return(
    <section className = "section">

        <article class="message is-link">
            <div class="message-header">
                <p>英単語を楽しんで覚えよう</p>
            </div>

            <div class="message-body">
                このアプリでできること <br/>
                <ul>
                    <li>・単語帳の作成や英単語の追加</li>
                    <li>・英単語を追加するときの翻訳機能</li>
                    <li>・単語帳をスライドして鑑賞</li>
                    <li>・作成した単語帳に対して、四択や記述式でクイズ</li>
                    <li>・クイズを解き続けることで実績を解除</li>
                </ul>
            </div>
        </article>
        
        <article class="message is-link">
            <div class="message-header">
                <p>スマホアプリとして起動してみよう</p>
            </div>
            
            <div class="message-body">
                このアプリはionicで作成されていて、PWAによってネイティブアプリのように操作できる。<br/><br/>

                iosの場合 <br/>
                楽して覚える単語帳のページに移動 →「共有」アイコンをタップ → 「ホーム画面に追加」をタップ <br/> <br/>
            
            
                Androidの場合 <br/>
                楽して覚える単語帳のページに移動 →右上の「メニュー」アイコンをタップ → 「ホーム画面に追加」をタップ <br/> <br/>
            
                詳しくは<a href="https://www.ipodwave.com/iphone/howto/website_home.html" target="_blank">iosはこちら</a>，<a href="https://color-variations.com/android-siteicon" target="_blank">Androidはこちら</a>
            </div>
        </article>

        <p className = "title  is-italic  is-family-primary">LINKS</p>
        <div className = "container">
            <div className="columns is-vcentered">

                <div className="column">
                    <a href="https://rakutang.netlify.app/" target="_blank">
                        <div className = "button is-large hero is-link">
                            <p className="title is-white">作品</p>
                        </div>    
                    </a>
                </div>  

                <div className="column">
                    <a href="https://github.com/yu2799/vbfl" target="_blank">
                        <div className = "button is-large hero is-link">
                            <p className="title is-white">Github</p>
                        </div>    
                    </a>
                </div>   

                <div className="column">
                    <a href="https://bulma.io/documentation/elements/button/" target="_blank">
                        <div className = "button is-large hero is-link">
                            <p className="title is-white">作品動画</p>
                        </div>    
                    </a>
                </div>  

                <div className="column">
                    <a href="https://drive.google.com/file/d/14x91RDptB2o3ifYNOuJYVBiu5ks7XjeC/view" target="_blank">
                        <div className = "button is-large hero is-link">
                            <p className="title is-white">ポスター</p>
                        </div>    
                    </a>
                </div>  
         
                <div className="column">
                    <a href="https://drive.google.com/file/d/1x44Mvxm6P1Pd3zSJtMVHf3wk7wrGZILk/view" target="_blank">
                        <div className = "button is-large hero is-link">
                            <p className="title is-white">企画書</p>
                        </div>    
                    </a>
                </div>  

            </div>
        </div> 
     </section>
    );
}

export default Main;