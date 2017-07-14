alias lice.load {
  %:echo %::pre 10L11iC13e 11theme 14(v1.0) 11by Sharper loaded...
}

alias lice.unload {
  %:echo %::pre 10L11iC13e 11theme 14(v1.0) 11by Sharper unloaded...
  %:echo %::pre Visit 10http://maniana.za.pl/
}

alias whois.top {
  %:echo 14[16whois14.16nfo14]
  %:echo %::pre 14nick.host 16:15 %::nick ( $+ %::address $+ )
  %:echo %::pre 14irc.name 16:15 %::realname
}

alias whois.chan {
  %:echo %::pre 14channels 16:15 $dupa(%::chan)
}

alias whois.gone {
  %:echo %::pre 14gone 16:15 %::away
}

alias whois.idle {
  %:echo %::pre 14idle 16:15 $duration(%::idletime)
  %:echo %::pre 14sign.on 16:15 %::signontime
}

alias whois.ircop {
  %:echo %::pre 14irc@ 16:15 Yes
}

alias whois.serv {
  %:echo %::pre 14server 16:15 %::wserver 14[15 $+ %::serverinfo $+ 14]
}

alias whois.bottom {
  %:echo 14[16whois14.16end14]
}

alias whowas.top {
  %:echo 14[16whowas14.16nfo14]
  %:echo %::pre 14nick.host 16:15 %::nick ( $+ %::address $+ )
  %:echo %::pre 14irc.name 16:15 %::realname
  halt
}

alias whowas.bottom {
  %:echo 14[16whowas14.16end14]
}

alias on.join {
  set %join.time $ctime
  if (%join.time != $null) { %join.time = $ctime - %join.time | %join.time = %join.time $+ . $+ $right($ticks,2) $+ s }
  %:echo %::pre Joined 16 $+ %::chan ( $+ %::modes $+ )  in16 %join.time
  %:echo %::pre 16Stats: 14@/16 $+ $opnick(%::chan,0) 14+/16 $+ $vnick(%::chan,0) 14-/16 $+ $nopnick(%::chan,0) 14total/16 $+ $nick(%::chan,0)
  unset %join.time
}

alias lice.raw.352 {
 echo 15 $2 14[15 $+ $time(HH:nn:ss) $+ 14]15 %baner ( $+ $7 $+ ) 16 $+ $6 15( $+ $3 $+ @ $+ $4 $+ ) at16 $5 $+ ( $+ $8 $+ ) ( $+ $9- $+ )
}
alias -l align if $len($strip($2-)) > $1 { return $left($2-,$calc($1 - 3)) $+ ... } | return $2- $+ $+ $str( ,$calc($1 - $len($strip($2-)))) 

alias lice.sc {
  %:echo %::pre %::chan lusers:
  var %x = 0
  %::text = $gettok(%::text,2-,32)
  while ($gettok(%::text,$+($calc(1 + %x),-,$calc(%x + 4)),32)) {
    var %names = $ifmatch, %y = 1, %names2
    while ($gettok(%names,%y,32)) {
      %names2 = $addtok(%names2,$+($ifmatch,$str($chr(160),$calc(12 - $len($ifmatch)))),32)
      inc %y
    }
    %:echo 13>15 $dupa(%names2)
    inc %x 4
  }
}

alias lice.sc.end {
  %:echo %::pre 14[ministats: 14@/16 $+ $opnick(%::chan,0) 14+/16 $+ $vnick(%::chan,0) 14-/16 $+ $nopnick(%::chan,0) 14total/16 $+ $nick(%::chan,0) scanned14@16 $+ $time(HH:nn:ss) $+ 14]
  if (-s isin %:echo) %:echo -
  unset %::licetheme.names.*
}

alias -l dupa return $replace($1-,@,16@,+,16+)
