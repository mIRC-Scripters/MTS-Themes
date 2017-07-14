alias align if $len($strip($2-)) > $1 { return $left($2-,$calc($1 - 3)) $+ ... } | return $2- $+ $+ $str( ,$calc($1 - $len($strip($2-)))) 

alias root.load {
  %:echo 9[14root9@14localhost /root9]15# load
}

alias root.names {
  var %names = $1-,%a = 1,%b = 1,%temp
  while ($gettok(%names,%a,32)) {
    %temp = %temp $align(10,$ifmatch)
    if (%b == 4) {
      %:echo %::pre %temp
      var %b = 0,%temp
    }
    inc %a
    inc %b
  }
  if (%temp) %:echo %::pre %temp
}

alias root.names.end {
  %:echo %::pre end of names
}

alias root.whois {
  %:echo %::pre Whois9: 14 $+ %::nick $+ 9@14 $+ %::address
  %:echo %::pre IRC Name9: %::realname
  %:echo %::pre Channels9: %::chans
  %:echo %::pre Server9: %::wserver
  if (%::idletime) %:echo %::pre Idle9: $duration($ifmatch)
  if (%::signontime) %:echo %::pre Signed on9: $ifmatch

}
