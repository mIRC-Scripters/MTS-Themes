alias eclipse.whois1 { 
  %:echo __________
  %:echo %::pre Whois $+ %::c1 $+ : $+ %::c2 %::nick
  %:echo %::pre Name $+ %::c1 $+ : $+ %::c2 %::realname  $+ %::c4 $+ ( $+  $+ %::c2 $+ $replace(%::address,@, $+ %::c4 $+ @ $+  $+ %::c2,., $+ %::c4 $+ . $+  $+ %::c2) $+  $+ %::c4 $+ ) $+ 

}
alias eclipse.whois7 {
  %:echo %::pre Whois end $+ %::c1 $+ : $+ %::c2 %::nick
  %:echo ¯¯¯¯¯¯¯¯¯¯
}
alias eclipse.whois2 {
  %:echo %::pre Idle $+ %::c1 $+ : $+ %::c2 $duration(%::idletime)
  %:echo %::pre Signon $+ %::c1 $+ : $+ %::c2 %::signontime
}
alias eclipse.whois3 {
  %:echo %::pre Server $+ %::c1 $+ : $+ %::c2 $replace(%::wserver,., $+ %::c4 $+ . $+  $+ %::c2)  $+ %::c4 $+ ( $+  $+ %::serverinfo $+  $+ %::c4 $+ ) $+ 
}
alias eclipse.whois4 {
  %:echo %::pre Channels $+ %::c1 $+ : $+ %::c2 $replace(%::chan,@, $+ %::c4 $+ @ $+ %::c2,$chr(37), $+ %::c4 $+ $chr(37) $+  $+ %::c2,+, $+ %::c4 $+ + $+ %::c2)
}
alias eclipse.whois5 {
  %:echo %::pre Away $+ %::c1 $+ : $+ %::c2 %::text
}
alias eclipse.whois6 {
  %:echo %::pre IRCOp $+ %::c1 $+ : $+ %::c2 %::operline
}
