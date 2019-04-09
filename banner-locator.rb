require 'tbarb'
require 'yaml'

tba = TBA.new('AykWePEZPKTjZxW6y7MbiTEpTfUlWrszcX5QBpIDUEZPBCJydltvhfd88MsBXxdS')
year = DateTime.now.year
award_map = {}
10.times do |count|
  awards = tba.team_awards(1418, year)
  award_list = []
  awards.each do |award|
    award_name = award['name'].split(' Award ')[0]
    events = tba.team_events(1418, year, true)
    event_name = ''
    events.each do |event|
      if event['key'] == award['event_key']
        event_name = event['city']
      end
    end
    if event_name == ''
      next
    end
    award_name = event_name + ' ' + award_name
    award_list.push(award_name)
  end
  award_map[year] = award_list
  year -= 1
end
File.open("_data/banners.yml", "w") { |file| file.write(award_map.to_yaml)}