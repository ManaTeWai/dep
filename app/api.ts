export const API = {
	topPage: {
		find: process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		byAlias: process.env.NEXR_PUBLIC_DOMAIN + '/api/top-Page/byAlias'
	},
	product: {
		find: process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find'
	},
	review: {
		createDemo: process.env.NEXT_PUBLIC_DOMAIN + '/api/review/createDemo'
	}
};