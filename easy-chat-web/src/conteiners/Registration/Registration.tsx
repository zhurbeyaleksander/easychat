import * as React from 'react';
import { Link } from 'react-router-dom';

export class Registration extends React.Component {
    public render() {
        return (
            <div>
                <Link to="/"> Вернуться </Link>
                <b>Регистрация</b>
            </div>
        );
    }
}