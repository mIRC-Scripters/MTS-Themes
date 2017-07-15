alias sun.blind.whois1 { 
  %:echo  $+ %::c3 $+ ศออออออออออออหออออผ $+ 
  %:echo %::pre Whoisÿÿÿÿ  $+ %::c3 $+ บ $+  $+ %::c1 %::nick
  %:echo %::pre Nameÿÿÿÿÿ  $+ %::c3 $+ บ $+  $+ %::c1 %::realname ( $+ %::address $+ )
}
alias sun.blind.whois7 {
  %:echo %::pre Whois end  $+ %::c3 $+ บ $+  $+ %::c1 %::nick
  %:echo  $+ %::c3 $+ ษออออออออออออสออออป $+ 
}
alias sun.blind.whois2 {
  %:echo %::pre Idleÿÿÿÿÿ  $+ %::c3 $+ บ $+  $+ %::c1 $duration(%::idletime)
  %:echo %::pre Signonÿÿÿ  $+ %::c3 $+ บ $+  $+ %::c1 %::signontime
}
alias sun.blind.whois3 {
  %:echo %::pre Serverÿÿÿ  $+ %::c3 $+ บ $+  $+ %::c1 %::wserver ( $+ %::serverinfo $+ )
}
alias sun.blind.whois8 {
  %:echo %::pre registered $+ %::c3 $+ บ $+  $+ %::c1 Yes
}
alias sun.blind.whois4 {
  %:echo %::pre Channelsÿ  $+ %::c3 $+ บ $+  $+ %::c1 %::chan
}
alias sun.blind.whois5 {
  %:echo %::pre Awayÿÿÿÿÿ  $+ %::c3 $+ บ $+  $+ %::c1 %::text
}
alias sun.blind.whois6 {
  %:echo %::pre IRCOpÿÿÿÿ  $+ %::c3 $+ บ $+  $+ %::c1 %::operline
}
alias sun.blind.onjoin1 {
  %:echo %::pre Created on $asctime(%::text,ddd) $+ , $asctime(%::text,mm/dd) $+ $asctime(%::text,/yyyy) @ $asctime(%::text,h:nntt)
  %:echo  $+ %::c3 $+ ษอออออออออออออออออป $+ 
}
alias sun.blind.onjoin2 {
  %:echo %::pre Modes %::modes
}
alias sun.blind.onjoin3 {
  %:echo  $+ %::c3 $+ ศอออออออออออออออออผ $+ 
  %:echo %::pre Topic %::text
}
alias sun.blind.onjoin4 {
  %:echo %::pre Topic set by %::nick
}
alias sun.blind {
  %:echo  $+ %::c3 $+ ศอออออออออออออออออผ $+ 
  %:echo %::pre $1-
  %:echo  $+ %::c3 $+ ษอออออออออออออออออป $+ 
}

alias align { return $+($str($2-,$calc($1 - $len($2-)))) }
