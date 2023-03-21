import styled from '@emotion/styled';

export const StatisticsConteiner = styled.section`
	width: 480px;
	margin-top: 20px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
	caret-color: transparent;
	cursor: pointer;
	background-color: rgba(86, 210, 245, 0.4);
	border-radius: 30px;
`;

export const StatisticsTitle = styled.h2`
	text-align: center;
	font-size: 32px;
`;

export const StatisticsList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	margin: 0;
	padding: 0;
	border-radius: 0 0 30px 30px;
	li:nth-of-type(2n) {
		border-right: 1px solid rgb(74, 74, 74);
		border-left: 1px solid rgb(74, 74, 74);
	}
	li {
		flex-basis: calc((100% - 2.66px) / 5);
		padding: 15px 0;
	}
	li:first-of-type {
		border-radius: 0 0 0 30px;
	}
	li:last-of-type {
		border-radius: 0 0 30px 0;
	}
`;
