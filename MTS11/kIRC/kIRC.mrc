alias kirc.whois1 { 
  %:echo  $+ %::c1  ______________
  %:echo  $+ %::c1 $+ | $+ %::c2 $+ START WHOIS $+ %::c1 $+ |
  %:echo  $+ %::c1 $+ |¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
  %:echo  $+ %::c1 $+ | $+ %::c2 $+ Whois on: $+  $+ %::c1 %::nick  $+ %::c2 $+ ( $+ %::c1  $+ %::address $+  $+ %::c2 $+ )
  %:echo  $+ %::c1 $+ | $+ %::c2 $+ Real name: $+  $+ %::c1 %::realname                   
}
alias kirc.whois2 {
  %:echo  $+ %::c1 $+ | $+ %::c2 $+ Idle time: $+ %::c1 $duration(%::idletime)
  %:echo  $+ %::c1 $+ | $+ %::c2 $+ Signon time/date: $+ %::c1 %::signontime
}
alias kirc.whois3 {
  %:echo  $+ %::c1 $+ | $+ %::c2 $+ Server: $+ %::c1 %::wserver  $+ %::c2 $+ ( $+ %::c1  $+ %::serverinfo $+  $+ %::c2 $+ )
}
alias kirc.whois4 {
  %:echo  $+ %::c1 $+ | $+ %::c2 $+ Channels: $+ %::c1 %::chan
}
alias kirc.whois5 {
  %:echo  $+ %::c1 $+ | $+ %::c2 $+ Away: $+ %::c1 %::text
}
alias kirc.whois6 {
  %:echo  $+ %::c1 $+ | $+ %::c2 $+ IRCOP: $+ %::c1  $+ %::nick %::operline
}
alias kirc.whois7 {
  %:echo  $+ %::c1 $+ |______________________________________________
  %:echo  $+ %::c1 $+ | $+ %::c2 $+ END WHOIS $+ %::c1 $+ |
  %:echo  $+ %::c1  ¯¯¯¯¯¯¯¯¯¯¯
}
