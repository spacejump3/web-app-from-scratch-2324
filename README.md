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

-   Develop function so I can easily add movies to the url
-   Visually design page
-   First steps in creating the carrousel

#### Sources day 1:

-   https://www.youtube.com/watch?v=ly4Dqz2Mz8s
-   https://www.slidemembers.com/en_US/view/PPT-Templates/movie-film-theme-slide-ppt-18270

### Day 2 - Continuing, styling, JSON

Today was mostly about continuing where we left off yesterday. I mostly worked on the styling of the website and tried to make it responsive. I had to definitely get used to some stuff again. Like simple aligning and using flexbox and such. So I'm a bit slower than usual, but I am getting there. I haven't been able to get the API data to display on my page yet. We did have a small workshop which I hoped would expand on it, but it was sadly a bit too beginner friendly so my issue couldn't be addressed today. In the meantime here's a screenshot of my current website:

![image](https://github.com/spacejump3/web-app-from-scratch-2324/assets/112871518/7447dd6c-1935-4864-9020-78f435e32e51)

You can't see it in the image, but I made the perferations animate so it looks like the entire filmstrip is rolling. So pretty nice progress, but I would like to really start displaying my API soon.

#### Checklist

Done:

-   Visually design page ✅

To do:

-   Develop function so I can easily add movies to the url
-   Create carrousel
-   [New] Make movies clickable for more info

### Day 3 - Struggling with API's and JavaScript...

#### API image background

```js
async function getData() {
    const response = await fetch('http://www.omdbapi.com/?apikey=54a87690&t=memento');
    const data = await response.json();

    console.log(data);

    title.innerHTML = data.Title;
    const posterData = data.Poster;
    poster.style.backgroundImage = 'url(posterData)';
}
```

Here I tried to get the poster from the API as a background inside the list item. But the image wouldn't show up and the console gave me this error:

![alt text](image.png)

After trying around with Stef Keuken, we couldn't figure it out and resorted to asking chatgpt what the problem was. This is how chatgpt responded:

_It seems like you're trying to set the background image of an element with the class name "posterPlaceholder" using the URL retrieved from the OMDB API. However, the issue lies in how you're setting the background image URL. You're setting it to "posterData", which is a string literal and not the variable containing the actual URL. To fix this, you should concatenate the variable posterData into the URL string properly._

Turns out it's really simple. Since it's a background image I HAVE to insert an actual URL. To do that I need to use a template literal to actually use the URL instead of the string like this:

```js
poster.style.backgroundImage = `url(${posterData})`;
```

To make it a bit cleaner, I can remove the variable and just add it directly like this:

```js
poster.style.backgroundImage = `url(${data.Poster})`;
```

Now it's working as intended!

#### Expanding image toggle using JavaScript

<!-- add more intro and text everywhere in this chapter please -->

I wanted to make a function which will expand the poster image if I click on it, and go back to it's original state if I click on it again. I tried to make it work like this at first:

```js
poster.addEventListener('click', function increaseMinWidth() {
    poster.classList.add('extendedPoster');
    poster.classList.remove('regularPoster');
});

poster.addEventListener('click', function decreaseMinWidth() {
    poster.classList.add('regularPoster');
    poster.classList.remove('extendedPoster');
});
```

The idea is that I add a class called `extendedPoster` when I click on it. This class has a greater width so it will expand. I also remove the original class. When I click on it again I want to do the same but opposite. This sadly doesn't work. The reason is because it only has a single class name initially called `regularPoster`. After I click on it, it removes that class so when I click on it again it isn't able to recognize `regularPoster` because it is, well, gone. If I use one classname as my main class, and add another for the extended and regular versions, I can use it method properly. Here you can see how I did this:

Change classname

```html
<li class="moviePoster regularPoster"></li>
```

Change css:

```css
.moviePoster {
    height: 100%;
    margin: 0 1em 0 1em;
    background-size: cover;
    border-radius: 1.2em;

    transition: 0.2s;
}

.regularPoster {
    min-width: 21em;
}

.extendedPoster {
    min-width: 31em;
}
```

Change js

```js
poster.addEventListener('click', function changeMinWidth() {
    if (poster.classList.contains('regularPoster') == true) {
        poster.classList.add('extendedPoster');
        poster.classList.remove('regularPoster');
    } else {
        poster.classList.add('regularPoster');
        poster.classList.remove('extendedPoster');
    }
});
```

#### Checklist

Done:

-   Visually design page ✅
-   Make movies clickable for more info ✅

To do:

-   Develop function so I can easily add movies to the url
-   Create carrousel
-   [new] Make page more responsive

#### Sources

-   https://dmitripavlutin.com/fetch-with-json/
-   https://stackoverflow.com/questions/21496905/how-to-change-the-background-image-of-div-using-javascript
-   Stef Keuken

### Day 4 - More movie's and more struggles

I've finally managed to add more movies! The way I did it, is to create an array of titles that I want to add. Then I can dynamically add those titles to the fetch link. I make sure to wait until all the fetches are done via a promise and when that's done, I display it on the page. I've had to do a lot of moving around in terms of functions, but at the end I got there. I do still have one issue however: whenever I click on a movie it expands, but every text shows simultaneously. In the screenshots you can see what I mean:

![image](https://github.com/spacejump3/web-app-from-scratch-2324/assets/112871518/4f5fee7c-d8a1-4955-b5fc-badb3fe8334b)

![image](https://github.com/spacejump3/web-app-from-scratch-2324/assets/112871518/5e5696de-6bd9-4b33-a0df-40cee8ff7297)

It is almost the end of the week so I would like to be done so I can work on the teamwebsite. So hopefully I will be able to fix this by tomorrow.

#### Clean code

When trying to work on displaying multiple movies, Marten helped me a bit. He did tell me that some code can be made shorter, in particular the expand poster function. I wasn't able to make it cleaner today. So the plan is to make sure the app works correctly with my current code, and when that's done I will try to clean it as much as possible afterwards.

#### Checklist

Done:

-   Visually design page ✅
-   Develop function so I can easily add movies to the url ✅
-   Make movies clickable for more info ✅
-   Make page more responsive ✅

To do:

-   [new] fix movie info issues
-   Create carrousel

### Day 5 - Finishing up

#### Checklist

Done:

-   Visually design page ✅
-   Develop function so I can easily add movies to the url ✅
-   Make movies clickable for more info ✅
-   Make page more responsive ✅
-   fix movie info issues ✅

To do:

-   Create carrousel
-   [new] create loading state

#### Sources:

-   https://dev.to/vaishnavs/displaying-loading-animation-on-fetch-api-calls-1e5m
