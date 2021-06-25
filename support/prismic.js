import Prismic from '@prismicio/client'

const api = 'https://poweredbypen.cdn.prismic.io/api/v2'

export const getPage = async (id) => {
	const response = await  Prismic.client(api, {})
	const results = await response.query(Prismic.Predicates.at('document.id', id))
	return results
}

export const getProjects = async (docType) => {
	const response = await  Prismic.client(api, {})
	const results = await response.query(
		Prismic.Predicates.at('document.type', docType),
		{ pageSize : 100 }
	)
	return results
}

export const getSingleProject = async (page) => {
	const response = await  Prismic.client(api, {})
	const results = await response.query(Prismic.Predicates.at('my.project.uid', page))
	return results
}
