import styled from '@emotion/styled';

export const ItemConteiner = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	gap: 15px;
	background-color: ${props => props.color};
`;

export const ItemPercentage = styled.span`
	font-size: 24px;
	font-weight: 700;
`;

export const ItemLabel = styled.span`
	font-size: 20px;
`;
