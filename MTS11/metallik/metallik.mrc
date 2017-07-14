alias metal.start {
  %:echo 
  %:echo 08 09   00.
  %:echo 09 ..08.06:. $metal.mb(metallik,b) 09[   14m15   T   S   06t   h   15e   m   14e09   ]
  %:echo $metal.× author :15 Prisoner
  %:echo $metal.× mail   :15 prisoner@vizzavi.pt
  %:echo $metal.× date   :15 20/06/2002
  %:echo $metal.× desc   :15 modern-style theme using gradient effects
  %:echo $metal.× dedic. :15 $me
  %:echo $metal.× thx to :15 mum & dad
  %:echo 09 :.08.06:.....08.06.08.........09.08.09.. ... . ..   .      .
  %:echo   09.08.06:
  %:echo 
}

alias metal.whoisstart {
  %:echo     06.
  %:echo 09 ..08.06:. $metal.mb(%::nick,b) 14[15 $+ $replace(%::address,@,14@15) $+ 14]
  %:echo $metal.× name   :15 %::realname $+ 00 %:comments
}
alias metal.whoisend {
  %:echo 09 :.08.06:.....08.06.08.........09.08.09.. ... . ..     .           ..
  %:echo   09.08.06:
}

alias metal.motdstart {
  %:echo 09.. . ... .. . . ... 08.. . ..  .. ... . . .06.. .. . .... .. . ... .   motd
  %:echo 09:
}
alias metal.motd {
  var %maxmotdlen = 70, %i = 1, %a, %b
  set -nu %::text $strip(%::text,c)
  %b = $strip(%::text)
  ; %:echo 09:15   $metal.gettextbylen(%::text,1,%maxmotdlen)
  while (%i <= $len(%b)) { 
    %a = $metal.getline(%::text,%i,%maxmotdlen) 
    %:echo 09:15   $metal.del1stspace(%a)
    inc %i $len($strip(%a))
  }
}
alias metal.motdend {
  %:echo 09:
  %:echo 09:. ... . . .. ..08. ... .. . ..06. . .. .. .
}

alias metal.lusersstart {
  %:echo 
  %:echo 15    invisible14 $metal.align($len(%::text),15,.) $+ 00 %::text $+ 00 %:comments
  %:echo 15      servers14 $metal.align($len(%::value),15,.) $+ 00 %::value 00
}
alias metal.raw.255 {
  %:echo 15      clients14 $metal.align($len(%::users),15,.) $+ 00 %::users $+ 00 %:comments
  %:echo 15      servers14 $metal.align($len(%::value),15,.) $+ 00 %::value $+ 00
}
alias metal.lusersend {
  %:echo 15 global users14 $metal.align($len(%::users),15,.) $+ 00 %::users 15.14.15 max 14..00 %::value 14—15¬00 $round($calc(%::users  / %::value * 100),0) $+ % $+ 00 %:comments
  %:echo 
}

alias metal.topic {
  var %maxtopiclen = 63, %i = 1, %a, %b
  set -nu %::text $strip(%::text,c)
  %b = $strip(%::text)
  %:echo 09... .. .. . .. . . 08... .. . .. . ... ..  .. ... . . 06... .. . .... .. . ... .   
  while (%i <= $len(%b)) { 
    %a = $metal.getline(%::text,%i,%maxtopiclen) 
    %:echo $iif(%i > 1,09:        00:15,09: 06topic  :15) $metal.del1stspace(%a) 
    inc %i $len($strip(%a))
  }
}
alias metal.endtopic {
  %:echo 09: 06set by :06 %::nick 14—15¬ %::text $+ 00 %:comments
  %:echo 09:. ... . . .. ..08. .. .. . .. ... .06. . ... . .. .. .
}

alias metal.names {
  if (%::chan != %::metaltheme.names.chan) {
    %:echo 09.. ... . .. . .. ..08. ... .. ... . .. ... ..06. . .. ... .. .  .    .   $metal.mb(%::chan,b)
    %::metaltheme.names.chan = %::chan
  }
  var %x = 0
  %::text = $gettok(%::text,2-,32)
  while ($gettok(%::text,$+($calc(1 + %x),-,$calc(%x + 4)),32)) {
    var %names = $ifmatch, %y = 1, %names2
    while ($gettok(%names,%y,32)) {
      %names2 = $addtok(%names2,$+($ifmatch,$str($chr(160),$calc(16 - $len($ifmatch)))),32)
      inc %y
    }
    %:echo 09:15 %names2
    inc %x 4
  }
}
alias metal.endnames {
  %:echo 09:. .. ... . .. .08.. .. . .. ..06. .. . ..   .    .
  if (-s isin %:echo) %:echo -
  unset %::metaltheme.names.*
}

alias metal.raw.004 {
  var %a = 4 - $numtok(%::text,32)
  %:echo %::pre $metal.ev(usermodes)  $+ %::c3 $+  $+ $gettok(%::text,$calc(3 - %a),32) $+ 00 %:comments
  %:echo %::pre $metal.ev(chanmodes)  $+ %::c3 $+  $+ $gettok(%::text,$calc(4 - %a),32) $+ 00   
}

alias metal.× return 09 :  06:
alias metal.pt return 10. $+ %::c3 $+ .00
alias metal.ef return 10— $+ %::c3 $+ ¬00
alias metal.ev return  $+ %::c1 $+ $1- 13:00
alias metal.mb {
  var %n = $strip($1), %l
  if ($len(%n) < 4) %n =  $+ %::c3 $+ %n $+  $+ %::c3
  elseif ($len(%n) isnum 4-6) { %l = $len(%n) - 2 | %n =  $+ %::c1 $+ $left(%n,1) $+  $+ %::c3 $+ $mid(%n,2,%l) $+  $+ %::c1 $+ $right(%n,1) }
  else { %l = $len(%n) - 4 | %n = 10 $+ $left(%n,1) $+  $+ %::c1 $+ $mid(%n,2,1) $+  $+ %::c3 $+ $mid(%n,3,%l) $+  $+ %::c1 $+ $mid(%n,-2,1) $+ 10 $+ $right(%n,1) }
  if ($2) %n = $replace($2,b,,u,,r,) $+ %n $+ $replace($2,b,,u,,r,) | %n = %n $+ 00 | return %n
}

alias metal.st return $remove($duration($$1),ks,k,ays,ay,rs,r,ins,in,ecs,ec)

alias metal.getline {
  var %n = $iif($2 > 0,$2,1), %a, %b, %i = 1
  %a = $metal.midncd($1,%n,$3)
  %b = $strip($metal.midncd($strip($1),$calc(%n + $len($strip(%a))),1))
  if (%b) && (%b != $chr(160)) && ($chr(160) isin %a) && ($len($strip($mid(%a,1,$pos(%a,$chr(160),$count(%a,$chr(160)))))) > 0) %a = $mid(%a,1,$pos(%a,$chr(160),$pos(%a,$chr(160),0)))
  return %a
}
alias metal.del return $left($1,$calc($2 - 1)) $+ $iif($calc($len($1) - $calc($2 + $3 - 1)) > 0,$right($1,$ifmatch))
alias metal.del1stspace {
  var %i = 1, %r = $1
  while ($istok(2.31.22.160,$asc($mid(%r,%i,1)),46)) { if ($mid(%r,%i,1) == $chr(160)) { %r = $metal.del(%r,%i,1) | dec %i } | inc %i }
  return %r
}
; $metal.align(<lengthoftext>,<space>,[chartofill])
alias metal.align return $str($iif($3,$3,$chr(32)),$calc($2 - $1))
alias metal.midncd {
  var %i = 1, %r, %ch, %s = $replace($1,$chr(32),$chr(160))
  while ($len($strip(%r)) < $3) && (%i <= $len(%s)) {
    %ch = $mid(%s,%i,1)
    if (%ch isin ) %r = $+(%r,%ch)
    elseif ($len($strip($mid(%s,1,%i))) >= $2) %r = $+(%r,%ch)
    inc %i
  }
  return %r
}
