alias Foggy.whois {
  %:echo $chr(218) $+  $+ %::c1 $+ $str(Ä,30) $+  $+ %::c2 $+ $str(Ä,25) $+  $+ $str(Ä,10) $+ ¿
  %:echo $chr(195) Nick $+ %::c1 $+ : %::nick
  %:echo $chr(195) Name $+ %::c1 $+ : %::realname
  %:echo $chr(195) Addr $+ %::c1 $+ : $replace(%::address,$chr(64), $+ %::c1 $+ @,$chr(46), $+ %::c1 $+ .)
}
alias Foggy.server {
  %:echo $chr(195) Serv $+ %::c1 $+ : $replace(%::wserver,$chr(46), $+ %::c1 $+ .) 
}
alias Foggy.wchans { %:echo $chr(195) Chan $+ %::c1 $+ : $wordwrap(1,50,$replace(%::chan,$chr(35), $+ %::c1 $+ #))
  var %a = 2 | while $wordwrap(%a,50,$replace(%::chan,$chr(35), $+ %::c1 $+ #)) { %:echo $chr(195) $+       $wordwrap(%a,50,$replace(%::chan,$chr(35), $+ %::c1 $+ #)) | inc %a } 
}
alias Foggy.widle {
  %:echo $chr(195) Idle $+ %::c1 $+ : $duration(%::idletime)  $+ %::c1 $+ þ $replace(%::signontime,$chr(58), $+ %::c1 $+ :)
}
alias Foggy.auth {
  %:echo $chr(195) Acnt $+ %::c1 $+ : %::nick is logged in as $gettok(%::text,1,32)
}
alias Foggy.whoisend {
  %:echo $chr(192) $+  $+ %::c1 $+ $str(Ä,30) $+  $+ %::c2 $+ $str(Ä,25) $+  $+ $str(Ä,10) $+ Ù
}
alias Foggy.lusers {
  %:echo $chr(218) $+  $+ %::c1 $+ $str(Ä,30) $+  $+ %::c2 $+ $str(Ä,25) $+  $+ $str(Ä,10) $+ ¿
  %:echo $chr(195) Invisible $+ %::c1 $+ : %::users
  %:echo $chr(195) Servers $+ %::c1 $+ : %::value
}
alias Foggy.lusersend {
  %:echo $chr(195) Clients $+ %::c1 $+ : %::users %::pre Servers $+ %::c1 $+ : %::value
  %:echo $chr(192) $+  $+ %::c1 $+ $str(Ä,30) $+  $+ %::c2 $+ $str(Ä,25) $+  $+ $str(Ä,10) $+ Ù
}
alias Foggy.topic {
  %:echo $chr(218) $+  $+ %::c1 $+ $str(Ä,40) $+  $+ %::c2 $+ $str(Ä,30) $+  $+ $str(Ä,20) $+ ¿
  %:echo $chr(195) Topic $+ %::c1 $+ : $wordwrap(1,65,$strip(%::text))
  var %a = 2 | while $wordwrap(%a,65,$strip(%::text)) { %:echo $chr(195) $+  $wordwrap(%a,65,$strip(%::text)) | inc %a }
}
alias Foggy.topicset {
  %:echo $chr(195) Set by $+ %::c1 $+ : %::nick  $+ %::c1 $+ @ $replace(%::text,$chr(58), $+ %::c1 $+ :)
}
alias Foggy.chmode {
  %:echo $chr(195) Chan modes $+ %::c1 $+ : $replace(%::modes,$chr(43), $+ %::c1 $+ +)
}
alias Foggy.topicend {
  %:echo $chr(195) Created On $+ %::c1 $+ : $replace($asctime(%::text),$chr(58), $+ %::c1 $+ :)
  %:echo $chr(192) $+  $+ %::c1 $+ $str(Ä,40) $+  $+ %::c2 $+ $str(Ä,30) $+  $+ $str(Ä,20) $+ Ù
}

;This wordwrap alias was written by Eric^^;

alias -l wordwrap {
  if ($1 !isnum) || ($2 !isnum) || ($3 == $null) { halt }
  var %wordwrap.lines.count = 1,%wordwrap.in = $remove($3-,) | :loop | var %wordwrap.out.test = %wordwrap.out $gettok(%wordwrap.in,1,32)
  if ($len(%wordwrap.out.test) > $2) { if (!%wordwrap.out) { var %wordwrap.out = $left(%wordwrap.in,$2) | if ($len($gettok(%wordwrap.in,1,32)) <= $2) { var %wordwrap.in = $remtok(%wordwrap.in,$gettok(%wordwrap.in,1,32),32) } | else { var %wordwrap.in = $right(%wordwrap.in,$calc( $len(%wordwrap.in) - $2 )) } } | goto finish } | var %wordwrap.out = %wordwrap.out $gettok(%wordwrap.in,1,32),%wordwrap.in = $remtok(%wordwrap.in,$gettok(%wordwrap.in,1,32),32)
  if ($gettok(%wordwrap.in,1,32)) { goto loop } | :finish
  if ($1 != %wordwrap.lines.count) { inc %wordwrap.lines.count | unset %wordwrap.out %wordwrap.out.test | goto loop } | return %wordwrap.out
}
