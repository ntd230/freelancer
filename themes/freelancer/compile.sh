#!/bin/sh
find ./assets -name "*.js" | xargs rm -rf

phpc=`DUMP=cli php -r "include('config/config.php');"`

production(){
    echo "Production Mode";
    NODE_ENV=production CONFIG=$phpc webpack -p 
    NODE_ENV=production webpack -p --config webpack.server.js
}

develop(){
    echo "Develop Mode";
    npm run build
    CONFIG=$phpc webpack
    webpack --config webpack.server.js
}

case "$1" in
  p)
    production
    ;;
  *)
    develop
    exit
esac

exit $?
