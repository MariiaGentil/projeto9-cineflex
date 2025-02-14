import { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Footer from './Footer';

function Assentos({ sessoes }) {
    const param = useParams()
    const { horaID } = param
    const [assentos, setAssentos] = useState(null)
    const legendaColors = [{ cor: '#8DD7CF', name: 'Selecionado' }, { cor: '#FBE192', name: 'Indisponível' }, { cor: '#C3CFD9', name: 'Disponível' }]
    const [selecionados, setSelecionados] = useState([''])
    const [nomeComprador, setNomeComprador] = useState('')
    const [cpfComprador, setCpfComprador] = useState('')

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${horaID}/seats`)
        promise.then(response => {
            const { data } = response
            setAssentos(data)
        }).catch()
    }, []);

    let assentosTemplate = null

    if (assentos !== null) {
        const { seats } = assentos
        assentosTemplate = (
            seats.map(s => {
                if (!selecionados.includes(s.id)) {
                    return (
                        <button className={s.isAvailable ? '' : 'indisponivel'} onClick={() => { if (s.isAvailable && !selecionados.includes(s.id)) { setSelecionados([...selecionados, s.id]) } }}>{s.name}</button>
                    )
                } else {
                    return (
                        <button className={'selecionado'} onClick={() => { let index = selecionados.indexOf(s.id); selecionados.splice(index, 1); setSelecionados([...selecionados]) }}>{s.name}</button>
                    )
                }
            })
        )
    }

    let legenda = (
        legendaColors.map(lC => {
            return (
                <div>
                    <button style={{ backgroundColor: lC.cor }}></button>
                    <p>{lC.name}</p>
                </div>
            )
        })
    )

    let mensagemErro = false

function validacao(){
        if(nomeComprador !== '' && cpfComprador.length === 11 && selecionados.length > 1){
            console.log('nome not ok')
        } else {
            mensagemErro = true
        }
    }

    return (
        <>
            <PTituloAssentos>Selecione o(s) assento(s)</PTituloAssentos>
            <DivAssentos>

                {assentosTemplate}
                <DivLegenda>
                    {legenda}
                </DivLegenda>
                <div>
                    <DivInput>
                        <label>Nome do comprador:</label>
                        <input type="text" placeholder='Digite seu nome...' onChange={e => setNomeComprador(e.target.value)}/>
                    </DivInput>
                    <DivInput>
                        <label>CPF do comprador:</label>
                        <input type="number" placeholder='Digite seu CPF...' onChange={e => setCpfComprador(e.target.value)}/>
                    </DivInput>
                </div>
                <ButtonFinal onClick={validacao}>Reservar assento(s)</ButtonFinal>
                {mensagemErro ? <p>erro</p> : <></>}
            </DivAssentos>
            <Footer sessoes={sessoes} assentos={assentos}></Footer>
        </>
    );
}

const PTituloAssentos = styled.p`
    width: fit-content;
    margin: 20px auto 0;
    font-family: sans-serif;
    font-size: 20px;
`

const DivAssentos = styled.div`
    margin-left: 50px;
    overflow-y: scroll;
    margin-top: 30px;
    height: calc(70vh - 100px);
    display: flex;
    flex-wrap: wrap;
    gap: 10px;


    p{
        width: fit-content;
        font-family: sans-serif;
        margin: 20px 0;
        font-size: 12px;
    }

    button {
        background-color: #C3CFD9;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
    }

    button.indisponivel{
        background-color: #FBE192;
        cursor: default;
    }

    button.selecionado{
        background-color: #8DD7CF;
    }
`

const DivLegenda = styled.div`
    display: flex;
    width: 100%;
    margin-top: 15px;
    justify-content: space-evenly;

    p{
        margin-left: -14px;
    }
`

const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vw;

    label{
        font-family: sans-serif;
        margin-top: 15px;
    }

    input{
        border: 1px solid #D4D4D4;
        padding: 10px;
        width: 300px;
    }

`

const ButtonFinal = styled.div`
    padding: 10px 50px;
    background-color: #E8833A;
    margin: 20px auto;
    font-family: sans-serif;
    color: #FFF;
    border-radius: 5px;
    cursor: pointer;
`



export default Assentos