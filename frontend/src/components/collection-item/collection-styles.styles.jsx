import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  border: 1px solid black;
  padding: 10px;
  padding-bottom: 20px;
  padding-right: 30px;

  &:hover {
    .image {
      opacity: 0.8;
    }

    button,
    .desc {
      opacity: 0.85;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Description = styled.div`
  width: 80%;
  height: 71%;
  opacity: 0.7;
  position: absolute;
  font-weight: bold;
  background-size: cover;
  background-color: white;
  display: none;
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url('${imageUrl}')`};
  background-repeat: no-repeat;
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  text-align: center;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;
