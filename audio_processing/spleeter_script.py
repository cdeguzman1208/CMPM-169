from spleeter.separator import Separator

# Initialize Spleeter with 2 stems (vocals and accompaniment)
separator = Separator('spleeter:2stems')

# Separate the audio into vocal and instrumental components
separator.separate_to_file('input_song.mp3', 'output')