import Prismic from '@prismicio/client'

const api = 'https://poweredbypen.cdn.prismic.io/api/v2'

export const getHome = async (page, debug) => {
	const response = await  Prismic.client(api, {})
	const results = await response.getSingle(page)
	debug && console.log(results.data)
	return results.data
}

export const getPage = async (page, debug) => {
	const response = await  Prismic.client(api, {})
	const results = await response.query(Prismic.Predicates.at('my.page.title', page))
	debug && console.log(results)
	return results
}

export const getProjects = async (docType, debug) => {
	const response = await  Prismic.client(api, {})
	const results = await response.query(
		Prismic.Predicates.at('document.type', docType),
		{ pageSize : 100 }
	)
	debug && console.log(results)
	return results
}

export const getSingleProject = async (page, debug) => {
	const response = await  Prismic.client(api, {})
	const results = await response.query(Prismic.Predicates.at('my.project.uid', page))
	debug && console.log(results)
	return results
}
