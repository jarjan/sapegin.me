import Script from 'tamia/src/components/Script';
import Style from 'tamia/src/components/Style';
import '../styles/styles.pcss';

export default function(props, children, { pageTitle, scripts, option }) {
	return (
		<html lang={option('lang')}>
			<head>
				<meta charset="utf-8" />
				<title>{pageTitle}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="format-detection" content="telephone=no" />
				<meta name="description" content={option('description')} />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={option('title')} />
				<meta property="og:url" content={option('url')} />
				<meta property="og:site_name" content={option('title')} />
				<meta property="og:description" content={option('description')} />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content={option('title')} />
				<meta name="twitter:description" content={option('description')} />
				<meta name="twitter:creator" content="@sapegin" />
				<Style />
				<Script entry="counters" inline />
			</head>
			<body>
				{children}
				{scripts && scripts.map(script => (
					<Script entry={script} inline />
				))}
			</body>
		</html>
	);
}
