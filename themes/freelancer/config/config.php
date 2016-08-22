<?php

$paths=[
    'index'=>__DIR__.'/../index.html',
    'laze'=>__DIR__.'/../laze.html',
];

${_INIT_CONFIG}=[
    'paths'=>$paths,
    'assetsRoot'=>'/react/assets',
    'staticVersion'=>'2016082203',
    'webpackVendor'=>[]
];

if ('cli'===getenv("DUMP")){
    echo json_encode(${_INIT_CONFIG});
}
