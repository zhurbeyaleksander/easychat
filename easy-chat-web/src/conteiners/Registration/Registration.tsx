import * as React from 'react';
import { Link } from 'react-router-dom';
import {  Container, } from 'reactstrap';

export class Registration extends React.Component {
    public render() {
        return (
            <div>
                <Container>
                <Link to="/"> Вернуться </Link>
                <b>Регистрация</b>
                </Container>
            </div>
        );
    }
}