alias nature.whois1 {
  %:echo  $+ %::c1 $+ !ס $+ %::c3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  %:echo  $+ %::c1 $+ !ס $+ %::c3 Whois on: $+ %::c2 %::nick
  %:echo  $+ %::c1 $+ !ס $+ %::c3 Real name: $+ %::c2 %::realname
  %:echo  $+ %::c1 $+ !ס $+ %::c3 Address: $+ %::c2 %::address
  if ($mtsengine == HennesScript) %:echo  $+ %::c1 $+ !ס $+ %::c3 Country: $+ %::c2 $get_country($2)
  else %:echo  $+ %::c1 $+ !ס $+ %::c3 Country: $+ %::c2 Not supported by MTS engine
}
alias nature.whois2 %:echo  $+ %::c1 $+ !ס $+ %::c3 Idle time: $+ %::c2 %::idletime | %:echo  $+ %::c1 $+ !ס $+ %::c3 Signon time: $+ %::c2 %::signontime
alias nature.whois3 %:echo  $+ %::c1 $+ !ס $+ %::c3 Server info: $+ %::c2 %::wserver ( $+ %::serverinfo $+ )
alias nature.whois4 %:echo  $+ %::c1 $+ !ס $+ %::c3 Registered nick: $+ %::c2 %::isoper
alias nature.whois5 %:echo  $+ %::c1 $+ !ס $+ %::c3 Operator: $+ %::c2 %::isregd
alias nature.whois6 %:echo  $+ %::c1 $+ !ס $+ %::c3 Away: $+ %::c2 %::text
alias nature.whois7 %:echo  $+ %::c1 $+ !ס $+ %::c3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
