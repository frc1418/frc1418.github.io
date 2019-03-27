require 'tbarb'
require 'yaml'

tba = TBA.new('AykWePEZPKTjZxW6y7MbiTEpTfUlWrszcX5QBpIDUEZPBCJydltvhfd88MsBXxdS')
year = DateTime.now.year
awardMap = {}
10.times do |count|
  awards = tba.team_awards(1418, year)
  awardList = []
  awards.each do |award|
    awardName = award['name'].split(' Award ')[0]
    events = tba.team_events(1418, year, true)
    eventName = ''
    events.each do |event|
      if event['key'] == award['event_key']
        eventName = event['city']
      end
    end
    if eventName == ''
      next
    end
    awardName = eventName + ' ' + awardName
    awardList.push({'award'=> awardName})
  end
  awardMap[year] = awardList
  year -= 1
end
File.open("_data/banners.yml", "w") { |file| file.write(awardMap.to_yaml)}