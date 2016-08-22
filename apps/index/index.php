<?php

$b = new PMVC\MappingBuilder();
${_INIT_CONFIG}[_CLASS] = 'NewActionName';
${_INIT_CONFIG}[_INIT_BUILDER] = $b;

$b->addAction('index', array(
    _FUNCTION => array(
        ${_INIT_CONFIG}[_CLASS],
        'index'
    )
    ,_FORM => 'HelloVerify'
));

$b->addForward('home', array(
    _PATH => 'home'
    ,_TYPE => 'view'
));


class NewActionName extends PMVC\Action
{
    static function index($m, $f){
       $go = $m['home'];
       return $go;
    }
}

