class Request {
	constructor(BaseUrl) {
	    this.BaseUrl = BaseUrl
	}
	request(options) {
		const {url} = options
		return new Promise((resolve, reject) => {
			uni.request({
				...options,
				url: this.BaseUrl + url,
				success: (res) => resolve(res),
				fail: (err) => reject((err))
			})
		})
	}
	get(options) {
		return this.request({method: 'GET', ...options})
	}
	post(options) {
		return this.request({method: 'POST', ...options})
	}
}
export const myRequest = new Request('https://163api.qijieya.cn')