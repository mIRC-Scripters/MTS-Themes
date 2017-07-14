alias ezy.whois {
  %:echo _ $+  $+ %::c1 $+ $str(_,20) $+  $+ %::c2 $+ $str(_,20) $+  $+ $str(_,10)
  %:echo $chr(144) Nick: %::nick
  %:echo $chr(144) Name: %::realname
  %:echo $chr(144) Address: %::address
}
alias ezy.server {
  %:echo $chr(144) Server: %::pre %::wserver
}
alias ezy.wchans { %:echo $chr(144) Chans: $wordwrap(1,50,%::chan)
  var %a = 2 | while $wordwrap(%a,50,%::chan) { %:echo $chr(144) $+         $wordwrap(%a,50,%::chan) | inc %a } 
  %:echo $chr(144) Common: $comchan(%::nick,0) Channel.
}
alias ezy.widle {
  %:echo $chr(144) Idle: $duration(%::idletime)
  %:echo $chr(144) Signed on: %::signontime
}
alias ezy.auth {
  %:echo $chr(144) Account: %::nick is logged in as $gettok(%::text,1,32)
}
alias ezy.whoisend {
  %:echo » $+  $+ %::c1 $+ $str(»,20) $+  $+ %::c2 $+ $str(»,20) $+  $+ $str(»,10)
}
alias ezy.lusers {
  %:echo _ $+  $+ %::c1 $+ $str(_,20) $+  $+ %::c2 $+ $str(_,20) $+  $+ $str(_,10)
  %:echo $chr(144) Invisible: %::users
  %:echo $chr(144) Servers: %::value
}
alias ezy.lusersend {
  %:echo $chr(144) Clients: %::users %::pre Servers: %::value
  %:echo » $+  $+ %::c1 $+ $str(»,20) $+  $+ %::c2 $+ $str(»,20) $+  $+ $str(»,10)
}
alias ezy.topic {
  %:echo _ $+  $+ %::c1 $+ $str(_,30) $+  $+ %::c2 $+ $str(_,25) $+  $+ $str(_,10)
  %:echo $chr(144) Topic: $wordwrap(1,65,$strip(%::text))
  var %a = 2 | while $wordwrap(%a,65,$strip(%::text)) { %:echo $chr(144) $+         $wordwrap(%a,65,$strip(%::text)) | inc %a }
}
alias ezy.topicset {
  %:echo $chr(144) Set by: %::nick @ %::text
}
alias ezy.chmode {
  %:echo $chr(144) Chan modes: %::modes
}
alias ezy.topicend {
  %:echo $chr(144) Created On: $asctime(%::text)
  %:echo » $+  $+ %::c1 $+ $str(»,30) $+  $+ %::c2 $+ $str(»,25) $+  $+ $str(»,10)
}

;This wordwrap alias was written by Eric^^;

alias -l wordwrap {
  if ($1 !isnum) || ($2 !isnum) || ($3 == $null) { halt }
  var %wordwrap.lines.count = 1,%wordwrap.in = $remove($3-,) | :loop | var %wordwrap.out.test = %wordwrap.out $gettok(%wordwrap.in,1,32)
  if ($len(%wordwrap.out.test) > $2) { if (!%wordwrap.out) { var %wordwrap.out = $left(%wordwrap.in,$2) | if ($len($gettok(%wordwrap.in,1,32)) <= $2) { var %wordwrap.in = $remtok(%wordwrap.in,$gettok(%wordwrap.in,1,32),32) } | else { var %wordwrap.in = $right(%wordwrap.in,$calc( $len(%wordwrap.in) - $2 )) } } | goto finish } | var %wordwrap.out = %wordwrap.out $gettok(%wordwrap.in,1,32),%wordwrap.in = $remtok(%wordwrap.in,$gettok(%wordwrap.in,1,32),32)
  if ($gettok(%wordwrap.in,1,32)) { goto loop } | :finish
  if ($1 != %wordwrap.lines.count) { inc %wordwrap.lines.count | unset %wordwrap.out %wordwrap.out.test | goto loop } | return %wordwrap.out
}
