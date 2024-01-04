require 'nokogiri'

module ReadingTime

	def count_words(html)
		words(html)
	end

	def reading_time(html)
		(count_words(html) / 140.0).ceil
	end

	private

	def text_nodes(root)
		ignored_tags = %w[ area audio canvas code embed footer form img map math nav object pre script svg table track video ]

		texts = 0
		root.children.each { |node|
			if node.text?
		    	text_array = node.text.unpack("U*")
		    	text_array.each { |c|
		        	texts = texts + 1
		    	}
			elsif not ignored_tags.include? node.name
				texts = texts + text_nodes(node)
			end
		}
		texts
	end

	def words(html)
		fragment = Nokogiri::HTML.fragment html
		text_nodes(fragment)
	end

end 

Liquid::Template.register_filter(ReadingTime)
