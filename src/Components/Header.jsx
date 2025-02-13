import styled from 'styled-components'

function Header() {
    return (
        <DivHeader>
            <h1 >CINEFLEX</h1>
        </DivHeader>
    )
}

const DivHeader = styled.div`

    display: flex;
    background-color: #C3CFD9;
    justify-content: center;
    

            h1{
                color: #E8833A;
                font-family: sans-serif;
                font-weight: 400;
                padding: 20px;
                font-size: 28px;
            }
            `



export default Header