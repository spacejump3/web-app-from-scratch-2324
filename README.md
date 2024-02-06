# Web App From Scratch @cmda-minor-web 2023 - 2024

In this readme file you can find everything you need to know about this webapp. More intro text add later....

## How to install

Install guide (don't know if needed)
## Process report

### Day 1 - Kickoff
On the first day we made our groups and started brainstorming about ideas. Bottom line, we're gonna make a website about our hobbies. Each individual page will be about that persons interest. The data we are gonna be sending over is most likely gonna be the name, profile picture, description and favorite animal of each team member. For my personal website I will make a page about my favorite movies. I will use the [OMDb API](https://www.omdbapi.com/">OMDb) to get the movies I want with all the data I need (movie name, poster, director, synopsis, IMDb rating etc.). For the micro-interaction I'm interested in making a carrousel with the movie posters. I wanna do this because I'm probably gonna have a bunch of movies that I wanna put on the page, so having a carrousel will be a nice way to display them all without it feeling crowded. I also want to be able to click on the poster which would then expanded to show some of the movie information (synopsis, director, rating etc.). We of course only HAVE to make one interaction, so I will put priority on just the carrousel, but I will try to make both if I can.

Here are some of the first sketches I made of my website:

<img width="400" src="https://github.com/spacejump3/web-app-from-scratch-2324/assets/112871518/36ed8ac6-cc78-4f4a-befb-a9814d323e51">
<img width="400" src="https://github.com/spacejump3/web-app-from-scratch-2324/assets/112871518/9934cefc-83dc-4d0e-b527-727711a68308">
<img width="400" src="https://github.com/spacejump3/web-app-from-scratch-2324/assets/112871518/0fa96125-de1a-47d5-bd82-05b532d818a0">
<img width="400" src="https://github.com/spacejump3/web-app-from-scratch-2324/assets/112871518/41665abb-75a9-456e-ab4e-a4f08205982d">

It's probably super unclear what any of these sketches mean, but the first two are sketches of the squad website and the last two are of my personal website. In the final sketch particularly I came up with a design which incorporates a film strip! I decided to expand on it a bit and made this quick Figma mockup:

<img width="400" src="https://github.com/spacejump3/web-app-from-scratch-2324/assets/112871518/3a26ac74-2ea3-4c9a-9dca-2503541a1ea8">
<img width="400" src="https://github.com/spacejump3/web-app-from-scratch-2324/assets/112871518/5a3cce3f-0006-4fa1-9530-dc0d432dbed4">

So you can scroll in this carrousel and click on a poster to see more information. I might drop the gradient because it looks kinda weird but we'll see...

Finally, I managed to create an API call so that's working nicely as well!

<img width="400" src="https://github.com/spacejump3/web-app-from-scratch-2324/assets/112871518/f41a2386-7869-4b9b-9609-73e6761847af">

I do use an API key but I'm not sure how to hide it on GitHub with vanilla JavaScript... So for now I'm not pushing the API key to GitHub, but I'll need to work out if that's fine or not.

#### Checklist:
- Develop function so I can easily add movies to the url
- Visually design page
- First steps in creating the carrousel

#### Sources day 1:
- https://www.youtube.com/watch?v=ly4Dqz2Mz8s
- https://www.slidemembers.com/en_US/view/PPT-Templates/movie-film-theme-slide-ppt-18270

### Day 2 - Continuing, styling, JSON
Today was mostly about continuing where we left off yesterday. I mostly worked on the styling of the website and tried to make it responsive. I had to definitely get used to some stuff again. Like simple aligning and using flexbox and such. So I'm a bit slower than usual, but I am getting there. I haven't been able to get the API data to display on my page yet. We did have a small workshop which I hoped would expand on it, but it was sadly a bit too beginner friendly so my issue couldn't be talked about. 

#### Checklist
- Develop function so I can easily add movies to the url
- Create carrousel

#### sources day 2:

