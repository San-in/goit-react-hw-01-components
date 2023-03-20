import styled from '@emotion/styled';

const status = 'display:block; width: 20px; height: 20px; border-radius:50%; margin-right: 30px;';
export const Online = styled.span`
${status}
background-color: green;

`
export const Ofline = styled.span`
${status}
background-color: red;
`

export const FriendCard = styled.li`
display: flex;
justify-content: flex-start;
align-items: center;
padding: 10px;
margin-bottom: 10px;
box-shadow: 0 4px 12px rgba(0,0,0,0.2), 0 16px 20px rgba(0,0,0,0.2);
caret-color: transparent;
cursor: pointer;
background-color:rgba(86, 210, 245,0.4);
border-radius:30px;
`
export const FriendImg = styled.img`
margin-right:10px;
` 

export const FriendName = styled.p`
margin: 0;
font-weight:600;
` 