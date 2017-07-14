alias hsnw.whois1 {
  %:echo ×
  %:echo %::pre Who is: %::nick ( $+ %::address $+ )
  %:echo %::pre Real name: %::realname
  if ($mtsengine == HennesScript) %:echo %::pre Country: $get_country($2)
  else %:echo %::pre Country: Not supported by MTS engine
}
alias hsnw.whois2 %:echo %::pre Idle time: %::idletime | %:echo %::pre Signon time/date: %::signontime
alias hsnw.whois3 %:echo %::pre Using: %::wserver ( $+ %::serverinfo $+ )
alias hsnw.whois4 %:echo %::pre This user is an IRCop ( $+ %::isoper $+ )
alias hsnw.whois5 %:echo %::pre Registered nick: %::isregd
alias hsnw.whois6 %:echo %::pre Away: %::text
alias hsnw.whois7 %:echo ×
alias hsnw.join if (!%::site) set -u0 %::site $gettok(%::address,2,64) | %:echo %::pre Join: %::nick ( $+ %::address $+ ) $clones(%::site,%::nick,%::chan) $who_was(%::site,%::nick)
