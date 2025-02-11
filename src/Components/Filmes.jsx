import { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import axios from 'axios'

function Filmes() {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")

        promise.then(response => {
            const { data } = response
            setFilmes(data)
        })
    }, []);

    return (
        <>
            <PFilmes>Selecione o filme</PFilmes>
            <DivFilmes>
                {filmes.map(f => <Link to={`/sessao/${f.id}`}><img src={f.posterURL}/></Link>)}
            </DivFilmes>
        </>
    );
}

const DivFilmes = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin: 30px 0;
    
    img{
        width: 150px;
        cursor: pointer;
    }

`

const PFilmes = styled.div`
    width: fit-content;
    margin: 20px auto 0;
    font-family: sans-serif;
    font-size: 20px;
`

export default Filmes