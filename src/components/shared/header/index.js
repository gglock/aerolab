import React from 'react';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import logo from '../../../assets/aerolab-logo.svg';
import { UserService } from '../../../services';
import { Button, TextPrimary } from '../../../components/includes';
import { CoinIcon } from '../../../components/icons';
import Theme from '../../../theme';

const Container = styled.header`
  background: ${(props) => props.theme.palette.background.default};
  padding-left: ${(props) => props.theme.spacing.unit * 5}px;
  padding-right: ${(props) => props.theme.spacing.unit * 5}px;
  min-height: ${(props) => props.theme.spacing.unit * 10}px;
  display: flex;
  align-items: center;
  position: fixed;
  width: calc(100% - ${(props) => props.theme.spacing.unit * 10}px);
  box-shadow: ${(props) => props.theme.shadows[1]};
  left: 0;
  top: 0;
  z-index: 99;
  h1 {
    margin: 0;
    flex: 1;
    img {
      display: block;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: calc(100% - ${(props) => props.theme.spacing.unit * 4}px);
    padding-left: ${(props) => props.theme.spacing.unit * 2}px;
    padding-right: ${(props) => props.theme.spacing.unit * 2}px;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  .Text__Primary {
    margin-right: ${(props) => props.theme.spacing.unit * 2}px;
  }
`;

class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      change: false,
      points: 0
    };
  }

  componentDidMount(){
    this._FindUser();
  }

  componentWillUnmount(){
    this.ClearUser();
  }

  componentWillReceiveProps(next_props){
    if(next_props.User.points !== this.state.points){
      this.handleChange();
    }
  }

  /*
  ** @Service
  ** @Description: Find User
  */

  _FindUser = () => {

    UserService.me().then((response) => {

      this.setState({ points: response.points });
      this.props.UserSet(response);

    }).catch((error) => {

    });
  }

  handleChange = () => {
    this.setState({ change: true });
    setTimeout(()=>{
        this.setState({ change: false });
    },1500);
  }

  render() {

    const { User } = this.props;
    const { change } = this.state;

    return(
      <ThemeProvider theme={ Theme }>
        <Container>

         <h1><img src={ logo } alt="Aerolab"/></h1>

         { User.name && (
            <Actions>
              <TextPrimary>{ User.name }</TextPrimary>
              <Button variant={ !change ? "secondary" : undefined }>
                { User.points }
                <img src={ CoinIcon } alt="coin"/>
              </Button>
            </Actions>
          )}

        </Container>
      </ThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    User: state.User
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    UserSet: (data) => {
      dispatch({
        type: 'USER_SET',
        data: data
      });
    },
    ClearUser: () => {
      dispatch({
        type: 'USER_CLEAR'
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
