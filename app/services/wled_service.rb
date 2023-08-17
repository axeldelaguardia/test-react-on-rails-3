class WledService

	def get_state(ip)
		response = connection(ip).get('state')
		JSON.parse(response.body, symbolize_names: true)
	end

	def turn_off(ip)
		response = connection(ip).post('state') do |req|
			req.headers['Content-Type'] = 'application/json'
			req.body = { on: 't', v: true }.to_json
		end
	end

	private
	def connection(ip)
		Faraday.new(url: "http://#{ip}/json/")
	end
end