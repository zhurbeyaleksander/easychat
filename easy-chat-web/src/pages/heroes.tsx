import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { ApplicationState, ConnectedReduxProps } from '../store';

interface PropsFromState {
    login: string
    password: string
    token: string
    isLogin: boolean
}

type Props = PropsFromState & RouteComponentProps<{}> & ConnectedReduxProps;

export class HeroesPage extends React.Component<Props> {
    public render() {
        return (
            <div>Страница</div>
        )
    }
}

const mapStateToProps = ({login}: ApplicationState) => {
    console.log('gfdg')
    return {
        login: login.login,
        password: login.password,
        token: login.token,
        isLogin: login.isLogin
    }
}

export default connect(mapStateToProps)(HeroesPage);
