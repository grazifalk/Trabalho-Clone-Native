import styled from "styled-components/native";
import colors from "../../themes/colors.js";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #120a8f;
  font-weight: bold;
  font-size: 15px;
  margin-top: 42px;
`;

export const CardContainer = styled.View`
  box-sizing: border-box;
  position: absolute;
  width: 308px;
  height: 190px;
  /* background: #FFFFFF; */
  border: 2px solid #00ffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const TextButton = styled.Text`
  font-family: sans-serif;
  text-align: center;
  color: #120a8f;
  align-self: center;
  font-size: 12px;
  font-weight: bold;
  line-height: 15px;
`;

export const StButton = styled.TouchableOpacity`
  box-sizing: border-box;
  width: 90px;
  height: 33px;
  border: 2px solid #00ffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background: #fff;
  align-self: center;
  margin-top: 20px;
  justify-content: center;
`;

export const ContainerButton = styled.View`
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    align-self: center;
    /* margin-top: 150px; */
`;



export const BottomCard = styled.View`
    width: 100%;
    height: 50px;
    bottom: -40;
`;

export const TitleCard = styled.Text`
    font-size: 12px;
    color: ${colors.secondary};
    font-weight: 800;
    padding-bottom: 15px;
    `;

export const TextCard = styled.Text`
    font-size: 12px;
    color: ${colors.secondary};
    font-weight: 800;
    padding-bottom: 5px;
`;

export const ColumnCard = styled.View`
    /* width: 90px; */
    height: 100px;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    margin: 5px;
    `;

export const ColumnCard2 = styled.View`
    width: 90%;
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
`;