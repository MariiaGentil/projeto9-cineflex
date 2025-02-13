import { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import axios from 'axios'
import Footer from './Footer';

function Assentos({sessoes}) {
    let assentos = 'assentos'

    return (
        <>
            <Footer sessoes={sessoes} assentos={assentos}></Footer> 
        </>
    );
}

export default Assentos