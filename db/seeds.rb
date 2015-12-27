# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



genres_list = [
  [ "Rock" ],
  [ "Metal"],
  [ "Pop" ],
  [ "RnB"],
  [ "Jazz" ],
  [ "Fusion" ],
  [ "Soundtrack"]

]

genres_list.each do |genre|
  instance_variable_set "@#{genre[0].tableize.singularize.singularize.gsub(' ','_')}".to_sym, Genre.create( title: genre[0] )
end



artists_list = [
  ["King Diamond","Denmark",@metal ],
  ["Annihilator","Canada", @metal ],
  ["Kip Winger","USA", @rock ],
  ["Kate Perry", "USA", @pop ],
  ["Fleur East","UK", @pop ],
  ["Snarky Puppy","USA", @fusion ],
  ["Brian Tyler", "USA",@soundtrack],
  ["Harry Gregson-Williams","UK", @soundtrack],
  ["Dave Brubeck ","USA", @jazz ],
  ["Snarky Puppy","USA", @fusion ]

]


artists_list.each do |artist|
  instance_variable_set "@#{artist[0].tableize.singularize.singularize.gsub(' ','_')}".to_sym, Artist.create( title: artist[0],country: artist[1], genre: artist[2] )
end



 albums_list=[

  ["Abigail", 1987, @king_diamond ],
  ["Them", 1988, @king_diamond ],
  ["Conspiracy", 1989, @king_diamond ],
  ["The Eye", 1990, @king_diamond ],

  ["One of the Boys", 2008, @kate_perry ],
  ["Teenage Dream", 2010, @kate_perry ],
  ["Prism", 2013, @kate_perry ],

  ["Furious 7", 2015, @brian_tyler ],
  ["Avengers Age of Ultron", 2015, @brian_tyler ],
  ["Iron Man 3", 2013, @brian_tyler ],
  ["The Expendables 3", 2014, @brian_tyler ],

  ["Love, Sax and Flashbacks", 2015, @fleur_east ],

  ["We Like It Here", 2014, @snarky_puppy ],
  ["Family Dinner - Volume 2 ",2016, @snarky_puppy ],
  ["Empire Central", 2016, @snarky_puppy ],
  ["We Like It Here", 2014, @snarky_puppy ]

]

albums_list.each do |album|
  instance_variable_set "@#{album[0].tableize.singularize.singularize.gsub(' ','_').gsub(',','_')}".to_sym, Album.create( title: album[0], year: album[1], artist: album[2] )
end

tracks_list= [

  ["Funeral", '1:30', @abigail ],
  ["Arrival", '5:26', @abigail ],
  ["A Mansion in Darkness", '4:34', @abigail ],
  ["The Family Ghost", '4:06', @abigail ],
  ["The 7th Day of July 1777", '4:50', @abigail ],
  ["Omens", '3:56', @abigail ],
  ["The Possession", '3:26', @abigail ],
  ["Abigail", '4:50', @abigail ],
  ["Black Horsemen", '4:50', @abigail ]
]

tracks_list.each do |track|
  instance_variable_set "@#{track[0].tableize.singularize.singularize.gsub(' ','_')}".to_sym, Track.create( title: track[0], time: track[1], album: track[2] )
end


users_list= [

  ["drumaddict", 'kabasakalis@gmail.com', '123456', 'abc' ],
  ["pitendo", 'pitendo@gmail.com', '123456', 'abc' ],

]


users_list.each do |user|
  instance_variable_set "@#{user[0].tableize.singularize.singularize.gsub(' ','_')}".to_sym, User.create( username: user[0], email: user[1], password: user[2], auth_token: user[3] )
end




playlist=Playlist.new(
  title: 'Spiros Playlist'
)

playlist2=Playlist.new(
  title: 'Spiros Playlist2'
)

playlist.user=@drumaddict
playlist.track=@funeral
playlist.save

playlist2.user=@drumaddict
playlist2.album=@the_eye
playlist2.save























