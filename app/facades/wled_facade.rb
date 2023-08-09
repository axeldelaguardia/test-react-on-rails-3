class WledFacade
	attr_reader :on,
							:brightness,
							:transition,
							:preset,
							:playlist,
							:nightlight,
							:sync,
							:live_data_override,
							:main_segment

	def initialize(data)
		@on = data[:on]
		@brightness = data[:bri]
		@transition = data[:transition]
		@preset = data[:ps]
		@playlist = data[:pl]
		@nightlight = nightlight(data[:nl])
		@sync = sync(data[:udpn])
		@live_data_override = data[:lor]
		@main_segment = data[:mainseg]
	end

	def nightlight(data)
		{
			"on": data[:on],
			"duration": data[:dur],
			"mode": data[:mode],
			"target_brightness": data[:tbri],
			"remaining_time": data[:rem]
		}
	end

	def sync(data)
		{
			"send": data[:send],
			"receive": data[:recv]
		}
	end
end