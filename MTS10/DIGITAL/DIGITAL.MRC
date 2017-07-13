alias digital.whois1 {
  %:echo %::pre $+ whois start)......................................
  %:echo  $+ %::c1 $+ .  $+ %::c3 Whois on: $+ %::c2 %::nick
  %:echo  $+ %::c1 $+ .  $+ %::c3 Real name: $+ %::c2 %::realname
  %:echo  $+ %::c1 $+ .  $+ %::c3 Address: $+ %::c2 %::address
  if ($mtsengine == HennesScript) %:echo  $+ %::c1 $+ .  $+ %::c3 Country: $+ %::c2 $get_country($2)
  else %:echo  $+ %::c1 $+ .  $+ %::c3 Country: $+ %::c2 Not supported by MTS engine
}
alias digital.whois2 %:echo  $+ %::c1 $+ .  $+ %::c3 Idle time: $+ %::c2 %::idletime | %:echo  $+ %::c1 $+ .  $+ %::c3 Signon time: $+ %::c2 %::signontime
alias digital.whois3 %:echo  $+ %::c1 $+ .  $+ %::c3 Server info: $+ %::c2 %::wserver ( $+ %::serverinfo $+ )
alias digital.whois4 %:echo  $+ %::c1 $+ .  $+ %::c3 Registered nick: $+ %::c2 %::isoper
alias digital.whois5 %:echo  $+ %::c1 $+ .  $+ %::c3 Operator: $+ %::c2 %::isregd
alias digital.whois6 %:echo  $+ %::c1 $+ .  $+ %::c3 Away: $+ %::c2 %::text
alias digital.whois7 %:echo %::pre $+ whois end)......................................
alias digital.ts return [ $+ $asctime(hh:nn:ss) $+ ]