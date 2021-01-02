import React, { useContext } from 'react';

import Container from '../components/Container';
import Button from '../components/Button';
import Input from '../components/Input';
import Title from '../components/Title';

import ThemeContext from '../contexts/Theme';

const Home = () => {
    const { switchTheme } = useContext(ThemeContext);

    return (
        <Container>
            <Title>Dark mode com styled components</Title>
            <Input />
            <Button>Meu Button</Button>
            <Button onClick={switchTheme}>Mudar Tema</Button>
        </Container>
    )
};

export default Home;

