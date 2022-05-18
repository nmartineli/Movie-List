import styled, { css } from 'styled-components';

const BaseButton = styled.button`
	padding: 5px 10px;
	font-size: ${(props) => props.theme.fontSize.sm};
	border: solid 1px ${(props) => props.theme.colors.grey500};
`;

export const ListButton = styled(BaseButton)`
	color: ${(props) => props.theme.colors.white};
	background: ${(props) => props.theme.colors.grey500};
`;
