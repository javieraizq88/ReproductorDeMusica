import React from "react";

const ListaAudio = props => {
    console.log(props.lista)
    return (
        <>
            <div className="container">
                <div className="col-3"></div>
                <div className="card col-6" >
                    <div className="card-body" id="listaMusica"></div>
                    {
                        !!props.lista &&
                        props.lista.map((elem, i) =>//manda la cancion segun la posicion en la q esta en el arreglo
                        { //elem.name linkea el nombre con la cancion
                            // hay q concatenar 2 url para q sea 1 cancion
                            return (
                                <li key={i} >{elem.name}
                                <audio controls>
                                    <source src={"https://assets.breatheco.de/apis/sound/"+ elem.url} type="audio/ogg"/>
                                    <source src="music.mp3" type="audio/mpeg"/>
                                </audio>
                                </li>
                            )
                        })
                    }   
                    <div className="card-body">
                        <button onClick="backward()" type="button" className="col-1 fas fa-backward"></button>
                        <button onClick="play()" type="button" className="col-1 fas fa-play"></button>
                        <button onClick="forward()" type="button" className="col-1 fas fa-forward"></button>
                    </div>
                </div>
                <div className=" col-3"></div>
            </div>
        </>
    )
}



export default ListaAudio;