<?php

$f = '../themes/freelancer/ui/organisms/Me.jsx';

$contents = file_get_contents($f);

$reg = "/(fill\\=\")([^\"]*)(\" points\\=\")([^\"]*)/";

preg_match_all($reg, $contents, $matchs);

$new = [];
foreach($matchs[2] as $k=>$m)
{
   $new[] = [
        $m,
        trim($matchs[4][$k])
   ];
}

echo json_encode($new);

