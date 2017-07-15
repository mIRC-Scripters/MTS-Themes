alias Crispy.whois {
  %:echo $chr(218) $+  $+ %::c1 $+ $str(-,20) $+  $+ %::c2 $+ $str(-,20) $+  $+ $str(-,10)
  %:echo $chr(179) Nick $+ %::c1 $+ : %::nick
  %:echo $chr(179) Name $+ %::c1 $+ : %::realname
  %:echo $chr(179) Address $+ %::c1 $+ : $replace(%::address,$chr(64), $+ %::c1 $+ @,$chr(46), $+ %::c1 $+ .)
}
alias Crispy.server {
  %:echo $chr(179) Server $+ %::c1 $+ : $replace(%::wserver,$chr(46), $+ %::c1 $+ .) 
}
alias Crispy.wchans { %:echo $chr(179) Chans $+ %::c1 $+ : $wordwrap(1,50,$replace(%::chan,$chr(35), $+ %::c1 $+ #))
  var %a = 2 | while $wordwrap(%a,50,$replace(%::chan,$chr(35), $+ %::c1 $+ #)) { %:echo $chr(179) $+         $wordwrap(%a,50,$replace(%::chan,$chr(35), $+ %::c1 $+ #)) | inc %a } 
}
alias Crispy.widle {
  %:echo $chr(179) Idle $+ %::c1 $+ : $duration(%::idletime)
  %:echo $chr(179) Signed on $+ %::c1 $+ : $replace(%::signontime,$chr(58), $+ %::c1 $+ :)
}
alias Crispy.auth {
  %:echo $chr(179) Account $+ %::c1 $+ : %::nick is logged in as $gettok(%::text,1,32)
}
alias Crispy.whoisend {
  %:echo $chr(192) $+  $+ %::c1 $+ $str(-,20) $+  $+ %::c2 $+ $str(-,20) $+  $+ $str(-,10)
}
alias Crispy.lusers {
  %:echo $chr(218) $+  $+ %::c1 $+ $str(-,20) $+  $+ %::c2 $+ $str(-,20) $+  $+ $str(-,10)
  %:echo ³ Invisible $+ %::c1 $+ : %::users
  %:echo ³ Servers $+ %::c1 $+ : %::value
}
alias Crispy.lusersend {
  %:echo ³ Clients $+ %::c1 $+ : %::users Servers: %::value
  %:echo $chr(192) $+  $+ %::c1 $+ $str(-,20) $+  $+ %::c2 $+ $str(-,20) $+  $+ $str(-,10)
}
alias Crispy.topic {
  %:echo $chr(218) $+  $+ %::c1 $+ $str(-,20) $+  $+ %::c2 $+ $str(-,20) $+  $+ $str(-,10)
  %:echo $chr(179) Topic $+ %::c1 $+ : $wordwrap(1,50,$strip(%::text))
  var %a = 2 | while $wordwrap(%a,50,$strip(%::text)) { %:echo $chr(179) $+         $wordwrap(%a,50,$strip(%::text)) | inc %a }
}
alias Crispy.topicset {
  %:echo $chr(179) Set by $+ %::c1 $+ : %::nick  $+ %::c1 $+ @ $replace(%::text,$chr(58), $+ %::c1 $+ :)
}
alias Crispy.chmode {
  %:echo $chr(179) Channel modes $+ %::c1 $+ : %::modes
}
alias Crispy.topicend {
  %:echo $chr(179) Created On $+ %::c1 $+ : $asctime($replace(%::text,$chr(58), $+ %::c1 $+ :))
  %:echo $chr(192) $+  $+ %::c1 $+ $str(-,20) $+  $+ %::c2 $+ $str(-,20) $+  $+ $str(-,10)
}

;This wordwrap alias was written by Eric^^;

alias -l wordwrap {
  if ($1 !isnum) || ($2 !isnum) || ($3 == $null) { halt }
  var %wordwrap.lines.count = 1,%wordwrap.in = $remove($3-,) | :loop | var %wordwrap.out.test = %wordwrap.out $gettok(%wordwrap.in,1,32)
  if ($len(%wordwrap.out.test) > $2) { if (!%wordwrap.out) { var %wordwrap.out = $left(%wordwrap.in,$2) | if ($len($gettok(%wordwrap.in,1,32)) <= $2) { var %wordwrap.in = $remtok(%wordwrap.in,$gettok(%wordwrap.in,1,32),32) } | else { var %wordwrap.in = $right(%wordwrap.in,$calc( $len(%wordwrap.in) - $2 )) } } | goto finish } | var %wordwrap.out = %wordwrap.out $gettok(%wordwrap.in,1,32),%wordwrap.in = $remtok(%wordwrap.in,$gettok(%wordwrap.in,1,32),32)
  if ($gettok(%wordwrap.in,1,32)) { goto loop } | :finish
  if ($1 != %wordwrap.lines.count) { inc %wordwrap.lines.count | unset %wordwrap.out %wordwrap.out.test | goto loop } | return %wordwrap.out
}
