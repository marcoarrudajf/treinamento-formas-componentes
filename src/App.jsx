import React from 'react';
import './App.css';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import ComFilhos from './components/basicos/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/Condicional';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/form/Imput';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';


export default props => (

    <div className='App'>
        <header>
            <h1>Treinamento de Vários Formas Componentes</h1>

        </header>

        <div className='Cards'>

            <Card title='#11 - Mega' color='#cc441b'>
                <Mega qtdeNumero={6}></Mega>
            </Card>

            <Card title='#10 - Contador' color='#FFD700'>
                <Contador passo={10} valor={100}></Contador>
            </Card>

            <Card title='#09 - Input' color='#FF0000'>
                <Input></Input>
            </Card>

            <Card title='#08 - Comunicação Indireta' color='#FF1493'>
                <Super></Super>
            </Card>

            <Card title='#07 - Comunicação Direta' color='#8B4513'>
                <Pai sobrenome='Freitas'>
                </Pai>
            </Card>

            <Card title='#06 - Condicional com If' color='#F2E394 '>
                <CondicionalComIf numero={10}></CondicionalComIf>
            </Card>

            <Card title='#05 - Condicional' color="#213cbc">
                <Condicional numero={11}></Condicional>
            </Card>

            <Card title='#04 - Repetição' color='#8A2BE2'>
                <Repeticao />
            </Card>

            <Card title='#03 - Componentes com Filhos' color='#3CB371'>
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card title='#02 - Componentes com Parametros' color='#D2691E'>
                <ComParametro title='Esse é o Título' subtitle='Esse é o Subtítulo' />
                <ComParametro title='Opa' subtitle='Epa' />
            </Card>

            <Card title='#01 - Primeiro Exerc.' color='#FF1493'>
                <Primeiro />
            </Card>
        </div>

    </div>
);
