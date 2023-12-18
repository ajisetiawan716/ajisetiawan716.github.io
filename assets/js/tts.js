Cover image for Let Your Jekyll Blog Speak for Itself: Implementing Speech Synthesis
Adem Kouki
Adem Kouki
Posted on 8 Feb

Let Your Jekyll Blog Speak for Itself: Implementing Speech Synthesis
#
jekyll
#
tutorial
In this blog post, I will show you how to add Speech Synthesis to your Jekyll blog. This feature is available in all modern browsers and is a great way to add accessibility to your blog. It is also a great way to add a little bit of fun to your blog. I will show you how to add a button to your blog that will read the content of the blog post aloud.

What is Speech Synthesis?
Speech Synthesis is a web API that allows you to convert text to speech. You can read more about it here: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis

How to add Speech Synthesis to your Jekyll blog
To add Speech Synthesis to your Jekyll blog, you will need create a new file in your _includes folder called audio.html. This file will contain the HTML and JavaScript that will add the Speech Synthesis feature to your blog.

HTML
The HTML for the Speech Synthesis feature is pretty simple. You will need a button that will trigger the speech synthesis.
<div class="audio-block">
  <p style="text-align: center;">🔊 PLAY THIS ARTICLE</p>
  <div class="audio-btn"></div>
</div>
JavaScript
You will need to add a click event listener to the button that will trigger the speech synthesis. You will also need to add a beforeunload event listener to the window that will cancel the speech synthesis when the user navigates away from the page.
// get the button
const audioBtn = document.querySelector(".audio-block");
// set the default state of the button
let isPlaying = false;
// get the default title of the tab (so we can change it later)
let defaultTabTitle = document.title;
// check if speechSynthesis is available in the browser
const isSynthAvailable = window.speechSynthesis !== undefined;
// if speechSynthesis is not available, hide the button
if (!isSynthAvailable) {
  audioBtn.style.display = "none";
}
// speak the text passed in as a parameter, and call the onend function when the speech is finished
function speak(text, onend) {
  window.speechSynthesis.cancel();
  var ssu = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(ssu);
  function _wait() {
    if (!window.speechSynthesis.speaking) {
      onend();
      return;
    }
    window.setTimeout(_wait, 200);
  }
  _wait();
}

// get the text from the blog post
function getBlogText() {
  const text = document.querySelectorAll(".content > *");
  let textArray = [];
  text.forEach((elem) => {
    textArray.push(elem.innerText);
  });
  // remove "Copy" from the start of the text
  textArray.forEach((elem, index) => {
    // if the text starts with "Copy", remove it
    if (elem.startsWith("Copy")) textArray[index] = elem.replace("Copy\n", "");
  });
  return textArray.join("\n");
}
// add click event listener to the button
audioBtn.addEventListener("click", () => {
  isPlaying = !isPlaying;
  if (isPlaying) {
    let text = getBlogText();
    speak(text, () => {
      isPlaying = false;
      audioBtn.classList.remove("active");
    });
  } else {
    window.speechSynthesis.cancel();
  }
  audioBtn.classList.toggle("active");
});

// stop audio when user navigates away from the page
window.addEventListener("beforeunload", () => {
  window.speechSynthesis.cancel();
});

// change title of the tab when audio is playing (to show that audio is playing)
window.setInterval(() => {
  if (isPlaying) {
    document.title = "🔊 Playing... " + defaultTabTitle;
  } else {
    document.title = defaultTabTitle;
  }
}, 500);
I made this sandbox to show you how the Speech Synthesis feature works. You can play around with the code and see how it works. You can also see how the Speech Synthesis feature works on my blog.

Conclusion
Without using any third-party APIs, you can add Speech Synthesis to your Jekyll blog. This is a great way to add accessibility to your blog and also a great way to add a little bit of fun to your blog. I hope you enjoyed this tutorial and learned something new. If you have any questions, feel free to leave a comment below.

Top comments (0)
Subscribe
pic
Add to the discussion
Code of Conduct • Report abuse
profile
Pieces.app
PROMOTED

The Most Contextual AI Development Assistant
Pieces.app image

Our centralized storage agent works on-device, unifying various developer tools to proactively capture and enrich useful materials, streamline collaboration, and solve complex problems through a contextual understanding of your unique workflow.

👥 Ideal for solo developers, teams, and cross-company projects

Learn more

Read next
matib profile image
Alembic with Async SQLAlchemy
Mati B - Dec 12

chand1012 profile image
Llamafile: AI Integration & Deployment Made Easy
Chandler - Dec 13

hieuit96bk profile image
Spring Boot Template Project Introduction
Henry Pham - Dec 13

wagnernegrao profile image
How to create Annotation in SpringBoot Java? [ENG/PT-BR]
Wagner Negrão 👨‍🔧 - Nov 20


Adem Kouki
Follow
Greetings 😉, I’m Adem. I’m a student living in Bizerte, Tunisia. I am a fan of technology, programming, and web develop
LOCATION
Tunisia
WORK
Web Developer
JOINED
8 Apr 2020
More from Adem Kouki
Adding cmd-k for Quick Navigation
#javascript #jekyll #tutorial
Export AG-Grid to Excel (without Enterprise version)
#typescript #angular #tutorial
UnoCSS: The instant on-demand Atomic CSS engine
#css #tutorial
profile
Pieces.app
PROMOTED

Revolutionizing the Developer Workflow: Our Journey with Pieces
Pieces.app image

Imagine a tool that integrates seamlessly across your entire development workflow - from browsing solutions online to writing code in your IDE, and even during team collaborations. Pieces is that tool (or tool-between-tools).

Read full post

// get the button
const audioBtn = document.querySelector(".audio-block");
// set the default state of the button
let isPlaying = false;
// get the default title of the tab (so we can change it later)
let defaultTabTitle = document.title;
// check if speechSynthesis is available in the browser
const isSynthAvailable = window.speechSynthesis !== undefined;
// if speechSynthesis is not available, hide the button
if (!isSynthAvailable) {
  audioBtn.style.display = "none";
}
// speak the text passed in as a parameter, and call the onend function when the speech is finished
function speak(text, onend) {
  window.speechSynthesis.cancel();
  var ssu = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(ssu);
  function _wait() {
    if (!window.speechSynthesis.speaking) {
      onend();
      return;
    }
    window.setTimeout(_wait, 200);
  }
  _wait();
}

// get the text from the blog post
function getBlogText() {
  const text = document.querySelectorAll(".content > *");
  let textArray = [];
  text.forEach((elem) => {
    textArray.push(elem.innerText);
  });
  // remove "Copy" from the start of the text
  textArray.forEach((elem, index) => {
    // if the text starts with "Copy", remove it
    if (elem.startsWith("Copy")) textArray[index] = elem.replace("Copy\n", "");
  });
  return textArray.join("\n");
}
// add click event listener to the button
audioBtn.addEventListener("click", () => {
  isPlaying = !isPlaying;
  if (isPlaying) {
    let text = getBlogText();
    speak(text, () => {
      isPlaying = false;
      audioBtn.classList.remove("active");
    });
  } else {
    window.speechSynthesis.cancel();
  }
  audioBtn.classList.toggle("active");
});

// stop audio when user navigates away from the page
window.addEventListener("beforeunload", () => {
  window.speechSynthesis.cancel();
});

// change title of the tab when audio is playing (to show that audio is playing)
window.setInterval(() => {
  if (isPlaying) {
    document.title = "🔊 Playing... " + defaultTabTitle;
  } else {
    document.title = defaultTabTitle;
  }
}, 500);
