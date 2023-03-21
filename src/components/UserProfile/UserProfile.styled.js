import styled from '@emotion/styled';

export const ProfileCard = styled.div`
	padding-top: 50px;
	background-color: rgba(86, 210, 245, 0.4);
	border-radius: 30px;
	width: 280px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
	caret-color: transparent;
	cursor: pointer;
`;

export const CardDescription = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	img {
		border-radius: 50%;
		background-color: rgb(223, 180, 101);
		max-width: 100px;
	}
`;

export const CardName = styled.p`
	font-size: 24px;
	font-weight: 500;
	margin-bottom: 10px;
`;

export const CardTag = styled.p`
	margin-top: 0;
	font-size: 14px;
	color: rgb(74, 74, 74);
	font-style: italic;
`;

export const CardLocation = styled.p`
	margin-top: 0;
	font-size: 18px;
	color: rgb(74, 74, 74);
`;
export const CardStats = styled.ul`
	border: 1px solid rgb(74, 74, 74);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 5px;
	margin: 0;
	gap: 15px;
	flex-wrap: wrap;
	background-color: rgb(223, 180, 101);
	border-radius: 0 0 30px 30px;
	overflow: hidden;
	li:nth-of-type(2) {
		border-right: 1px solid rgb(74, 74, 74);
		border-left: 1px solid rgb(74, 74, 74);
	}
	li {
		text-align: center;
		display: flex;
		gap: 10px;
		flex-direction: column;
		flex-basis: calc((100% - 32px) / 3);
		padding: 10px 0px;
	}
`;

export const CardStatsLabel = styled.span`
	font-size: 16px;
`;

export const CardStatsQnt = styled.span`
	font-size: 14px;
	font-weight: 700;
`;
