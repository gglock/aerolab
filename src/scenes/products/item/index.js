import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { TextPrimary, TextSecondary, Image, Button } from '../../../components/includes';
import { CoinIcon, BuyWhiteIcon, BuyBlueIcon } from '../../../components/icons';
import Theme from '../../../theme';

const Container = styled.div`
  position: relative;
  margin-bottom: ${(props) => props.theme.spacing.unit * 4}px;
  overflow: hidden;
  background: ${(props) => props.theme.palette.background.default};
  box-shadow: ${(props) => props.theme.shadows[1]};
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  &:hover {
    box-shadow: 8px 8px 25px 0 rgba(0,0,0,0.40);
    transform: translate(0, -15px);
    .Product__overlay {
      transform: translate(0, 0);
    }
  }
`;

const Media = styled.div`
  margin-left: ${(props) => props.theme.spacing.unit * 3}px;
  margin-right: ${(props) => props.theme.spacing.unit * 3}px;
  border-bottom: 1px solid ${(props) => props.theme.palette.grey.main};
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  padding-top: ${(props) => props.theme.spacing.unit * 2}px;
  padding-bottom: ${(props) => props.theme.spacing.unit * 2}px;
  padding-left: ${(props) => props.theme.spacing.unit * 3}px;
  padding-right: ${(props) => props.theme.spacing.unit * 3}px;
`;

const Overlay = styled.div`
  color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 48px);
  height: calc(100% - 48px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
  background-image: linear-gradient(to bottom, rgba(10, 212, 250, .7), rgba(37, 187, 241, .9));
  transform: translate(0, 101%);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  div {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: ${(props) => props.theme.spacing.unit * 1.5}px;
    span {
      font-size: ${(props) => props.theme.typography.display4.fontSize};
      margin-right: ${(props) => props.theme.spacing.unit}px;
    }
  }
`;

const Buy = styled.div`
  position: absolute;
  z-index: 3;
  right: ${(props) => props.theme.spacing.unit}px;
  top: ${(props) => props.theme.spacing.unit}px;
`;

const NeedPoints = styled.div`
  position: absolute;
  z-index: 3;
  right: ${(props) => props.theme.spacing.unit}px;
  top: ${(props) => props.theme.spacing.unit}px;
  span {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.typography.common.white};
    background: ${(props) => props.theme.palette.alpha.black};
    border-radius: ${(props) => props.theme.spacing.unit * 2.5}px;
    min-height: ${(props) => props.theme.spacing.unit * 5}px;
    padding-left: ${(props) => props.theme.spacing.unit * 1.5}px;
    padding-right: ${(props) => props.theme.spacing.unit * 1.5}px;
    font-size: ${(props) => props.theme.typography.fontSize};
  }
`;

class Product extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      needPoints: false
    };
  }

  /*
  ** @Event
  ** @Description: Change Page Prev
  */

  handleReedenNow = () => {

    if(this.props.user.points >= this.props.item.cost) {

      this.props.reedenNow(this.props.item);

    }else{

      this.setState({ needPoints: true });

    }

  }

  render() {

    const { user, item } = this.props;
    const { needPoints } = this.state;
    let inCart = [];

    if(user.redeemHistory){
     inCart = user.redeemHistory.filter((p) => p._id === item._id);
    }

    return (
      <ThemeProvider theme={ Theme }>
        <Container className="Default__Product">
          <Media>
            { needPoints ? (
              <NeedPoints>
                <span>You need { item.cost - user.points } <img src={ CoinIcon } alt="Coin"/></span>
              </NeedPoints>
            ) : (
              <Buy>
                <Button variant="icon"><img src={ BuyBlueIcon } alt="Buy"/></Button>
              </Buy>
            )}
            <Image source={ item.img.url } alt={ item.name }/>
          </Media>
          <Content>
            <TextSecondary>{ item.category }</TextSecondary>
            <TextPrimary size="md">{ item.name }</TextPrimary>
          </Content>
          <Overlay className="Product__overlay">
            <div>
              <span>{ item.cost }</span>
              <img src={ CoinIcon } alt="Coin"/>
            </div>
            { inCart.length <= 0 ? (
              <Button variant="secondary" fullWidth onClick={ this.handleReedenNow }>Reeden now</Button>
            ) : (
              <p>Redeemed</p>
            )}
          </Overlay>
        </Container>
      </ThemeProvider>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.User
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    reedenNow: (data) => {
      dispatch({
        type: 'USER_REEDEN_NOW',
        data: data
      });
    }
  }
}

Product.propTypes = {
  item: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
