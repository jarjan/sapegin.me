import React from 'react';
import styled from '@emotion/styled';
import { themeGet } from 'tamia';

type Props = {
	head: React.ReactNode;
	children: React.ReactNode;
};

const Container = styled.p`
	-webkit-font-smoothing: antialiased;
`;

const Head = styled.span`
	display: block;
	margin-left: -0.05ex;
	letter-spacing: 0.05ex;
	line-height: 1.2;
	font-size: ${themeGet('fontSizes.xxxl')};
`;

const Body = styled.span`
	display: block;
	line-height: 1.4;
	font-size: ${themeGet('fontSizes.xl')};
`;

export default function Lead({ head, children }: Props) {
	return (
		<Container>
			<Head>{head}</Head>
			<Body>{children}</Body>
		</Container>
	);
}
