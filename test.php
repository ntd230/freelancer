<?php
\PMVC\Load::plug();
class ReactAppTest extends PHPUnit_Framework_TestCase
{
    function testApp()
    {
        \PMVC\initPlugin([
            'controller'=>null
            ,'dispatcher'=>null
            ,'error'=>null
            ,'debug'=>null
            ,'dotenv'=>['.env.sample']
            ,'app_action_router'=>null
        ]);
        $controller = \PMVC\plug('controller',[
            _RUN_APPS=>'apps'
            ,'NODE'=>'vendor/bin/node'
            ,_TEMPLATE_DIR=>'vendor/pmvc-theme/hello_react'
        ]);
        if($controller->plugApp()){
            ob_start();
            $controller->process();
            $output = ob_get_contents();
            ob_end_clean();
        }
        $this->assertContains('data-reactid',$output);
    }
}
