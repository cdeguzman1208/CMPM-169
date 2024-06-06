Cromwell De Guzman, Beatrice Yu

Professor Tyler Coleman

CMPM 169: Creative Coding

7 June 2024

# Final Project

## Final Video
- Submit a link or video file for your final showcase. It must be under 2 minutes long.
- The video must show your project in a functioning state.
- You can also show the work done on it in a "making of" format, as well as including your artistic statement and postmortem, as long as its under 2 minutes.

https://youtu.be/Jiym7gpRUJ4?si=EOyr7zfeKwazJRyP

## Project Link
- A link to a publicly accessible version of your project, in a functioning state. This link can lead to a download file if necessary, but the files should not require additional software to run.

https://cdeguzman1208.github.io/CMPM-169/

## Postmortem
- A postmortem on your project. What worked out well? What didn't work out? What would you do differently?

The audio visualization works quite nicely. We have three preselected songs with lyrics preloaded into the project. The user can cycle between the songs to see the visualizations and lyrics to those songs. The user can also switch between two visualization modes, a spinning flower and a spinning flower with particles. The flower's size and the number of particles is dependent on the audio's FFT data. These visualizations also cycle through all of the hues in the rainbow. The user can also upload their own audio to see the visualization for their chosen audio.

We couldn't find a way to transcribe lyrics in real time. We tried Speech.js, but it only works for live speech and not prerecorded audio. So, we ended up including the lyrics with timestamps to our three preselected songs within the project. The user can still upload their own audio to see the visualizations, but the lyrics won't display.

Since having lyrics was something we originally wanted, we could have tried to continue looking for a way to transcribe lyrics in real time with p5.js or found a way to do it using a different software (TouchDesigner, Unity, etc.). We also tried playing around with a few different shapes for the visualization, but felt that the flower was the most visually satisfying for an audio visualizer. Even so, we could have included more visualization options for variety.

## Artistic Statement
- Why did you make this?

When we were brainstorming, one of us wanted to make an audio visualizer and the other wanted to make a lyric video generator. So, we decided to combine those two ideas into 'Lyric Loom'. The idea was to have an audio visualizer that would transcribe and display lyrics in real time. We were unable to find a way to transcribe the lyrics in real time, but we still included lyrics for our preselected songs that were transcribed beforehand. 

## Credits
- What resources did you use? Code, art, fonts, audio, any third party content should be provided in credits.

Audio: 
- Cat & Dog (English version) by TOMORROW X TOGETHER
- Mind by Skrillex & Diplo (feat. Kai)
- Fireflies by Owl City 

Code:
- Flower shape: https://editor.p5js.org/son/sketches/SkJJxG2Cm
- Particle Shooter originally generated by ChatGPT, edited and improved by Cromwell De Guzman

Other:
  - CapCut templates for video editing
