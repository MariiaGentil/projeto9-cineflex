import styled from 'styled-components';

function Footer({ sessoes, assentos }) {
    let templateFooter = null

    if (sessoes !== null) {
        const { title, posterURL } = sessoes
        templateFooter = (
            <DivFooterSessao>
                <img src={posterURL} />
                <div>
                    <p>{title}</p>
                    {assentos === null ? <></> : <p>{assentos}</p>}
                </div>
            </DivFooterSessao>
        )
    }

    return templateFooter
}

const DivFooterSessao = styled.div`
    background-color: #C3CFD9;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;

    img{
        height: 80px;
        margin: 10px 20px 10px 30px;
        border: 5px solid #FFF;
    }

    p{
        font-family: sans-serif;
        font-weight: 500;
    }
`

export default Footer