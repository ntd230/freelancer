#!/bin/sh
find ./assets -name "*.js" | xargs rm -rf

phpc=`DUMP=cli php -r "include('config/config.php');"`

production(){
    echo "Production Mode";
    NODE_ENV=production PHP_CONFIG=$phpc webpack -p 
    NODE_ENV=production webpack -p --config webpack.node.js
}

develop(){
    echo "Develop Mode";
    PHP_CONFIG=$phpc webpack
    webpack --config webpack.node.js
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
