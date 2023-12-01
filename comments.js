// Create web server application
// Load the 'express' module
const express = require('express');
const app = express();

// Load the 'mongoose' module
const mongoose = require('mongoose');

// Load the 'body-parser' module
const bodyParser = require('body-parser');

// Load the 'comments' controller
const comments = require('./controllers/comments.js');

// Load the 'comments' controller
const users = require('./controllers/users.js');

// Load the 'comments' controller
const login = require('./controllers/login.js');

// Load the 'comments' controller
const signup = require('./controllers/signup.js');

// Load the 'comments' controller
const logout = require('./controllers/logout.js');

// Load the 'comments' controller
const newcomment = require('./controllers/newcomment.js');

// Load the 'comments' controller
const deletecomment = require('./controllers/deletecomment.js');

// Load the 'comments' controller
const editcomment = require('./controllers/editcomment.js');

// Load the 'comments' controller
const newreply = require('./controllers/newreply.js');

// Load the 'comments' controller
const deletereply = require('./controllers/deletereply.js');

// Load the 'comments' controller
const editreply = require('./controllers/editreply.js');

// Load the 'comments' controller
const search = require('./controllers/search.js');

// Load the 'comments' controller
const upvote = require('./controllers/upvote.js');

// Load the 'comments' controller
const downvote = require('./controllers/downvote.js');

// Load the 'comments' controller
const comment = require('./controllers/comment.js');

// Load the 'comments' controller
const reply = require('./controllers/reply.js');

// Load the 'comments' controller
const user = require('./controllers/user.js');

// Load the 'comments' controller
const profile = require('./controllers/profile.js');

// Load the 'comments' controller
const deleteuser = require('./controllers/deleteuser.js');

// Load the 'comments' controller
const edituser = require('./controllers/edituser.js');

// Load the 'comments' controller
const editpassword = require('./controllers/editpassword.js');

// Load the 'comments' controller
const editavatar = require('./controllers/editavatar.js');

// Load the 'comments' controller
const editbio = require('./controllers/editbio.js');

// Load the 'comments' controller
const editusername = require('./controllers/editusername.js');

// Load the 'comments