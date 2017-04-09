# The Censor Ship

This is a small training application that can help you get to know the JavaScript ecosystem a bit better. The goal is to write a small function in JavaScript that can be integrated with the rest of a simple web application. So let's make sure the app runs on your computer and then take a look at how to write the missing function.

## Setup

I will go through these steps rather quickly because they are documented in more detail for the [onboarding project](https://github.com/mdumke/onboarding). Start by cloning the repository. In the terminal, go to a folder of your choice and type the clone-command:

```bash
git clone https://github.com/mdumke/censor-ship

# if you have your ssh-keys on github, use this instead:
git clone git@github.com:mdumke/censor-ship.git
```

You can immediately create a new branch where you put all your work so we can merge it via a pull request later. Just type:

```bash
git checkout -b 'implementing_censor'
```

The next step is also easy because you should have npm installed from last time, so all you need to do is *go into the project-folder* you just downloaded and type

```bash
npm install
```

This will download all the necessary dependencies to run the project. Once the download has finished, we can start the project. This time, the command to do so is

```
npm run dev-server
```

This will take a moment to compile some stuff and generate some terminal-output which is not so important right now. In the end, however, it should say something like `webpack: Compiled successfully`. What's more, in the beginning you sould see the message `Project is running at http://localhost:3000/`. If you see this, you're good to go. Leave the development-server running and open a browser window where you can navigate to the localhost-address: `http://localhost:3000/`. Now you should see a page that says 'The Censor Ship'.


## Exploring the app

Take a moment to play around with the app. For example, if you start typing into the Input-field, you should see the same text appear in the output-field. Now try to type some text that has the words in the center-field in it... Nothing happens. The words are not being exchanged or censored or anything. Well, it will be your challenge to fix this...

Let's now take a look at the code. Leave the server running in the background and leave the browser open, and now also open up a text-editor with the project's code. There are a couple of configuration files and some folders. If you are curious to see how the web-app is build you can take a look at the source-folder, especially `src/components` where you can find a few React-compnents that prepare the building blocks for the application. But this is not too important right now. Don't get distracted.

Instead, open up `src/utils/censor.js`. In here, there's a whole lot of comment and a tiny function that takes some text as input and outputs the censored text. In a way, we have reached the heart of our application. Without this function, without anybody actually doing the censoring, the censor-ship will sink...


## Taking a closer look at censor.js

Before we get serious about implementing the censor-functionality, let's try to understand the function's place in the app. I assume you still have the dev-server running, so now we can make changes to the code and see their effects immediately. To start somewhere, replace the return statement on line 37 with this code:

```js
return 'This is just dummy text'
```

Go ahead and save the file. This will trigger the server to update the project and the browser to reload the page (if this does not happen for some reason, reload the page manually for now). If you now type something into the input-field, the output will always be the same text you just wrote.

Interesting, so it seems that whatever the censor outputs gets printed to the screen. Let's try something else and replace the line of code you just wrote with this:

```js
return text.toUpperCase()
```

This will return a transformed version of the input-text where each letter is uppercased. You can also be bold and try:

```js
return forbiddenWords
```

This returns the list of forbiddenWords, or better, it returns an Array of strings that is taken from the input field in the center. Try to change some of the words in the textbox and see the effect.


## Implementing the censor-function

Now is the time to build out the censor-functionality. What this function is supposed to be doing is documented in the function-specification I put on top of the function declaration. Read this carefully and take a look at the examples.

You could just go ahead now and try this and that and see if you could get the function to do what you want, and I definitely encourage a bit of experimentation. There is a *lot* of documentation out there for JavaScript String- and Array-functions and it's a good idea to just try some of this out and develop a strategy for how to approach this problem. For example, you could take a look at the MDN docs for [String.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) and see what happens if you split the string on spaces.

While experimentation is a good way to gain some understanding of the problem at hand, in the end you will have to test your code in a systematic manner to make sure everything works as expected. This is where automated testing comes in. I think it is important to get used to working with tests early on and so I have written some tests for the censor-function that you can use. Let's see how.

Open a new terminal and navigate to the project folder. In here, you can run the test-suite for the censor-function if you type

```bash
npm test
```

If everything goes well, you see a lot of red output which means most of the tests are failing. Take a closer look at the first tests that is failing and make sure you understand the output. This is really not magic. I have written the tests in a file called `test/censor-test.js`. Take a look, if you want. In here are just a few examples where I specified the input, the forbidden words, and the output I would expect.

In general, I have tried to cover the different tasks our censor-function should do in a systematic manner. It is possible I overlooked some things, so feel free to add your own tests here if you find scenarios that I didn't think of. If you save the file and run `npm test` again, your tests will run as well.

**Tip**: There are 10 tests or so which can be a lot in the beginning. A good strategy could be to comment out all the tests except for the first one or two and run the test suite. Then focus on writing only the code that is necessary to make those one or two tests pass. Once they are green, uncomment the next test, write the respective code, and so on.


## Cleanup

I think this is all you need to know in order to get started. Explore the problem, play around and experiment a bit and once you feel a bit more comfortable with how things work, use the automated tests to make sure you are developing in a systematic manner.

As a bonus-problem, so to speak, you can do a little cleanup. There are lots of valid ways to write JavaScript code and as long as it runs, it's technically correct. However, it's a good idea to get used to consisent formatting. There is a way of formatting JavaScript code that gets more and more common in the JavaScript community and I have included a tool that can check your code against this standard. If you want to see how you're doing, run:

```bash
npm run format-check
```

This command will generate error-messages if your code does not conform to the rules of [standard.js](https://standardjs.com/). It takes a bit getting used to but in the end this will make you a much better (because much more consistent) coder.

Enjoy!
