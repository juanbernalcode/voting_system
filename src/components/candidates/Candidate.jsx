import React from 'react';
import styled from 'styled-components';


const Vote = styled.div`

    width: 100px;
    height: 100px;
    border: solid 2px green;

`;

function Candidate() {
    return (
        <div>
            <Vote />
        </div>
    )
}

export default Candidate
