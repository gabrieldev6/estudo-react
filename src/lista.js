import React, {useState, useEffect} from 'react'

export default function Exemplo() {
    const [lista, setLista] = useState([])
    const [disposito, setDisposito] = useState('')

    // ele observa se ha alguam mudança em setList
    // executa a primeira vez quando a renderizacao esta sendo carregada
    useEffect(()=> {
        //pede permissao para pagina ter acesso ao dispositivos de audio e video do aparelho
        navigator.mediaDevices.getUserMedia({audio:true, video: true})
        // lista os dispositivos
        navigator.mediaDevices.enumerateDevices().then(devices => {
            let lista = devices.filter(device => device.kind === 'videoinput')
            setDisposito(lista[0].deviceId)
            setLista(lista)
        })
    },[])
    
    // função que é chamada quando o evento de click na lista é acionado
    const selectDis = (event) => {
        const deviceIdSelect = event.target.value
        const select = lista.find((camera) => camera.deviceId === deviceIdSelect);
        setDisposito(select.deviceId)
    }
    
    
    
    return (
        <div>
            <select onChange={selectDis} value={disposito?.deviceId}>{lista.map((item, index)=> {
                return <option key={item.deviceId} value={item.deviceId}>{item.label || item.deviceId}</option>
            })
            }</select>

            <h1>{disposito}</h1>
        </div>
    )
}