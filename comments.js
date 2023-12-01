// create web server

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const comments = require('./comments');
const querystring = require('querystring');

const server = http.createServer(function (req, res) {
  // parse url
  const parseUrl = url.parse(req.url, true);
  // get pathname
  const pathname = parseUrl.pathname;
  // get query
  const query = parseUrl.query;
  // get method
  const method = req.method;

  // handle static resource
  if (pathname.startsWith('/static/')) {
    const staticFilePath = path.join(__dirname, pathname);
    fs.readFile(staticFilePath, function (err, data) {
      if (err) {
        res.statusCode = 404;
        res.end('404 Not Found');
      } else {
        res.end(data);
      }
    });
  }

  // handle router
  if (pathname === '/') {
    fs.readFile('./views/index.html', function (err, data) {
      if (err) {
        res.statusCode = 404;
        res.end('404 Not Found');
      } else {
        comments.get(function (err, comments) {
          if (err) {
            return res.end('404 Not Found');
          }
          const htmlStr = template.render(data.toString(), {
            comments: comments
          });
          res.end(htmlStr);
        });
      }
    });
  } else if (pathname === '/post') {
    fs.readFile('./views/post.html', function (err, data) {
      if (err) {
        res.statusCode = 404;
        res.end('404 Not Found');
      } else {
        res.end(data);
      }
    });
  } else if (pathname === '/comment') {
    // get comment
    // save comment
    // redirect to /
    comments.add(query, function (err) {
      if (err) {
        return res.end('404 Not Found');
      }
      res.statusCode = 302;
      res.setHeader('Location', '/');
      res.end();
    });
  } else if (pathname === '/pinglun') {
    // get comment
    // save comment
    // redirect to /
    // res.end(JSON.stringify(query));
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  }