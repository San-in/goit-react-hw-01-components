import styled from '@emotion/styled';

export const Table = styled.table`
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
	caret-color: transparent;
	cursor: pointer;
	border-radius: 30px;
	> thead {
		font-size: 24px;
		padding-bottom: 20px;
		background-color: rgba(86, 210, 245, 0.4);
		> tr > th:first-of-type {
			border-radius: 30px 0 0 0;
		}
		> tr > th:last-of-type {
			border-radius: 0 30px 0 0;
		}
		> tr > th {
			padding: 20px;
		}
	}
`;

export const TableBody = styled.tbody`
	> tr > td {
		background-color: rgb(223, 180, 101);
	}
	>tr: nth-of-type(2n) > td {
		background-color: rgba(223, 180, 101, 0.4);
	}
	> tr:last-of-type > td:first-of-type {
		border-radius: 0 0 0 30px;
	}
	> tr:last-of-type > td:last-of-type {
		border-radius: 0 0 30px 0;
	}
	> tr > td {
		padding: 15px;
	}
`;
