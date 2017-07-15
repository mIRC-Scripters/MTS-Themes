alias theme.load {
  %:echo 6 $+ $chr(218) $+ $str($bar,38)
  %:echo 6 $+ $chr(179) $chr(218) $+ $str($bar,38) 
  %:echo 6 $+ $chr(179) $chr(179) $+ $chr(255) $+ 0Successfully Loaded Default Theme by haliku
  %:echo 6 $+ $chr(192) $+ $bar $+ $chr(197) $+ $str($bar,38)
  %:echo 6 $+ $chr(255) $chr(192) $+ $str($bar,36) 
}
alias theme.unload {
  %:echo 6 $+ $chr(218) $+ $str($bar,38)
  %:echo 6 $+ $chr(179) $chr(218) $+ $str($bar,38) 
  %:echo 6 $+ $chr(179) $chr(179) $+ $chr(255) $+ 0Successfully UnLoaded Default Theme by haliku
  %:echo 6 $+ $chr(192) $+ $bar $+ $chr(197) $+ $str($bar,38)
  %:echo 6 $+ $chr(255) $chr(192) $+ $str($bar,36) 
}
alias raw.301 {
  if (%whois == yes) {
    echo -a $timestamp 8 $+ $chr(179) $+ $chr(255) $chr(179) $chr(255) $chr(179) $+ $chr(255) $+ 8Away:0 %::text
  }
  else {
    echo -a $timestamp 8 $+ $chr(218) $+ $str($bar,3) $+ $chr(194) $+ $str($bar,35)
    echo -a $timestamp 8 $+ $chr(179) $+ $chr(255) $+ $chr(255) $+ $chr(255) $+ $chr(179) 8Away:0 %::text
    echo -a $timestamp 8 $+ $chr(192) $+ $str($bar,3) $+ $chr(193) $+ $str($bar,35) 
  }
  return
}
alias raw.307 {
  %:echo 8 $+ $chr(179) $+ $chr(255) $chr(179) $+ $chr(255) $+ $chr(255) $chr(179) 8Registered Nick:0 %::nick %::isregd a registered nick
  return
}
alias raw.311 {
  set %whois yes
  %:echo 8 $+ $chr(255) $+ $chr(255) $chr(218) $+ $str($bar,3) $+ $chr(194) $+ $str($bar,37)
  %:echo 8 $+ $chr(255) $+ $chr(255) $chr(179) $chr(255) $chr(179) $+ $chr(255) $+ 8Whois Results for %::nick
  %:echo 8 $+ $chr(218) $+ $str($bar,2) $+ $chr(197) $+ $str($bar,3) $+ $chr(197) $+ $str($bar,30)
  %:echo 8 $+ $chr(179) $+ $chr(255) $chr(179) $chr(255) $chr(179) $+ $chr(255) $+ 8Host:0 %::address
  %:echo 8 $+ $chr(179) $+ $chr(255) $chr(179) $chr(255) $chr(179) $+ $chr(255) $+ 8Real Name:0 %::realname
  return
}
alias raw.313 {
  %:echo 8 $+ $chr(179) $+ $chr(255) $chr(179) $+ $chr(255) $+ $chr(255) $chr(179) 8IRCop:0 %::isoper, %::operline
  return
}
alias raw.317 {
  %:echo 8 $+ $chr(179) $+ $chr(255) $chr(179) $chr(255) $chr(179) $+ $chr(255) $+ 8Idle:0 $replace($duration(%::idletime),days,d,day,d,hrs,h,hr,h,mins,m,min,m,secs,s,sec,s)
  %:echo 8 $+ $chr(179) $+ $chr(255) $chr(179) $chr(255) $chr(179) $+ $chr(255) $+ 8Signed On:0 %::signontime
  return
}
alias raw.401 {
  echo -a $timestamp 8 $+ $chr(218) $+ $str($bar,3) $+ $chr(194) $+ $str($bar,35)
  echo -a $timestamp 8 $+ $chr(179) $+ $chr(255) $+ $chr(255) $+ $chr(255) $+ $chr(179) 8Error:0 %::nick is not a nickname on $network
  echo -a $timestamp 8 $+ $chr(179) $+ $chr(255) $+ $chr(255) $+ $chr(255) $+ $chr(179) 8End of Whois
  echo -a $timestamp 8 $+ $chr(192) $+ $str($bar,3) $+ $chr(193) $+ $str($bar,35) 
  return
} 
alias raw.319 {
  %:echo 8 $+ $chr(179) $+ $chr(255) $chr(179) $chr(255) $chr(179) $+ $chr(255) $+ 8Channels:0 %::chan
  return
}
alias raw.312 {
  %:echo 8 $+ $chr(179) $+ $chr(255) $chr(179) $chr(255) $chr(179) $+ $chr(255) $+ 8Server:0 %::wserver
  %:echo 8 $+ $chr(179) $+ $chr(255) $chr(179) $chr(255) $chr(179) $+ $chr(255) $+ 8Description:0 %::serverinfo
  return
}
alias raw.318 {
  unset %whois
  %:echo 8 $+ $chr(192) $+ $bar $+ $bar $+ $chr(197) $+ $bar $+ $bar $+ $bar $+ $chr(197) $+ $str($bar,30)
  %:echo 8 $+ $chr(255) $+ $chr(255) $chr(179) $chr(255) $chr(179) $+ $chr(255) $+ 8End of Whois 
  %:echo 8 $+ $chr(255) $+ $chr(255) $chr(192) $+ $bar $+ $bar $+ $bar $+ $chr(193) $+ $str($bar,38)
  return
}
on *:ctcpreply:ping*:{
  echo -a Ping Reply: $nick is lagged by $calc($calc($ticks - %ticktocks) / 1000) seconds
  unset %ticktocks
  halt
}
alias ping { ctcp ping $$1 }
alias ctcp {
  if ($2 == ping) { set %ticktocks $ticks | ctcp $$1 ping }
  else { ctcp $1- }
}
alias bar {
  return $chr(196)
}
