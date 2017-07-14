alias eme.whois1 {
  %:echo 02[13start whois02]
  %:echo %::pre 14[whois] 02Whois:00 %::nick 02(13 $+ %::address $+ 02)
  %:echo %::pre 14[whois] 02Real name:00 %::realname
}
alias eme.whois2 %:echo %::pre 14[whois] 02Idle time:00 $duration(%::idletime) | %:echo %::pre 14[whois] 02Signon time/date:00 %::signontime
alias eme.whois3 %:echo %::pre 14[whois] 02Server:00 %::wserver 02(13 $+ %::serverinfo $+ 02)
alias eme.whois4 %:echo %::pre 14[whois] 02IRCop:00 Yes 02(13 $+ $remove(%::operline,is an) $+ 02)
alias eme.whois5 %:echo %::pre 14[whois] 02Services:00 identified
alias eme.whois6 %:echo %::pre 14[whois] 02Away:00 %::text
alias eme.whois8 %:echo %::pre 14[whois] 02Channels:00 %::chan
alias eme.whois7 %:echo 02[13end of whois02]
alias eme.join1 %:echo %::pre $asctime($3,dddd) $+ , $asctime($3,mmmm doo) $+ , $asctime($3,yyyy) at $asctime($3,h:nntt)
