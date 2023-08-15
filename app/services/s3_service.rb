# class S3Service
# 	def upload_image(user_id, image)
# 		image = File.open(image)
# 		response = connection.put(user_id.to_s) do |req|
# 			req['Content-Type'] = 'image/jpeg'
# 			req['Content-Length'] = image.size.to_s
# 			req.body = Faraday::Multipart::FilePart.new(image, 'image/jpeg')
# 		end
# 	end

# 	def get_image(user_id)
# 		response = connection.get(user_id.to_s)
# 		Base64.strict_encode64(response.body)
# 	end

# 	private
# 	def connection
# 		Faraday.new(url: 'https://nakopyv5pg.execute-api.us-east-2.amazonaws.com/v1/wled-bucket/') do |f|
# 			f.request :multipart
# 		end
# 	end
# end