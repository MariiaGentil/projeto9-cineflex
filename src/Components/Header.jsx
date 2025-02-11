import styled from 'styled-components'

function Header({ primaryColor , secundaryColor}) {
    return (
        <DivHeader primaryColor={primaryColor} secundaryColor={secundaryColor}>
            <h1 >CINEFLEX</h1>
        </DivHeader>
    )
}

const DivHeader = styled.div`

    display: flex;
    background-color: ${props => props.secundaryColor};
    justify-content: center;
    

            h1{
                color: ${props => props.primaryColor};
                font-family: sans-serif;
                font-weight: 400;
                padding: 20px;
                font-size: 28px;
            }
            `



export default Header