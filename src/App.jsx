import './App.css'

function App() {

  return (
    <>

    <div className='birthday-card'>
      <div className='cover-inner'>
        <img src='https://images.thortful.com/cdn-cgi/image/width=600,format=auto,quality=90/card/58d6b6eee4b0af790da89a19/58d6b6eee4b0af790da89a19_medium.jpg?version=9' 
        width={"100%"} />
      </div>


      <div className='cover-outer'>
        <img src="https://images.esellerpro.com/3274/I/318/37/lrgscaleAO002.jpg" 
        width={"100%"} />
      </div>


      <div className='text'>
        <p className='title'>
          Feliz Aniversario Alberto! <br /> It's your motherfucking moment!
        </p>
        <p>
          Espero que esse dia especial traga nada além de felicidade, alegria, amor e diversão para nós. 
          Nós merecemos, ainda mais depois de tudo que passamos. Vamos aproveitar!
        </p>
        <p>Espero que não só hoje mas essa semana seja incrivel!</p>
      </div>
    </div>
    </>
  )
}

export default App
