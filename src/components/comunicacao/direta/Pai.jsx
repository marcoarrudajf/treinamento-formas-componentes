import React from 'react';
import Filho from './Filho';

export default props =>

<div>
    <h3>Componente Filho</h3>
    <Filho {...props}>João</Filho>
    <Filho sobrenome={props.sobrenome}>Maria</Filho>
    <Filho sobrenome="Silva">Pedro</Filho>
</div>