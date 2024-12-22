# terminal
```
npm init
```
## package name (like firstbackend)
## enter button
##  description (like a first backend application)
## enter

## in package.json file in script directory
```
"start": "node index.js"
```

## now terminal command
```
npm start
or 
npm run start
```

## install express
```
npm install express
```

# now open in browser express


```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```
# deployment
### deploy your project into github
### serch in browser git ssh setup 
# install ssh 
```
mkdir -p ~/.ssh
cd ~/.ssh
ssh-keygen -t rsa -b 4096 -C "youremail@gmail.com"
eval $(ssh-agent -s)
ssh-add 
```
## in this .ssh folder a file (something.pub) openit on text editor
copy it and paste github ssh key i settings

# after
## in vscode into your project directory
## create a file named .gitignore
## in .gitignore

which directory you do not want to overwrite or ignore in the readme file just type this directory name


### vs terminal
```
git init
git add .
git commit -m "first commit"

```



## sencitive data
## .env package
suppose your client is not free on this port then you can configure it yourself
```
npm install dotenv
```
## create a new environment file name as (.env)
## in this file 
```
PORT:8080
```
## now in index.js import this environment file
```
require ('dotenv').config();
...
...
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})

```

## 

# hot loading
## 
```

```
