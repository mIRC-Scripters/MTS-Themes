alias triplek_whois_start {
  %:echo  $+ %::c1 $+ .—————/whois for  $+ %::c2 $+ %::nick
  %:echo ¦ address:  $+ %::c2 $+ %::address
  %:echo ¦ real name:  $+ %::c2 $+ %::realname
}

alias triplek_raw_319 {
  var %a = 1
  var %output = %::chan
  while (%a <= $comchan(%::nick,0)) {
    var %output = $replace(%output,$comchan(%::nick,%a), $+ $comchan(%::nick,%a) $+ )
    inc %a
  }
  %:echo ¦ channels:  $+ %::c2 $+ %output
}

alias triplek_raw_317 { %:echo ¦ idle time:  $+ %::c2 $+ $duration(%::idletime) $+ ,  $+ %::c1 $+ signed on  $+ %::c2 $+ %::signontime }