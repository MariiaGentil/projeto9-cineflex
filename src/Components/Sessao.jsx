import { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios'
import { useParams, Link } from 'react-router-dom';
import Footer from './Footer';

function Sessao({setSessoes, sessoes}) {
    const param = useParams()
    const filmeID = param.filmeID

    const [dataSessoes, setDataSessoes] = useState(null)

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeID}/showtimes`)
        promise.then(response => {
            const { data } = response
            setSessoes(data)
            setDataSessoes(data.days)
        }).catch()
    }, []);

    let datas = null

    if (dataSessoes !== null) {
        datas = (
            dataSessoes.map(dS => {
                const showTimes = dS.showtimes
                return (
                    <>
                        <p>{dS.weekday} - {dS.date}</p>
                        {showTimes.map(sT => (<Link to={`/assentos/${sT.id}`} key={sT.id}><button>{sT.name}</button></Link>))}
                    </>
                )
            })
        )
    }

    return (
        <>
            <PTituloSessao>Selecione o horário</PTituloSessao>
            <DivDatas>{datas}</DivDatas>
            <Footer sessoes={sessoes} assentos={null}></Footer>
        </>
    )
}

const PTituloSessao = styled.p`
    width: fit-content;
    margin: 20px auto 0;
    font-family: sans-serif;
    font-size: 20px;
`

const DivDatas = styled.div`
    margin-left: 50px;
    overflow-y: scroll;
    margin-top: 10px;
    height: calc(70vh - 100px);


    p{
        width: fit-content;
        font-family: sans-serif;
        margin: 20px 0;
    }

    button {
        background-color: #E8833A;
        border-radius: 5px;
        border: none;
        padding: 10px 20px;
        margin-right: 10px;
        color: #FFF;
        cursor: pointer;
    }
`


export default Sessao