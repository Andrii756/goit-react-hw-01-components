import styled from '@emotion/styled';

export const Card = styled.div`
    width: 250px;
    border: 1px solid #c6c6e3;
    border-radius: 5px;
    box-shadow: rgb(100 151 125 / 20%) 0px 10px 24px;
    background-color: #ffffff;
}
`;
export const CardDescription = styled.div`
  text-align: center;
  padding: 15px 15px 30px;
`;

export const UserImage = styled.img`
  width: 150px;
  border-radius: 50%;
  outline: 1px solid black;
`;
export const UserName = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: 500;
`;
export const CardStats = styled.ul`
  list-style-type: none;
  display: flex;
  padding-left: 0;
  margin: 0;
  background-color:#e2e2e2;
  border-top: 1px solid #c6c6e3;
`;
export const CardStat = styled.li`
  padding: 8px;
  flex-basis: calc(100% / 3);
  text-align: center;
  border-right: 1px solid #c6c6e3;
  &:last-child {
    border: none;
  }
`;

export const CardStatLabel = styled.span`
  display: block;
  color: black;
`;
export const CardStatValue = styled.span`
  display: block;
  font-weight: 500;
`;
export const UserTag = styled.p`
  font-weight: 500;
  color: #c5c5c5;
  margin-bottom: 0;
  margin-top: 8px;
`;
export const UserLocation = styled.p`
  font-weight: 500;
  color: #7f7f7f;
  margin-bottom: 0;
  margin-top: 8px;
`;
