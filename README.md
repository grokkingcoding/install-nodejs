# About

**Visit www.grokkingcoding.io for more coding tips and tricks!**

- To run the index.js file run:

```
node index.js
```

- To stop running the index.js file press on your keyboard:

```
ctrl + c
```

- This is a demo on how to install nodejs on your local machine for Mac and Linux users.

- An example on how to setup a http server in nodejs is shown in the index.js file

# Useful Commands

- To find out what the root path on your local machine is. Open your terminal and run:

```
realpath ~
```

You should see the following output:

```
/Users/the-username-on-your-local-machine
```

# Installing NodeJS

## Mac Users

1. Open your terminal (shortcut: command + space bar, then type 'terminal' and hit enter)

2. Then run this:

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

- Installing homebrew will take a while
- If you want to uninstall homebrew run the following:

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"
```

3. Make sure you have brew installed on mac, then run:

```
which brew
```

- You hsould something like this in your terminal output:

```
/usr/local/bin/brew
```

- This will give you the path to where homebrew has been installed on your local machine

4. You need to update homebrew, so run:

```
brew update
```

5. Install nodejs by running:

```
brew install node
```

- THis will take a while.

6. Make sure nodejs is installed on local machine by running:

```
node -v
```

```
npm -v
```

- Note: npx is a package runner that comes bundled with npm. So you could now run the folliwng command to start a ReactJS application:

```
npx create-react-app my-app
cd my-app
npm start
```

- So you could also now run the folliwng command to start a NextJS application:

```
npx create-next-app name-of-app
cd name-of-app
npm run dev
```

7. You can update nodejs by running:

```
brew upgrade node
```

8. That's it! You have nodejs running on your local machine!

- If you want to uninstall nodejs, run:

```
/usr/local/bin/brew
```

**Visit www.grokkingcoding.io for more short tutorials like this one!**

## Linux Users

1. curl https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

2. Dot source the files to ensure that variables are available within the current shell so that you have access to the files when you open up your teminal.

3. So run: realpath ~

4. copy the path ie your root path on your local machine

5. Then run the following commands. Make sure you include the dot at the front of the commands.

```
. /your-root-path/.bashrc
```

```
. /your-root-path/.nvm/nvm.sh
```

6. install NVM, NPM, Node.JS

7. nvm alias default v12.7.0

8. nvm install v12.7.0

9. nvm use v12.7.0

10. That's it you should have nodejs installed on your local linux machine.

**Visit www.grokkingcoding.io to practise the most common programming questions!**
