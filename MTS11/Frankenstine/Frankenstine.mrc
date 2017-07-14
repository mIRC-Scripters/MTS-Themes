alias Frankenstine.whois {
  %:echo $chr(218) $+  $+ %::c1 $+ $str(Ä,20) $+  $+ %::c2 $+ $str(Ä,20) $+  $+ $str(Ä,10)
  %:echo $chr(180) Nick $+ %::c1 $+ : %::nick
  %:echo $chr(180) Name $+ %::c1 $+ : %::realname
  %:echo $chr(180) Address $+ %::c1 $+ : $replace(%::address,$chr(64), $+ %::c1 $+ @,$chr(46), $+ %::c1 $+ .)
}
alias Frankenstine.server {
  %:echo $chr(180) Server $+ %::c1 $+ : $replace(%::wserver,$chr(46), $+ %::c1 $+ .) 
}
alias Frankenstine.wchans { %:echo $chr(180) Chans $+ %::c1 $+ : $wordwrap(1,50,$replace(%::chan,$chr(35), $+ %::c1 $+ #))
  var %a = 2 | while $wordwrap(%a,50,$replace(%::chan,$chr(35), $+ %::c1 $+ #)) { %:echo $chr(179) $+         $wordwrap(%a,50,$replace(%::chan,$chr(35), $+ %::c1 $+ #)) | inc %a } 
}
alias Frankenstine.widle {
  %:echo $chr(180) Idle $+ %::c1 $+ : $duration(%::idletime)
  %:echo $chr(180) Signed on $+ %::c1 $+ : $replace(%::signontime,$chr(58), $+ %::c1 $+ :)
}
alias Frankenstine.auth {
  %:echo $chr(180) Account $+ %::c1 $+ : %::nick is logged in as $gettok(%::text,1,32)
}
alias Frankenstine.whoisend {
  %:echo $chr(192) $+  $+ %::c1 $+ $str(Ä,20) $+  $+ %::c2 $+ $str(Ä,20) $+  $+ $str(Ä,10)
}
alias Frankenstine.lusers {
  %:echo $chr(218) $+  $+ %::c1 $+ $str(Ä,20) $+  $+ %::c2 $+ $str(Ä,20) $+  $+ $str(Ä,10)
  %:echo $chr(180) Invisible $+ %::c1 $+ : %::users
  %:echo $chr(180) Servers $+ %::c1 $+ : %::value
}
alias Frankenstine.lusersend {
  %:echo $chr(180) Clients $+ %::c1 $+ : %::users %::pre Servers $+ %::c1 $+ : %::value
  %:echo $chr(192) $+  $+ %::c1 $+ $str(Ä,20) $+  $+ %::c2 $+ $str(Ä,20) $+  $+ $str(Ä,10)
}
alias Frankenstine.topic {
  %:echo $chr(218) $+  $+ %::c1 $+ $str(Ä,30) $+  $+ %::c2 $+ $str(Ä,26) $+  $+ $str(Ä,10)
  %:echo $chr(180) Topic $+ %::c1 $+ : $wordwrap(1,65,$strip(%::text))
  var %a = 2 | while $wordwrap(%a,65,$strip(%::text)) { %:echo $chr(180) $+         $wordwrap(%a,65,$strip(%::text)) | inc %a }
}
alias Frankenstine.topicset {
  %:echo $chr(180) Set by $+ %::c1 $+ : %::nick  $+ %::c1 $+ @ $replace(%::text,$chr(58), $+ %::c1 $+ :)
}
alias Frankenstine.chmode {
  %:echo $chr(180) Chan modes $+ %::c1 $+ : $replace(%::modes,$chr(43), $+ %::c1 $+ +)
}
alias Frankenstine.topicend {
  %:echo $chr(180) Created On $+ %::c1 $+ : $replace($asctime(%::text),$chr(58), $+ %::c1 $+ :)
  %:echo $chr(192) $+  $+ %::c1 $+ $str(Ä,30) $+  $+ %::c2 $+ $str(Ä,26) $+  $+ $str(Ä,10)
}

;This wordwrap alias was written by Eric^^;

alias -l wordwrap {
  if ($1 !isnum) || ($2 !isnum) || ($3 == $null) { halt }
  var %wordwrap.lines.count = 1,%wordwrap.in = $remove($3-,) | :loop | var %wordwrap.out.test = %wordwrap.out $gettok(%wordwrap.in,1,32)
  if ($len(%wordwrap.out.test) > $2) { if (!%wordwrap.out) { var %wordwrap.out = $left(%wordwrap.in,$2) | if ($len($gettok(%wordwrap.in,1,32)) <= $2) { var %wordwrap.in = $remtok(%wordwrap.in,$gettok(%wordwrap.in,1,32),32) } | else { var %wordwrap.in = $right(%wordwrap.in,$calc( $len(%wordwrap.in) - $2 )) } } | goto finish } | var %wordwrap.out = %wordwrap.out $gettok(%wordwrap.in,1,32),%wordwrap.in = $remtok(%wordwrap.in,$gettok(%wordwrap.in,1,32),32)
  if ($gettok(%wordwrap.in,1,32)) { goto loop } | :finish
  if ($1 != %wordwrap.lines.count) { inc %wordwrap.lines.count | unset %wordwrap.out %wordwrap.out.test | goto loop } | return %wordwrap.out
}
